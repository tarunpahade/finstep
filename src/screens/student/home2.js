import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  StyleSheet,
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
import {
  useDeleteNotificationMutation,
  useGetStoredNotificationQuery,
} from "../../store/apiSlice";

export const Home2 = ({ navigation }) => {
  const [notificationclick, setnotificationclick] = useState(false);
  const studentId = useSelector((state) => state.account.account.userId);
  const { data, isLoading, error, refetch } = useGetStoredNotificationQuery(
    studentId
  );
  const [
    deleteNotification,
    { data2, isLoading2, error2 },
  ] = useDeleteNotificationMutation();

  const profileData = useSelector((state) => state.account);
  const balance = useSelector((state) => state.account.account.balance);
  const [help, sethelp] = useState(false);
  const socket = io("https://backend-5ig7.onrender.com/");

  const name = useSelector((state) => state.account.account.name);
  const removeTask = async (task) => {
    const id = { id: task._id };
    console.log(id, "this is id");
    const deletyed = await deleteNotification(id);
    console.log("this is delete");
    if (deletyed.data.status === "Ok") {
      navigation.navigate("Tasks");
    }
  };

  useEffect(() => {
    socket.on("newTask", (newTask) => {
      if (JSON.parse(newTask.studentId) === studentId) {
        refetch();
      }
    });

    socket.on("RemindTask", async (remindTask) => {
      if (JSON.parse(remindTask.studentId) === studentId) {
        refetch();
      }
    });

    socket.on("ApproveTask", (approveTask) => {
      if (JSON.parse(approveTask.studentId) === studentId) {
        refetch();

        console.log(tasksLength);
      }
    });
    return () => {
      socket.off("newTask");
      socket.off("RemindTask");
      socket.off("ApproveTask");
    };
  }, []);

  if (isLoading) {
    return  <ActivityIndicator size={'large'} style={{flex:1}} />;
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }
  const notificationData = data.data;

  const tasksLength = notificationData.length;
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
    <View style={[{ paddingTop: 0, backgroundColor: "#000" }]}>
      <View
        style={[
          homestyles.imgContainer,
          {
            height: "25%",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            paddingHorizontal: "5%",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              borderRadius: 5,
              marginRight: 15,
            }}
            onPress={profileClick}
          >
            <Image
              source={require("../../assets/icons/teen.png")}
              style={homestyles.ProfileImage}
            />
          </TouchableOpacity>
          <Text style={[homestyles.Heading, { color: "#fff" }]}>
            Hey {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <MaterialIcons
              name="notifications"
              size={24}
              color="#fff"
              onPress={() => setnotificationclick(true)}
            />

            <Text
              style={{
                color: "#000",
                fontSize: 12,
                right: -7,
                top: -11,
                position: "absolute",
                padding: 3,
              }}
            >
              {tasksLength}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#333",
          height: "75%",
          padding: 10,
          justifyContent: "flex-start",
          paddingTop: "10%",
          borderTopEndRadius: 60,
          borderTopStartRadius: 60,
        }}
      >
        <ScrollView horizontal style={{position:'absolute'}}>
          <TouchableOpacity style={styles.button}>
           Home
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>

          <Text style={styles.text}>Savings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="home-filled" color={"#fff"} size={16} />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="home-filled" color={"#fff"} size={16} />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
        </ScrollView>

        <View
          style={{
            backgroundColor: "#556",
            borderRadius: 14,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ position: "relative", top: 0, bottom: 100 }}>
            <Text style={[homestyles.Heading, { color: "#fff" }]}>
              ₹ {balance}
            </Text>
            <Text>Avilable Balance</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.yellow,
              paddingHorizontal: 20,
              padding: 10,
              borderRadius: 14,
            }}
          >
            <Text>Add (₹)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 4,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    height: 50,
    marginHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    marginLeft: -5,
    fontSize: 15,
    color: "#fff",
    marginTop:9
  },
  btnImage:{
    height: '105%',
    width: '20%',
    paddingBottom:1
  },
});
