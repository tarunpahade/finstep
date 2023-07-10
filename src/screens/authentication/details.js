import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal,ScrollView } from "react-native";
import { styles } from "../../styles/StandardStyles";

const UserDetailScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [kycModalVisible, setKycModalVisible] = useState(false);
  const [aadharNumber, setAadharNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleContinue = () => {
console.log(firstName,lastName,email,gender);
    setKycModalVisible(true);
  };

  const handleKycContinue = () => {
console.log(aadharNumber,address,fullName,dateOfBirth,pincode);
    //setKycModalVisible(false);
console.log('after this navigate to Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's create your Account!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Text style={styles.label}>Select Gender</Text>
      <View style={customStyles.radioGroup}>
        <TouchableOpacity
          style={[customStyles.radioButton, gender === "Male" && customStyles.radioButtonSelected]}
          onPress={() => handleGenderSelect("Male")}
        >
          <Text style={customStyles.radioButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[customStyles.radioButton, gender === "Female" && customStyles.radioButtonSelected]}
          onPress={() => handleGenderSelect("Female")}
        >
          <Text style={customStyles.radioButtonText}>Female</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* KYC Details Modal */}
      <Modal visible={kycModalVisible} animationType="slide">
        <ScrollView style={customStyles.kycContainer}>
          <Text style={styles.title}>KYC Details</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Aadhar Number</Text>
            <TextInput
              style={styles.input}
              value={aadharNumber}
              onChangeText={setAadharNumber}
            />
          </View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
       
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={3}
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput
              style={styles.input}
              value={pincode}
              onChangeText={setPincode}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleKycContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>

      {/* Profile Photo Upload */}
      
    </View>
  );
};
const customStyles=StyleSheet.create({
    kycContainer:{
flex:1,
padding:15
    },
    genderOption: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
      },
      genderOptionSelected: {
        backgroundColor: "#007bff",
        borderRadius: 5,
      },
      genderText: {
        fontSize: 16,
        marginLeft: 5,
      },
      genderTextSelected: {
        color: "#fff",
      },

      radioGroup: {
        flexDirection: "row",
      },
      radioButton: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#ccc",
      },
      radioButtonSelected: {
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        color:'#fff'
      },
      radioButtonText: {
        fontSize: 14,
        color: "#000",
      }
})

export default UserDetailScreen;
