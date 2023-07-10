import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import {
  useApproveTaskMutation,
  useGetTasksQuery,
  useSendMoneyMutation,
  useRedoTaskMutation
} from "../../store/apiSlice";
import { blackstyles } from "../../styles/blackstyles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { COLORS } from "../../constants";
import { Profile } from "../../components/renderProfile/profile";

export function ParentTask(props) {
  
  const studentId = useSelector((state) => state.account.account.userId);
  const [isAddTaskVisible, setisAddTaskVisible] = useState(true)
  const kids = useSelector((state) => state.parentAccount.account.children);
 
  const [showPendingTasks, setShowPendingTasks] = useState(true);
  const [showInReviewTasks, setShowInReviewTasks] = useState(false);
const [bottomBorder, setbottomBorder] = useState(COLORS.blue)
const [textColor, settextColor] = useState('#000')
const [opacityVal, setopacityVal] = useState(1)


const [bottomBorder2, setbottomBorder2] = useState(COLORS.lightGreen)
const [textColor2, settextColor2] = useState('#333')
const [opacityVal2, setopacityVal2] = useState(0.6)

  const [sendMoney, { data:sendMoneyData, error:sendMoneyError, isLoading:sendMoneyLoading }] = useSendMoneyMutation();
  const [redoTaskId, { data:redoData, error:redoError, isLoading:redoLoading }] = useRedoTaskMutation();

  const [showStudentDetails, setshowStudentDetails] = useState(false)
  const userIds = [];

  for (const kid of kids) {
  userIds.push(kid.userId);
  }
  const { data, isLoading, error, refetch } = useGetTasksQuery(studentId);
  const tasks = [];
  userIds.map(async (userId) => {
    const { data, isLoading, error } =  useGetTasksQuery(userId);
  
    if (isLoading) {
      return <ActivityIndicator />;
    }
      if (error) {
      console.log(error);
    }
    tasks.push({tasks:data.data,userId:userId})

  })

  const navigation = useNavigation();

  const childName = useSelector((state) => state.account.account.name);
  const parentId = useSelector((state) => state.parentAccount.account.userId);
 
  const [showPopup, setShowPopup] = useState(false);

  const [opacity] = useState(new Animated.Value(0));

  const [datafromComponent, setData] = useState([]);
  const socket = io("https://backend-5ig7.onrender.com/");


  useEffect(() => {
    socket.on("TaskSentForApproval", (Task) => {
      console.log(Task, studentId, "iiioooooi");
      if (Task.studentId === studentId) {
        console.log("Id is matching");
        refetch();
      }
    });
    return () => {
      socket.off("TaskSentForApproval");
    };
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  
  if (sendMoneyError) {
    console.log('error wHILE SENDING MONEY');
  }
  
  if (error) {
    console.log(error);
  }
  const Task = data.data;
  const [pendingData, setpendingData] = useState(Task.filter((item) => item.status === "pending"))
  
  


const toggleProfileChange = (dataOntoggle) => {

const kidTasks = tasks.find(item => item.userId === dataOntoggle)?.tasks || [];


const pending=kidTasks

  setpendingData(pending);

  
  }

const togglePopup = (data) => {
console.log(data);
    setData(data);
    setisAddTaskVisible(false)
    setShowPopup(true);

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
    setisAddTaskVisible(true)
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
  const redoTask=async(id)=>{
console.log(id);
const result=await redoTaskId({id:id})
console.log(result);
if (result.data.status === "Ok") {
alert('Marked as undone')
}
  }
  async function sendMoneyToDatabase(taskDetails) {
    const taskapproval = await sendMoney(taskDetails);
    
    if (taskapproval.data.status === "Ok") {
      taskDetails.type = "Approved";
      const fullInfo = taskDetails;

      delete fullInfo.imageUri;
    alert("Money Sent Successfully");  
      socket.emit("ApproveTask", fullInfo);
    } else if (taskapproval.data.status === "Zero Balance") {
      console.log("err");
      Alert.alert(
        "Add money to your account",
        "There is no balance in your account .",
        [
          {
            text: "Add Money",
            onPress: () => navigation.navigate("Add account"),
          },
        ]
      );
    } else {
      alert("Server Error Please try again later");
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
   
    <View>
        <View
          style={{
            justifyContent: "flex-start",
          }}
        >
         <Profile kids={kids} ProfikleChange={toggleProfileChange} />

           <Pressable style={[{marginLeft:'15%',marginTop:'5%',marginBottom:0}]}>
          </Pressable>
        </View>
        <View style={styles.body}>
       
        <TouchableOpacity
        >
          <Text style={[styles.bodyTxt]}>Tasks</Text>
        </TouchableOpacity>
      </View>

        <View style={{ marginBottom: 120 }}>
        {showPendingTasks && pendingData.length > 0 ? (
          <FlatList
          data={pendingData}
          numColumns={1}
          renderItem={(item) => <Item data={item} popup={togglePopup} />}
        />
         
          
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>No Pending Tasks Yet</Text>
          </View>    
          )  }
       
        </View>

        {showPopup && <View style={styles.overlay} />}

        {showPopup && (
          <Animated.View style={[styles.popupContainer, { opacity }]}>
            <TouchableOpacity onPress={hidePopup} style={styles.crossButton}>
              <Text style={{ fontSize: 19, color: "white" }}>X</Text>
            </TouchableOpacity>

            <View>
              <View style={[styles.popupContent,{paddingTop:'10%'}]}>
                <View style={styles.popupHeader}>
                  <View>
                    <Text style={styles.popupBoldText}>My Tasks</Text>
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
                          justifyContent: "space-evenly",
                          width: "100%",
                          paddingHorizontal: 10,
                        }}
                      >
                        <Image
                          source={require("../../assets/icons/bill.png")}
                          resizeMode="contain"
                          style={[styles.btnImage, { tintColor: COLORS.blue }]}
                        />
                        <Text style={styles.popupBoldText}>
                          {datafromComponent.name}
                        </Text>
                      </View>
                      {datafromComponent.status === "completed" ? (
                        <Text
                        style={{
                          fontSize: 9,
                          color: "#000",
                          top: 3,
                          opacity: 0.6,
                          position: "relative",
                          right: 80,
                          backgroundColor: "lightgreen",
                          padding: 8,
                          paddingHorizontal:10,
                          borderRadius: 5,
                        }}
                      >
                      {datafromComponent.status}

                      </Text>
                      ) : (
                        <Text
                        style={{
                          fontSize: 9,
                          color: "#fff",
                          top: 3,
                          opacity: 0.6,
                          position: "relative",
                          right: 80,
                          backgroundColor: "red",
                          padding: 3,
                          borderRadius: 5,
                        }}
                      >
                        {datafromComponent.status}
                      </Text>
                      )}
                      
                    </View>
                  </View>

                  {datafromComponent.status === "completed" ? (
                    <View
                    >
                      <View>
                      <TouchableOpacity
                        style={styles.btn2}
                        onPress={() => {
                          const data = {
                            ...datafromComponent, 
                            imageUri: "this is a scam image",
                            parentId: parentId, 
                            childName: childName,
                          };
  
                         sendMoneyToDatabase(data)
                        }}
                      >
                      {sendMoneyLoading ? (
                        <ActivityIndicator /> // Show the loading indicator
                      ) : (
                        <Text style={{ fontSize: 12 }}>
                        Reward {datafromComponent.amount}
                        </Text>
                      
                      )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.btn2,{backgroundColor:'#fff',borderWidth:0}]}
                 onPress={()=>{
                  redoTask(datafromComponent._id)
                 }}
                        >
                        <Text style={{ fontSize: 12 }}>
                        Mark as incomplete                   
                             </Text>
                      </TouchableOpacity>
                      </View>
  
                      </View>

                    ) : (
                      <View>
                      <TouchableOpacity
                        style={styles.btn2}
                        onPress={() => {
                          const data = {
                            ...datafromComponent, // Spread the existing properties
                            imageUri: "this is a scam image", // Add new property 'imageUri'
                            parentId: parentId, // Add new property 'parentId'
                            childName: childName, // Add new property 'childName'
                          };
               
                         sendMoneyToDatabase(data)
                        }}
                      >
                      {sendMoneyLoading ? (
                        <ActivityIndicator /> // Show the loading indicator
                      ) : (
                        <Text style={{ fontSize: 12 }}>
                        Completed ? Reward {datafromComponent.amount}
                        </Text>
                                         
                      )} 
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.btn2,{backgroundColor:'#fff',borderWidth:0}]}
                       >
                    
                      </TouchableOpacity>
                    </View>
  
                    )}

                </View>
              </View>
            </View>
          </Animated.View>
        )}
      </View>

     {isAddTaskVisible ? <View style={styles.addTaskButton}>
     <TouchableOpacity style={styles.button} onPress={() => {
       navigation.navigate("Add Task");
     }}>
       <MaterialIcons name="add" size={24} color="#000" />
     </TouchableOpacity>
   </View> : null

     } 
    </View>
        
  
  );
}
function Item(props) {

  const sendDataToParent = () => {
    props.popup(props.data.item);
  };

  return (
    <View style={{height:110}}>
      <TouchableOpacity onPress={sendDataToParent}>
      
      <View>
       
        
     
          <View style={[styles.popupContent,{height:110}]}>
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
                    justifyContent: "space-evenly",
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
                  <Text style={styles.popupBoldText}>
                  {props.data.item.name}
                  </Text>
                </View>

                {props.data.item.status === "completed" ? (
                  <Text
                  style={{
                    fontSize: 9,
                    color: "#000",
                    top: 3,
                    opacity: 0.6,
                    position: "relative",
                    right: 80,
                    backgroundColor: "lightgreen",
                    padding: 2,
                    paddingHorizontal:7,
                    borderRadius: 5,
                  }}
                >
                {props.data.item.status}

                </Text>
                ) : (
                  <Text
                  style={{
                    fontSize: 9,
                    color: "#fff",
                    top: 3,
                    opacity: 0.6,
                    position: "relative",
                    right: 80,
                    backgroundColor: "red",
                    padding: 2,
                    paddingHorizontal:7,
                    borderRadius: 5,
                  }}
                >
                  {props.data.item.status}
                </Text>
                )}
              </View>
            </View>
  <View>
            </View>
          </View>
          </View>

     

        
            </View>
      
      </TouchableOpacity>
    </View>
  );
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
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
  addTaskButton: {
    position: 'absolute',
    bottom: 18,
    right: 18,
  },
  
button: {
  backgroundColor: COLORS.secondarygreen,
  borderColor: COLORS.secondarygreen,
color:'#000',
  width: 56,
  height: 56,
  borderRadius: 28,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 4,
},
  popupContainer: {
    position: "absolute",
    bottom: 0,
height:'45%',
width:'100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  
    opacity: 1,
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
    padding: "5%",
    paddingTop:0,
    paddingBottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 1,
    backgroundColor: "#fff",

  },
  popupHeader: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "stretch",
    marginTop:'5%',
    justifyContent: "space-between",
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
    width: "100%",
    alignItems: "center",
    marginLeft: 0,
    borderColor: COLORS.secondarygreen,
    borderWidth: 3,
    backgroundColor: COLORS.secondarygreen,
    borderRadius: 5,
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
    marginHorizontal: "5%",
    borderBottomWidth: 0,
    backgroundColor: COLORS.lightGreen,
    borderRadius: 20,
  },
  bodyTxt: {
    paddingBottom: 16,
    borderBottomColor: COLORS.blue,
    borderBottomWidth: 2,
  },
});