import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Modal,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Notification } from "../../components/notification/notification";
import { homestyles } from "../../styles/homestyles";
import { Buttons } from "../../components/buttonContainer/buttons";
import { COLORS, SIZES, FONTS, icons } from "../../constants";
import SendNotifications, {
  registerForPushNotificationsAsync,
} from "../../components/sendNotification/notification";
import { useDispatch, useSelector } from "react-redux";
import FAQPage from "../../components/faq/faq";
import { io } from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDeleteNotificationMutation, useGetStoredNotificationQuery } from "../../store/apiSlice";

export const Home = ({ navigation }) => {
  const [notificationclick, setnotificationclick] = useState(false);
  const studentId = useSelector((state) => state.account.account.userId);
  const { data, isLoading, error,refetch } = useGetStoredNotificationQuery(studentId)
  const [deleteNotification,{ data2, isLoading2, error2 }] = useDeleteNotificationMutation()

  const profileData = useSelector((state) => state.account);
  const balance = useSelector((state) => state.account.account.balance);
  const [help, sethelp] = useState(false);
  const socket = io("https://backend-5ig7.onrender.com/");
 
const name = useSelector((state) => state.account.account.name);
const removeTask = async(task) => {
  const id={id:task._id}
  console.log(id,'this is id');
 const deletyed=await deleteNotification(id)
 console.log('this is delete');
if(deletyed.data.status==='Ok'){
  
  navigation.navigate('Tasks')
};
}

useEffect(() => {
  socket.on("newTask", (newTask) => {
    if (JSON.parse(newTask.studentId) === studentId) {
  
    refetch()     
    }
  });

  socket.on("RemindTask", async(remindTask) => {
    if (JSON.parse(remindTask.studentId) === studentId) {
          refetch() 
  }
  });

  socket.on("ApproveTask", (approveTask) => {
    if (JSON.parse(approveTask.studentId) === studentId) {
    refetch() 
      
     
      

      console.log(
        tasksLength,
       
        
      );
    }
  });
  return () => {
    socket.off("newTask");
    socket.off("RemindTask");
    socket.off("ApproveTask");
  };
}, []); 


if (isLoading) {
  return  <ActivityIndicator size={'large'} style={{flex:1}} />
}
if (error) {
  return <Text>Error{error.error}</Text>;
}
const notificationData=data.data

  const tasksLength= notificationData.length
  console.log(tasksLength);


  //registerForPushNotificationsAsync()
  

  function helpClick() {
    sethelp(true);
  }
  function hideHelp() {
    sethelp(false);
  }
  function transaction() {
    navigation.navigate("Transactions");
  }
  function savings() {
    navigation.navigate("Savings");
  }
  function analysis() {
    navigation.navigate("Analytics");
  }
  function tasks() {
    navigation.navigate("Tasks");
  }

  function course() {
    navigation.navigate("Courses");
  }

  function profileClick() {
    navigation.navigate("Profile", { data: profileData });
  }

  function requestMoney() {
    navigation.navigate("Payment");
  }

  function parentTask() {
    navigation.navigate("Qr Code");
  }
  function addMoney() {
    navigation.navigate("Request Money");
  }

  const faqData = [
    {
      question: "1. How to complete a task?",
      answer:
        "Got to task section and choose the particular task on the opposite side you will find three buttons first represents complete without upoading photo and second you can click a photo and on the third you can choose from gallery",
    },
    {
      question: "2. How to request money?",
      answer:
        "Go to the request page and enter the amount and click on request money",
    },
    {
      question: "3. How to see recent transactions?",
      answer:
        "Go to the statements button on the home page and you will find all the transactions",
    },
    {
      question: "4. How to analyze spending or Income?",
      answer:
        "Go to the analytics page from the home page and selct expenses  or Income ",
    },
  ];
  

  const featuresData = [
    {
      id: 1,
      icon: icons.scan,
      color: COLORS.red,
      backgroundColor: COLORS.lightpurple,
      description: "Scan QR",
      onpress: parentTask,
    },
  
    {
      id: 2,
      icon: icons.history,
      backgroundColor: COLORS.lightyellow,
      description: "Statement",
      onpress: transaction,
    },
    {
      id: 6,
      icon: icons.mobile,
      backgroundColor: COLORS.lightRed,
      description: "Payment",
      onpress: requestMoney,
    },
    {
      id: 3,
      icon: icons.savings,
      backgroundColor: COLORS.lightGreen,
      description: "Request money",
      onpress: addMoney,
    },
  
    {
      id: 4,
      icon: icons.pot,
      backgroundColor: COLORS.lightGreen,
      description: "Saving Pots",
      onpress: savings,
    },
  
    {
      id: 5,
      icon: icons.dashboard,
      backgroundColor: COLORS.lightRed,
      description: "Analysis",
      onpress: analysis,
    },
    {
      id: 3,
      icon: icons.more,
      backgroundColor: COLORS.lightGreen,
      description: "Tasks",
      onpress: tasks,
    },
    {
      id: 3,
      icon: icons.bill,
      backgroundColor: COLORS.lightRed,
      description: "Courses",
      onpress: course,
    },
  ];
    
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        style={{ backgroundColor: "#fff" }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView style={{ backgroundColor: "#333" }}>
          <View
            style={[
              homestyles.container,
              { paddingBottom: 250, paddingTop: 5 },
            ]}
          >
            <View style={homestyles.subContainer}>
              <View style={homestyles.imgContainer}>
                <View>
                  <Text style={homestyles.Heading}>Welcome Back,</Text>
                  <Text style={homestyles.SubHeading}>{name}</Text>
                
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "45%",
                  }}
                >
                  <MaterialIcons
                    name="help-outline"
                    size={23}
                    color="#000"
                    onPress={helpClick}
                  />

                  <View>
                    <MaterialIcons
                      name="circle-notifications"
                      size={27}
                      color="#000"
                      onPress={() => setnotificationclick(true)}
                    />

                    <Text
                      style={{
                        color: "#000",
                        fontSize: 14,
                        right: -7,
                        top: -11,
                        position: "absolute",
                        padding: 3,
                      }}
                    >
                      {tasksLength}
                    </Text>
                  </View>

                  <TouchableOpacity onPress={profileClick}>
                    <Image
                      source={require("../../assets/icons/teen.png")}
                      style={homestyles.ProfileImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{ width: "100%", alignItems: "center", padding: 10 }}
              >
              <Text style={[homestyles.SubHeading,{ fontWeight: 'bold',fontSize:16,marginTop:20}]}>
              Current Balance: ₹{balance}
            </Text>
                <Image
                  source={require("../../assets/images/card2.png")}
                  style={homestyles.image}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Buttons data={featuresData} />
              </View>
            </View>
            <Modal visible={help}>
              <View style={homestyles.notificationNav}>
                <TouchableOpacity onPress={hideHelp}>
                  <MaterialIcons
                    name="arrow-back-ios"
                    size={18}
                    color="#312651"
                  />
                </TouchableOpacity>
                <Text style={homestyles.bgText}>Help</Text>
              </View>
              <FAQPage data={faqData} />
            </Modal>
            <Modal visible={notificationclick}>
              <View style={homestyles.notificationNav}>
                <TouchableOpacity
                  onPress={() => {
                    setnotificationclick(false);
                  }}
                >
                  <MaterialIcons
                    name="arrow-back-ios"
                    size={18}
                    color="#312651"
                  />
                </TouchableOpacity>
                <Text style={homestyles.bgText}>Notification</Text>
              </View>
              <Notification
                tasks={notificationData}
                removeTask={removeTask}
              />
            </Modal>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
