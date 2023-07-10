import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { io } from "socket.io-client";
import { ActivityIndicator } from "react-native";
import {
  useGetAnalyticsQuery,
  useParentToChildMutation,
  useStoreNotificationMutation,
} from "../../store/apiSlice";
import { useSelector } from "react-redux";
import FullPageHeader from "../../components/navbar/smallNavbar";
import { set } from "react-native-reanimated";

export const AddMoneyToAccount = ({ route }) => {
  if (route.params) {
    console.log(route.params, "this is route params");
  }
  const [
    newNotification,
    { data, error: errorWhileDenyingReq, isLoading: Load },
  ] = useStoreNotificationMutation();
  const account = useSelector((state) => state.account.account);
  const parentId = useSelector((state) => state.parentAccount.account.userId);
  const [amount, setAmount] = useState(route.params?.amount || 0);
  const [makeDenyRequestFormVisible, setmakeDenyRequestFormVisible] = useState(
    false
  );
  const socket = io("https://backend-5ig7.onrender.com/");

  const [to, setto] = useState(route.params?.to || account.name);
  const [payBeta, { data2, error, isLoading }] = useParentToChildMutation();
  const [denyReason, setDenyReason] = useState("");

  if (error) {
    console.log("hello bro your code sucks", error.error);
  }

  const handleDenyMoneyGoBack = async () => {
    setmakeDenyRequestFormVisible(false);
  };
  const handleDenyMoney = async () => {
    console.log(denyReason, account.userId, parentId);

    const deniedRequestData = {
      amount,
      userId: route.params.childId,
      type: "Parent Denied The Request",
      note: route.params.reason,
      reason: denyReason,
    };
    const result = await newNotification(deniedRequestData);
    console.log(result.data.status);
    if (result.data.status === "Ok") {
      alert("Request Sent");
      setDenyReason('')
      setmakeDenyRequestFormVisible(false)
setAmount('')
setto('')
      socket.emit("RequestedForMoney", result.data);
    } else {
      alert("Internal server error");
    }
  };

  const handleAddMoney = async () => {
    const fatu = {
      amount,
      studentId: account.userId,
      parentId: parentId,
    };
    console.log(parentId);
    const taskapproval = await payBeta(fatu);

    if (taskapproval.data.status === "Zero Balance") {
      setAmount("");

      alert(
        "Add money to your account",
        "There is no balance in your account .",
        [
          {
            text: "Add Money",
            onPress: () => navigation.navigate("Add account"),
          },
        ]
      );
    }

    if (taskapproval.data.status === "Ok") {
      alert("Money Sent Successfully");
      setAmount("");
    } else {
      alert("Insufficient Balance");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Amount</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>To:</Text>
        <TextInput style={styles.input} value={to} editable={false} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Pay</Text>
        )}
      </TouchableOpacity>

      {route.params && (
        <View style={styles.denyReasonContainer}>
          <View style={[styles.inputContainer, { alignItems: "center" }]}>
            <Text style={styles.label}>Or</Text>
          </View>
          <Modal visible={makeDenyRequestFormVisible}>
            <FullPageHeader
              data={{ name: "Deny Request" }}
              handleBackButton={handleDenyMoneyGoBack}
            />

            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Deny Request:</Text>
                <TextInput
                  placeholder="Add a reason to deny request"
                  style={styles.input}
                  value={denyReason}
                  onChangeText={setDenyReason}
                />
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Reason :</Text>
              
                <TextInput  style={styles.input} value={route.params.reason} editable={false} />
                </View>

              </View>
              <TouchableOpacity style={styles.button} onPress={handleDenyMoney}>
                <Text style={styles.buttonText}>Deny Request</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setmakeDenyRequestFormVisible(true);
            }}
          >
            <Text style={styles.buttonText}>Deny Request</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    marginLeft: "10%",
    marginTop: "20%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },

  denyButton: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  denyReasonContainer: {
    marginTop: 20,
  },
  denyReasonInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});
