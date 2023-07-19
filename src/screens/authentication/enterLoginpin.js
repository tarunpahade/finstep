import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants";
import { styles } from "../../styles/StandardStyles";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";

const PinPage = ({ route }) => {
  const [pin, setPin] = useState("");
  const [Incorrectpassword, setIncorrectpassword] = useState(false);
  const [ForgetPIN, setForgetPIN] = useState(false);
  const [regeneratePIN, setRegenratePIN] = useState(false);
  const [otp, setotp] = useState(false);
const [number,setnumber]=useState('')
const [reasonToSetOtp,setReason]=useState(false)
  const navigation = useNavigation();
  const [account, setAccount] = useState(route.params?.accountType);
  
  const [retype, setnRetyeNmber] = useState('');

  const accountDetails =
    account === "Student Login"
      ? useSelector((state) => state.account)
      : account === "Parent Login"
      ? useSelector((state) => state.parentAccount)
      : "New User";
      
  useEffect(() => {
    console.log();
    if (route.params.accountType == 'New User') {
      setotp(true);
      setReason('New User')
    }
  }, [route.params]);
  
  const handlePinChange = (text) => {
    setPin(text);
  };

  
  //for new user
const handleForgetPin =()=>{
 //also configure otp here
  setReason('forget pin')
//navigation.navigate('Home')
}


  //for new user
const handleOtpSubmit =()=>{
    console.log('hii new User');
navigation.navigate('Details Screen',{phone_number:route.params.phone_number})
}
  function handleSubmit() {
    console.log("Submitted pin:", pin);
    console.log(accountDetails, "THis is acc details");
    console.log(accountDetails.account.password, pin);
    if (accountDetails.account.password === pin) {
      console.log("pin matched");
      setIncorrectpassword(false);
      if (accountDetails.account.is_parent) {
        console.log("Iam a parent");
        navigation.navigate("ParentHome");
      } else if (!accountDetails.account.is_parent) {
        console.log("I am kid");
        navigation.navigate("Home");
      }
    } else {
      setIncorrectpassword(true);
    }
    // Perform additional actions with the submitted pin
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter PIN</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>PIN</Text>
        {Incorrectpassword && (
          <Text style={[styles.label, { color: "red" }]}>
            Incorrect Pin Try again
          </Text>
        )}
        {ForgetPIN && (
          <Text
            style={[
              styles.label,
              {
                color: "#000",
                fontSize: 11,
                padding: 5,
                borderRadius: 5,
                backgroundColor: "lightblue",
              },
            ]}
          >
            Password Has Been Sent to your registered email
          </Text>
        )}

        <TextInput
          style={styles.input}
          secureTextEntry
          value={pin}
          onChangeText={handlePinChange}
          maxLength={4}
          keyboardType="number-pad"
        />
      </View>
    

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.smlLabelContainer}>
        <Text
          style={[styles.label, { fontSize: 11 }]}
          onPress={() => {
             setForgetPIN(true);
         
          }}
        >
          Forgot PIN?
        </Text>
      </View>
      <Modal visible={otp}>
      <View style={styles.container}>
     
  
        <View>
        <Text style={styles.title}>Enter OTP sent to +91{route.params.phone_number}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>OTP</Text>
      
          <TextInput
            style={styles.input}
            secureTextEntry
            value={number}
            onChangeText={(value)=>{setnumber(value)}}
            maxLength={4}
            keyboardType="number-pad"
          />
        </View>
     
      </View>
  
  

        <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
       
    </View>

      </Modal>
    </View>
  );
};

export default PinPage;
