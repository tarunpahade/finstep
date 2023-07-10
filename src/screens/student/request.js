import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import {
  useParentToChildMutation,
  useStoreNotificationMutation,
} from "../../store/apiSlice";
import { io } from "socket.io-client";

export const Request = () => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const [
    newNotification,
    { data2, error, isLoading },
  ] = useStoreNotificationMutation();
  const data = useSelector((state) => state.account.account);
  const socket = io("https://backend-5ig7.onrender.com/");

  const storeNotification = async (notification) => {
    const addNewNotification = await newNotification(notification);
    console.log(addNewNotification.data.status);
    if (addNewNotification.data.status === "Ok") {
      alert("Request Sent");
      socket.emit("RequestedForMoney", notification);
    } else {
      alert("Internal server error");
    }
  };

  const handleAddMoney = async () => {
    const newa = {
      childName: data.name,
      amount,
      userId: data.parentId,
      type: "Money Requested By Child",
      note: note,
      childId: data.userId,
    };
    console.log(data);
    storeNotification(newa)
    setAmount("");
    setNote("");
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
        <Text style={styles.label}>Note:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Note"
          value={note}
          onChangeText={setNote}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
        <Text style={styles.buttonText}>Request Money</Text>
      </TouchableOpacity>
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
  },
});
