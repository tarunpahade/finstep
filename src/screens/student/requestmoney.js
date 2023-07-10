import React from "react";
import { useState, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";


import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Animated
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { pagestyles } from "../../styles/pagesStyles";
import { COLORS } from "../../constants";
import { Feather } from '@expo/vector-icons';

export const RequestMoney = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const tickAnimation = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(1)).current;
  const handlePay = () => {
    setAmount('');
    setPhone('');
    setNote('');
  };
  

  return (
    <View style={{ flex: 1 }}>
   
      <View style={{ flex: 1, backgroundColor: '#f2f2f2', padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 32 }}>
          <Feather name="dollar-sign" size={24} color="#4285F4" />
          <Text style={{ marginLeft: 16, fontSize: 16 }}>Amount</Text>
        </View>
        <TextInput
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 12, fontSize: 18 }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
          <Feather name="phone" size={24} color="#4285F4" />
          <Text style={{ marginLeft: 16, fontSize: 16 }}>Phone Number</Text>
        </View>
        <TextInput
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 12, fontSize: 18, marginTop: 8 }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
          <Feather name="activity" size={24} color="#4285F4" />
          <Text style={{ marginLeft: 16, fontSize: 16 }}>Note</Text>
        </View>
        <TextInput
          placeholder="Enter note"
          value={note}
          onChangeText={setNote}
          style={{ backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 12, fontSize: 18, marginTop: 8 }}
        />
        <TouchableOpacity onPress={handlePay} style={{ backgroundColor: '#4285F4', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 12, alignItems: 'center', marginTop: 32 }}>
          <Animated.Text style={{ color: '#fff', fontSize: 18, transform: [{ scale: animation }] }}>Pay</Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    height: 150,
    alignItems: "center",
    margin: 50,
  },
  pot: {
    backgroundColor: COLORS.green,
    padding: 10,
    width: "50%",
    alignItems: "center",
    color: "#fff",

    positiona: "absolute",
    bottom: 0,
  },
  potText: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: "bold",
    paddingLeft: 2,

    color: "#fff",
  },
  input: {
    backgroundColor: "#FFF",
    color: "#000",
    padding: 8,
    paddingHorizontal: 19,
    borderColor: "#000",
    width: "89%",
  },
});
