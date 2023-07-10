import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text,Modal,TouchableOpacity} from "react-native";
import { useAddChildMutation } from "../../store/apiSlice";
import { useDispatch, useSelector, } from "react-redux";
import {  io } from "socket.io-client";



export const StudentForm = ({navigation}) => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [currentClass, setCurrentClass] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [setNewChild,{data,error,isLoading}]=useAddChildMutation()
  const parentId=useSelector((state) => state.parentAccount.account.userId)
  const dispatch=useDispatch()
  const socket = io("https://backend-5ig7.onrender.com/");

 
  
  if(error){
    console.log(error,'Cannot add Child');
  }
  const handleFormSubmit = async() => {

    if (name.length > 0 && dateOfBirth.length > 0) {
        // You can perform further actions with the form data, such as sending it to a server
  
        // Resetting the form fields
       
        setModalVisible(true)
        sendOtp()
      
      } else {
        alert('Please enter All Details');
      }
    
  };

  const upload=async()=>{
 
    const formData = {
        name,
        date_of_birth: formatDate(dateOfBirth),
        current_class: currentClass,
        phone_number: phoneNumber,
        parentId
      };

      console.log(formData);

 
    formData.userId=Math.floor(Math.random()*1000000)
        formData.password='unset'
 
    const newcHILD=await setNewChild(formData)
    console.log(newcHILD);  
       if(newcHILD.data.status==='Ok'){
    socket.emit('New Child',formData)
    navigation.navigate('ParentHome',{newChild:formData})

    setName('');
        setDateOfBirth('');
        setCurrentClass('');
        setPhoneNumber('');



      }else{
        alert('Cannot add Child')
    }
  }

  const handleChangeText = (text) => {
    // Remove any non-numeric characters from the input
    const formattedText = text.replace(/\D/g, "");

    // Format the date as dd/mm/yyyy
    let formattedDate = "";
    if (formattedText.length > 0) {
      formattedDate += formattedText.slice(0, 2);
    }
    if (formattedText.length > 2) {
      formattedDate += "/" + formattedText.slice(2, 4);
    }
    if (formattedText.length > 4) {
      formattedDate += "/" + formattedText.slice(4, 8);
    }

    setDateOfBirth(formattedDate);
  };

  const formatDate = (date) => {
    // Format the date as dd/mm/yyyy
    const formattedDate = date.split("-").reverse().join("/");
    return formattedDate;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Add Child
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (dd/mm/yyyy)"
        value={dateOfBirth}
        onChangeText={handleChangeText}
        keyboardType="numeric" // Set the keyboard type to numeric for date input
        maxLength={10} // Limit the input length to 10 characters (dd/mm/yyyy)
      />
      <TextInput
        style={styles.input}
        placeholder="Current Class"
        value={currentClass}
        onChangeText={(text) => setCurrentClass(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad" // Set the keyboard type to phone-pad for phone number input
        maxLength={10}
        />
      <Button title="Submit" onPress={handleFormSubmit} />
      <Modal visible={modalVisible}>
      <View style={{ flex: 1}}>
      
    
    
        <View style={styles.panelContent}>
          <Text style={styles.panelText}>Verify OTP</Text>
            
      <TextInput
      style={styles.otpInput}
      placeholder="Enter OTP"
      keyboardType="numeric"
      maxLength={5}
      onChangeText={(text) => setOtp(text)}
    />

          <TouchableOpacity
            style={styles.verifyButton}
            onPress={() => {
          upload()
             
            }}
          >
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
       
 
    
      </View>
      </View>

    </Modal>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },

  panelContainer: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 14,
  },
  panelHandle: {
    width: 40,
    height: 6,
    backgroundColor: "gray",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 10,
  },
  panelContent: {
    flex: 1,
    marginTop:'20%',
    justifyContent: "flex-start",
    alignItems: "center",
  },
  panelText: {
    fontSize: 20,
    fontWeight: "bold",
  
    marginBottom: 20,
  },
  otpInput: {
    width: "80%",
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#000",
  },
  verifyButton: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width:'80%',
    alignItems: "center",
  },
  verifyButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
