import React from "react";
import { useState } from "react";
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
  FlatList,
  ActivityIndicator,
} from "react-native";
import { globastyles } from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Notification } from "../../components/notification/notification";
import { Navbar } from "../../components/navbar/nav";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { accountSlice } from "../../store/authitication";
import FAQPage from "../../components/faq/faq";
import { registerForPushNotificationsAsync } from "../../components/sendNotification/notification";
import {
  useDeleteNotificationMutation,
  useGetAnalyticsQuery,
  useGetStoredNotificationQuery,
} from "../../store/apiSlice";
import faqData from "../../data/data";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { ParentNotification } from "../../components/notification/parentNotification";
export const ParentHome = ({ navigation }) => {
  const [notificationclick, setnotificationclick] = useState(false);

  const profileData = useSelector((state) => state.parentAccount);
  const balance = useSelector((state) => state.parentAccount.account.balance);
  const userId = useSelector((state) => state.parentAccount.account.userId);
  console.log(userId);
  const { data, isLoading, error, refetch } = useGetStoredNotificationQuery(
    userId
  );
  const [
    deleteNotification,
    { data2, isLoading2, error2 },
  ] = useDeleteNotificationMutation();

  const [help, sethelp] = useState(false);
  const [childData, useAddChild] = useState(profileData.account.children);
  const socket = io("https://backend-5ig7.onrender.com/");

  const removeTask = async (task) => {
    const id = { id: task._id };
    const deletyed = await deleteNotification(id);
    if (deletyed.data.status === "Ok") {
      navigation.replace("Parent Task");
    }
  };
  const removeNotificationAndAddMoney = async (task) => {
    const id = { id: task._id };
    const amount = task.amount;
    const deletyed = await deleteNotification(id);
    console.log(deletyed);
    if (deletyed.data.status === "Ok") {
      navigation.navigate("Add account", {
        amount: amount,
        to: task.childName,
        from: "parent",
        childId: task.childId,
        reason: task.note,
      });
    }
  };
  // registerForPushNotificationsAsync()

  useEffect(() => {
    socket.on("New Child", (newTask) => {
      useAddChild((prevTasks) => [...prevTasks, newTask]);
    });
    socket.on("TaskSentForApproval", (Task) => {
      console.log(Task.parentId, "here is the real don", userId);
      if (Task.parentId === userId) {
        console.log("start");
        refetch();
      }
    });
    socket.on("RequestedForMoney", (Task) => {
      console.log(Task, "this is task");
    
        console.log("hello");

        refetch();
    
    });

    return () => {
      socket.off("New Child");
      socket.off("TaskSentForApproval");
      socket.off("RequestedForMoney");
    };
  }, []);

  if (isLoading) {
    return  <ActivityIndicator size={'large'} style={{flex:1}} />
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }
  const notificationData = data.data;
console.log(data.data);
  const notificationDataLength = notificationData.length;

  function showhelp() {
    sethelp(true);
  }

  function showNotifications() {
    setnotificationclick(true);
  }

  function hidenotification() {
    setnotificationclick(false);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <View>
          <View style={styles.container}>
            <View style={styles.navbar}>
              <Image
                style={styles.navbtn}
                source={require("../../assets/images/finstep.jpg")}
              />

              <View style={styles.navContainer}>
                <TouchableOpacity onPress={showhelp}>
                  <MaterialIcons
                    name="help-outline"
                    size={28}
                    color="#312651"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={showNotifications}>
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
                      {notificationDataLength}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Profile", { data: profileData });
                  }}
                >
                  <Image
                    source={require("../../assets/icons/parents.png")}
                    style={styles.profile}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.containerBody}>
              <View>
                <Text>Your Parent Balance</Text>
                <Text style={globastyles.bgText}>Rs.{balance}</Text>
              </View>

              <FlatList
                data={childData}
                numColumns={1}
                renderItem={(item) => <ShowKids data={item} />}
              />

              <View style={styles.parent}>
                <View style={styles.add}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Student Form")}
                  >
                    <Text style={{ fontSize: 15, color: "#000" }}>
                      Add Child
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <Modal visible={help}>
            <View style={globastyles.notificationNav}>
              <TouchableOpacity
                onPress={() => {
                  sethelp(false);
                }}
              >
                <MaterialIcons
                  name="arrow-back-ios"
                  size={24}
                  color="#312651"
                />
              </TouchableOpacity>
              <Text style={globastyles.bgText}>Help</Text>
            </View>

            <FAQPage data={faqData} />
          </Modal>

          <Modal visible={notificationclick}>
            <View style={globastyles.notificationNav}>
              <TouchableOpacity onPress={hidenotification}>
                <MaterialIcons
                  name="arrow-back-ios"
                  size={24}
                  color="#312651"
                />
              </TouchableOpacity>
              <Text style={globastyles.bgText}>Notification</Text>
            </View>
            <ParentNotification
              tasks={notificationData}
              removeTask={removeTask}
              addMoney={removeNotificationAndAddMoney}
            />
          </Modal>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

function ShowKids({ data }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function setAccount(data) {
    navigation.navigate("Parent Student Home");
    dispatch(accountSlice.actions.setAccount(data));
  }

  return (
    <View style={styles.parent}>
      <View style={styles.child}>
        <View style={styles.moneyTxty}>
          <TouchableOpacity
            onPress={() => {
              setAccount(data.item);
            }}
          >
            <View style={styles.prText}>
              <Image
                style={globastyles.profile}
                source={require("../../assets/icons/teen.png")}
              />

              <Text style={styles.padding}>{data.item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.add}></View>
    </View>
  );
}

//color scheme
// #8deee7 "#28529a"
const styles = StyleSheet.create({
  containerBody: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: "8%",
    padding: 20,
  },
  parent: {
    flexDirection: "column",
    marginVertical: 15,
    color: "#fff",
    width: "100%",
    marginBottom: 0,
  },
  child: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  moneyTxty: {
    backgroundColor: "#28529a",
    color: "#fff",
    flexDirection: "row",
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    backgroundColor: "#fff",
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
  },
  prText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 10,
  },
  padding: {
    paddingLeft: 10,
    paddingTop: 0,
    color: "#fff",
    fontSize: 20,
    paddingLeft: 20,
  },
  navbar: {
    flexDirection: "row",
    marginTop: 40,
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  navbtn: {
    width: 25,
    height: 35,
    borderRadius: 7,
  },
  profile: {
    width: 30,
    height: 30,

    borderRadius: 100,
  },
  navContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "40%",
  },
});
