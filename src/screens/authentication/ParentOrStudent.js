import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useLoginMutation } from "../../store/apiSlice";
import { useDispatch } from "react-redux";
import { accountSlice } from "../../store/authitication";
import { parentAccountSlice } from "../../store/parentAuth";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
const ChooseLoginType = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [login, { data, error, isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  if (error) {
    console.log(error);
  }

  async function checkLogin(data) {
    console.log(data);
    const result = await login(data);
console.log(result);
    if (result.error) {
      console.log("Error while logging in");
    } else if (result.data.data === "New User") {
      console.log("Navigate to registered screen");
      navigation.navigate("Pin Page", {
        accountType: "New User",
        phone_number: phoneNumber,
      });
    } else if (result.data.status === "Ok") {
      if (result.data.data.is_parent === false) {
        setAccount(result.data.data);
        console.log("Is a Kid");
        navigation.navigate('Home')
      //  navigation.navigate("Pin Page", { accountType: "Student Login" });
      } else if (result.data.data.is_parent === true) {
        setParentAccount(result.data.data);
        console.log("Is a Parent");
        navigation.navigate("Pin Page", { accountType: "Parent Login" });
      }
    }
  }
const handleParentClick =()=>{
  console.log('starting parent login');
  checkLogin({ phone_number: parseFloat(9850045469) });
}
const HandleChildClick =()=>{
  
  checkLogin({ phone_number: 8010669013 });
}
  const setAccount = (data) => {
    dispatch(accountSlice.actions.setAccount(data));
  };
  const setParentAccount = (data) => {
    dispatch(parentAccountSlice.actions.setParentAccount(data));
  };




  return (
    <View style={{ flex: 1, backgroundColor: "#F0F8FF", padding: 20,alignItems:'center',justifyContent:'center',width:'100%' }}>
      <View style={{width:'100%'}}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Choose Login Type 
        </Text>

        <View >
          
                  <TouchableOpacity style={styles.PanelItemContainer} onPress={handleParentClick}>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
              <View style={{marginRight: 10}}>
                <Image source={require('../../assets/icons/parents.png')} style={styles.PanelImage}  />
              </View>
      
              <View>
                <Text style={{fontSize: 17, color: '#000'}}>Parent</Text>
                
              </View>
            </View>
            
        </TouchableOpacity>
        <TouchableOpacity style={styles.PanelItemContainer} onPress={HandleChildClick} >
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
              <View style={{marginRight: 10}}>
                <Image source={require('../../assets/icons/teen.png')} style={styles.PanelImage}  />
              </View>
      
              <View>
                <Text style={{fontSize: 17, color: '#000'}}>Student</Text>
                
              </View>
            </View>
            
      </TouchableOpacity>
      </View>
      
            
      </View>
    </View>
  );
};

export default ChooseLoginType;


const styles = StyleSheet.create({

  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: '#4853ef',
    borderRadius: 6,
    position: 'absolute',
    right: 6,
    borderWidth: 2,
    borderColor: '#000'
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0c0c',
    borderRadius: 10,
    marginRight: 14
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center'
  },
  PanelHandle: {
    height: 6,
    width: 50,
    backgroundColor: '#666',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6
  },
  PanelItemContainer: {
    borderWidth: 0.4,
    borderColor: '#666',
    padding: 16,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  PanelImage: {
    width: 40,
    height: 40,
    borderWidth:1,
    borderColor:'rgba(0,96,255,0.2)',
    backgroundColor: '#eee',
    borderRadius: 40
  },
  PanelButton: {
    padding:14,
    width: 200,
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 10
  },
  PanelButtonText: {
    fontSize: 28,
    color: '#fff',
    alignSelf: 'center'
  }

})