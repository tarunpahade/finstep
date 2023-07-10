import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
  FlatList,
  StatusBar,
  Image,
  ActivityIndicator,
  Animated,
} from "react-native";
import { pagestyles } from "../../styles/pagesStyles";
import {
  useGetTasksQuery,
  useStoreNotificationMutation,
  useUploadImageMutation,
} from "../../store/apiSlice";
import * as ImagePicker from "expo-image-picker";
import { blackstyles } from "../../styles/blackstyles";
import * as FileSystem from "expo-file-system";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { color } from "react-native-reanimated";
import { COLORS } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";

export function Tasks({ navigation }) {
  const studentId = useSelector((state) => state.account.account.userId);
  const { data, isLoading, error, refetch } = useGetTasksQuery(studentId);
  const [uploadImage, { data2, error2, isLoading2 }] = useUploadImageMutation();
  const socket = io("https://backend-5ig7.onrender.com/");
  const [showPopup, setShowPopup] = useState(false);
  const name = useSelector((state) => state.account.account.name);
  const parentId = useSelector((state) => state.account.account.parentId);

  const [opacity] = useState(new Animated.Value(0));
  const [showPendingTasks, setShowPendingTasks] = useState(true);
  const [showInReviewTasks, setShowInReviewTasks] = useState(false);
  const [datafromComponent, setData] = useState([]);
const [bottomBorder, setbottomBorder] = useState(COLORS.blue)
const [textColor, settextColor] = useState('#000')
const [opacityVal, setopacityVal] = useState(1)

const [bottomBorder2, setbottomBorder2] = useState(COLORS.lightGreen)
const [textColor2, settextColor2] = useState('#333')
const [opacityVal2, setopacityVal2] = useState(0.6)

  const fileLaunch = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let asset = result.assets[0];
      let base64 = await FileSystem.readAsStringAsync(asset.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const data = {
        ...datafromComponent, // Spread the existing properties
        imageUri: base64, // Add new property 'imageUri'
        parentId: parentId, // Add new property 'parentId'
        childName: name, // Add new property 'childName'
      };
      uploadToDatabase(data);
    }
  };

  async function uploadToDatabase(data) {
    setShowPopup(false);
    const result = await uploadImage(data);
    console.log(result);
    if (result.error) {
      alert("There was error uploading");
    }
    if (result.data.status === "Ok") {
      alert("Image uploaded");
      socket.emit("TaskSentForApproval", data);
    } else {
      alert("There was error uploading");
    }
    console.log(data);
  }
  const togglePopup = (data) => {
    setShowPopup(true);
    console.log(data, "here it is");
    setData(data.item);
    console.log(data, "this is data from child");
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      },
    });
  };

  const hidePopup = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {});
    setShowPopup(false);
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#fff",
      },
    });
  };
  useEffect(() => {
    // Listen for the 'newOrder' event
    socket.on("newTask", (Task) => {
      console.log(Task, studentId);
      if (JSON.parse(Task.studentId) === studentId) {
        alert("Parent added a new task");
        refetch();
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      socket.off("newTask");
    };
  }, []);
  if (isLoading) {
    return <ActivityIndicator size={'large'} style={{flex:1}} />;
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }
  console.log(error2, isLoading2);
  const Taskss = data.data;
  let pendingData = Taskss.filter((item) => item.status === "pending");
  let approveTask = Taskss.filter(
    (item) => item.status === "completed"
  );

  if (pendingData.length === 0) {
    pendingData = [{ name: "No Pending Tasks Yet", amount: " ", status: '' }];
  }

  if (approveTask.length === 0) {
    approveTask = [
      { name: "No Tasks in Review Yet", amount: " ", status: null },
    ];
  }

  return (
    <View style={[pagestyles.container]}>
      <View>
      <StatusBar />
        <View style={{ marginBottom: 100,marginTop:30 }}>
          <View style={styles.body}>
            <TouchableOpacity
              onPress={() => {
                setShowPendingTasks(true);
                setShowInReviewTasks(false);

                setbottomBorder(COLORS.blue)
                settextColor('#000')
                setopacityVal(1)
   
                setbottomBorder2(COLORS.lightGreen)
                settextColor2('#333')
                setopacityVal2(0.6)
              }}
            >
              <Text style={[styles.bodyTxt,{borderBottomColor:bottomBorder,color:textColor,opacity:opacityVal}]}>Assigned</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowPendingTasks(false);
                setShowInReviewTasks(true);
             setbottomBorder2(COLORS.blue)
             settextColor2('#000')
             setopacityVal2(1)

             setbottomBorder(COLORS.lightGreen)
             settextColor('#333')
             setopacityVal(0.6)
              }}
            >
              <Text style={[styles.bodyTxt,{borderBottomColor:bottomBorder2,color:textColor2,opacity:opacityVal2}]}>In Review</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:30}}>
          {showPendingTasks && (
            <FlatList
              data={pendingData}
              numColumns={1}
              renderItem={(item) => <Item data={item} popup={togglePopup} />}
            />
          )}
          {showInReviewTasks && (
            <FlatList
              data={approveTask}
              numColumns={1}
              renderItem={(item) => <Item data={item} popup={togglePopup} />}
            />
          )}
          </View>
        </View>
      </View>
      {showPopup && <View style={styles.overlay} />}

      {showPopup && (
        <Animated.View style={[styles.popupContainer, { opacity }]}>
          <TouchableOpacity onPress={hidePopup} style={styles.crossButton}>
            <Text style={{ fontSize: 19, color: "white" }}>X</Text>
          </TouchableOpacity>

          <ScrollView style={styles.popupContainer}>
            {/* Cross button */}

            {/* Popup content */}
            <View style={styles.popupContent}>
              <View style={styles.popupHeader}>
                <View>
                  <Text style={styles.popupBoldText}>My Task</Text>
                </View>
                <View>
                  <Text>{datafromComponent.amount}</Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <View
                  style={[
                    blackstyles.PanelItemContainer,
                    { width: "73%", marginTop: 30 },
                  ]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "baseline",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        padding: 6,
                        flexDirection: "row",
                        alignItems: "stretch",
                        justifyContent: "space-around",
                        //   backgroundColor:'#333',
                        width: "100%",
                        paddingHorizontal: 10,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/bill.png")}
                        resizeMode="contain"
                        style={[styles.btnImage, { tintColor: COLORS.blue }]}
                      />
                      <Text style={[styles.popupBoldText,{paddingLeft:30}]}>
                        {datafromComponent.name}
                      </Text>
                    </View>

                   
                  </View>
                </View>
                <View
                  style={[
                    blackstyles.PanelItemContainer,
                    {
                      padding: 14,
                      maxWidth: "89%",
                      justifyContent: "space-around",
                    },
                  ]}
                >
                  <View style={{ padding: 0 }}>
                    <Text style={{ fontSize: 12, fontWeight: "400" }}>
                      Mark this task complete or upload photo and send it to
                      your parent for review. Parent will pay poket money on
                      approving this task.
                    </Text>
                  </View>
                </View>
                {datafromComponent.status === "pending" && (
                  <View>
                  <TouchableOpacity style={styles.btn3} onPress={fileLaunch}>
                    <MaterialIcons
                      name="file-upload"
                      styles={{ padding: 5 }}
                      size={20}
                      color="#000"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btn2}
                    onPress={() => {
                      const data = {
                        ...datafromComponent, // Spread the existing properties
                        imageUri: "this is a scam image", // Add new property 'imageUri'
                        parentId: parentId, // Add new property 'parentId'
                        childName: name, // Add new property 'childName'
                      };

                      uploadToDatabase(data);
                    }}
                  >
                    <Text style={{ fontSize: 12 }}>
                      I have completed the task
                    </Text>
                  </TouchableOpacity>
                </View>
                )  }
             
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
}
//Mark this task complete and send it to your parent for review

function Item(props) {
  const item = props.data;
  
  const sendDataToParent = () => {
    props.popup(item);
  };
  console.log(item.item);
  return (
    <View style={{marginHorizontal:'5%',width:'90%'}}>
      <TouchableOpacity onPress={sendDataToParent}>
        <View style={blackstyles.PanelItemContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* this ia the text container */}
            <View>
              <Text style={{ fontSize: 19, color: COLORS.black }}>
                {props.data.item.name}
              </Text>
             {props.data.item.status === "pending" && (
              <Text
              style={{  fontSize: 9,
                fontSize: 9,
                color: "#000",
                opacity: 0.6,
                right: 0,
                backgroundColor: "red",
                padding: 5,
                borderRadius: 5,
                width:60,
                margin:10,
                marginBottom:0,
                
                        }}
            >  {props.data.item.status}
            </Text>
             )}
             {props.data.item.status === "completed" && (
              <Text
              style={{
                fontSize: 9,
                color: "#000",
                opacity: 0.6,
                right: 0,
                backgroundColor: "lightgreen",
                padding: 5,
                borderRadius: 5,
                width:60,
                margin:10,
                marginBottom:0,
                
                        }}
            >  {props.data.item.status}
            </Text>
             )}
              
            </View>
          </View>
          <View style={{ marginRight: 10 }}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  notificationNav: {
    flexDirection: "row",
    width: "92%",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },

  miniIcon: {
    backgroundColor: "#333",
    borderRadius: 100,
    justifyContent: "center",
    padding: 6,
    borderWidth: 1,
    borderColor: "#fff",
  },

  camera: {
    height: 400,

    bottom: 100,
  },
  text: {
    color: "#000",

    fontWeight: "bold",
    textAlign: "center",
  },
  popupContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height * 0.5,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    opacity: 0.7,
  },
  crossButton: {
    position: "absolute",
    top: -50,
    right: 10,
    padding: 5,
    paddingHorizontal: 8,
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
  },
  popupContent: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
  },
  popupHeader: {
    display: "flex",
    width: "100%",

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "stretch",

  },
  btnImage: {
    height: "45%",
    width: "35%",
    paddingBottom: 30,
  },
  popupBoldText: { fontSize: 14, color: "#000", fontWeight: "700" },
  btn2: {
    padding: 7,
    paddingHorizontal: 7,
    marginVertical: 10,
    width: "75%",
    alignItems: "center",
    marginLeft: 20,
    borderColor: COLORS.secondarygreen,
    borderWidth: 3,
    backgroundColor: COLORS.secondarygreen,
    borderRadius: 5,
    position: "absolute",
    left: 32,
  },
  btn3: {
    padding: 7,
    paddingHorizontal: 5,
    marginVertical: 10,
    width: "15%",
    alignItems: "center",
    marginLeft: 5,
    backgroundColor: COLORS.secondarygreen,
    borderRadius: 5,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    width: "90%",
    marginHorizontal:'5%',
borderBottomWidth:0,
backgroundColor:COLORS.lightGreen,
borderRadius:20  },
  bodyTxt: {
    paddingBottom: 16,
    borderBottomColor: COLORS.blue,
    borderBottomWidth: 2,
  },
});
