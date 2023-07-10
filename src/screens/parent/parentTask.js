import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useApproveTaskMutation, useGetTasksQuery } from "../../store/apiSlice";
import { Alltask } from "../../store/taskSlice";
import { blackstyles } from "../../styles/blackstyles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { taskSlice } from "../../store/taskSlice";
import { useDispatch, useSelector} from "react-redux";
export function ParentTask(props) {
  const navigation=useNavigation()
const dispatch=useDispatch()
  const [bgcolor, setbgColor] = useState("#000");
  const [color, setColor] = useState("#fff");

  const [bgcolor2, setbgColor2] = useState("#fff");
  const [color2, setColor2] = useState("#000");

  const [bgcolor3, setbgColor3] = useState("#fff");
  const [color3, setColor3] = useState("#000");

  const [showPending, setPending] = useState(true);
  const [showCompleted, setCompleted] = useState(false);
  const [showApproved, setApproved] = useState(false);
 
//const studentId = useSelector((state) => state.auth.user.id);
const studentId = 6314434; 
  const { data, isLoading, error } = useGetTasksQuery(studentId);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }
 


  const Task = data.data

  const tata=new Array (Task)

  const Task2 = tata.flat();

  if(props.route.params){
console.log('start');

    const task=props.route.params.task
Task2.push(task)

 }


 
  let pendingData = Task2.filter((item) => item.status === "pending");
  let completedData = Task2.filter((item) => item.status === "completed");
  let approvedData = Task2.filter((item) => item.status === "approved");
  if (approvedData.length === 0) {
    approvedData = [{ name: "No Approved Tasks Yet", amount: "" }];
  }
  if (pendingData.length === 0) {
   
    pendingData = [{ name: "No Pending Tasks Yet", amount: "" }];
  }
  if (completedData.length === 0) {
    completedData = [{ name: "No Completed Tasks Yet", amount: "" }];
  }

  const onButtonPress = () => {
    setApproved(false);
    setPending(true);
    setCompleted(false);

    setbgColor("#000");
    setColor("#fff");

    setbgColor2("#fff");
    setColor2("#000");

    setbgColor3("#fff");
    setColor3("#000");
  };
  const onButtonPress2 = () => {
    setApproved(false);
    setPending(false);
    setCompleted(true);

    //to change colors
    setbgColor2("#000");
    setColor2("#fff");

    setbgColor("#fff");
    setColor("#000");

    setbgColor3("#fff");
    setColor3("#000");
  };
  const onButtonPress3 = () => {
    setApproved(true);
    setPending(false);
    setCompleted(false);

    setbgColor3("#000");
    setColor3("#fff");

    setbgColor2("#fff");
    setColor2("#000");

    setbgColor("#fff");
    setColor("#000");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "2%",
          }}
        >
          <Pressable
            style={[styles.topContainer, { backgroundColor: bgcolor }]}
            onPress={onButtonPress}
          >
            <Text style={{ color: color }}>Pending</Text>
          </Pressable>

          <Pressable
            style={[styles.topContainer, { backgroundColor: bgcolor2 }]}
            onPress={onButtonPress2}
          >
            <Text style={{ color: color2 }}>Completed</Text>
          </Pressable>
          <Pressable
            style={[styles.topContainer, { backgroundColor: bgcolor3 }]}
            onPress={onButtonPress3}
          >
            <Text style={{ color: color3 }}>Approved</Text>
            </Pressable>
         

            </View>
            <ScrollView>
        <View style={{marginBottom:120}}>
        
          {showPending && (
            <FlatList
              data={pendingData}
              numColumns={1}
              renderItem={(item) => <Item data={item} />}
            />
          )}
          {showCompleted && (
            <FlatList
              data={completedData}
              numColumns={1}
              renderItem={(item) => <Item data={item} />}
            />
          )}
          {showApproved && (
            <FlatList
              data={approvedData}
              numColumns={1}
              renderItem={(item) => <Item data={item} />}
            />
          )}
        </View>
        </ScrollView>
        </View>
      
      
      <TouchableOpacity style={{bottom:10,position:"absolute",width:'100%'}} onPress={()=>{navigation.navigate('Add Task')}}>
      <View style={styles.btn2}>
      <Text style={{color:'#fff'}}>Add Task</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}
function Item(props) {
  const [showImage, setShowImage] = useState(false);
  const navigation = useNavigation();
  const [approveTask, { data2, error2, isLoading2 }] = useApproveTaskMutation();
  async function  approvetask(data){
    console.log(data);
    await approveTask({id:data})
 console.log('sent');
 
  
 }
  return (
    <View>
      <View style={blackstyles.PanelItemContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* this ia the text container */}
          <View>
            <Text style={{ fontSize: 19, color: "#000" }}>
              {props.data.item.name}
            </Text>
            <Text style={{ fontSize: 14, color: "#000", opacity: 0.6 }}>
              {props.data.item.amount}
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 10 }}></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          {props.data.item.imageUri && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "stretch",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ImageViewer", {
                      image: props.data.item.imageUri,
                    });
                  }}
                  style={[styles.miniIcon, { marginHorizontal: 10 }]}
                >
                  <MaterialIcons
                    name="remove-red-eye"
                    styles={{ padding: 15 }}
                    size={23}
                    color="#fff"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.miniIcon, { marginHorizontal: 10 }]}
                  onPress={() => {
                    approvetask(props.data.item._id)
                  }}
                >
                  <MaterialIcons
                    name="done"
                    styles={{ padding: 15 }}
                    size={23}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {props.data.item.status === "pending" && (
            <TouchableOpacity
              onPress={() => {
                alert("reminder sent");
              }}
              style={[
                styles.miniIcon,
                { marginHorizontal: 10, borderRadius: 0 },
              ]}
            >
              <Text style={{ color: "#fff" }}>Send Reminder</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 17,
  },
  notificationNav: {
    flexDirection: "row",
    width: "92%",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  miniIcon: {
    backgroundColor: "#333",
    borderRadius: 100,
    justifyContent: "center",
    padding: 6,
    borderWidth: 1,
    borderColor: "#fff",
  },
  btn2:{
    padding:10,
    margin:15,
    alignItems:'center',
    color:'#fff',
    backgroundColor:'#000'
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
});
