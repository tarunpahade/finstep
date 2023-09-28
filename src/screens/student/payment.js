import React from "react";
import { useState, useRef,useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Animated,
  ActivityIndicator
} from "react-native";
import { COLORS } from "../../constants";
import { Feather } from '@expo/vector-icons';
import { useStudentPaysMutation } from "../../store/apiSlice";
import { useSelector } from "react-redux";

export const Payment = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [payBeta, { data, error, isLoading }] = useStudentPaysMutation();
  const studentId=useSelector((state) => state.account.account.userId)
  const animation = useRef(new Animated.Value(1)).current;
  
  if (isLoading) {
    return  <ActivityIndicator size={'large'} style={{flex:1}} />;
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }
  
const handleScan=()=>{
  navigation.navigate("Qr Code");
}

async function studentPay(taskDetails){
console.log('here bro'); 
  const fatu={
  to:'Vendor',
    studentId: studentId,
    amount: amount,
    note: note,
    phone: phone
    
  }
  const taskapproval = await payBeta(fatu);
  console.log(taskapproval);
      if (taskapproval.data.status === "Ok") {
        alert("Task Approved");
        setAmount('');
        setPhone('');
        setNote('');
     
        // console.log(data2);
     //   taskDetails.type = "Approved";
   //     const fullInfo = taskDetails;
       
 //       delete fullInfo.imageUri;
       // socket.emit("ApproveTask", fullInfo);
      } else {
        alert("Server Error Please try again later");
      }
  }


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
          <Text style={{ marginLeft: 16, fontSize: 16 }}>To</Text>
        </View>
        <TextInput
          placeholder="Enter PHONE / UPI ID"
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
        <TouchableOpacity onPress={studentPay} style={{ backgroundColor: '#4285F4', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 12, alignItems: 'center', marginTop: 32 }}>
        {isLoading ? (
          <ActivityIndicator /> // Show the loading indicator
        ) : (
          <Animated.Text style={{ color: '#fff', fontSize: 18, transform: [{ scale: animation }] }}>Pay</Animated.Text>
          
        )}
        
        
        
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
      
        <Text style={{ marginLeft: 16, fontSize: 16 }}>Or</Text>
      </View>

        <TouchableOpacity onPress={handleScan} style={{ backgroundColor: '#4285F4', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 12, alignItems: 'center', marginTop: 32 }}>
          <Animated.Text style={{ color: '#fff', fontSize: 18, transform: [{ scale: animation }] }}>Scan Qr Code</Animated.Text>
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
