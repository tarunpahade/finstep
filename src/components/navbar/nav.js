import React from 'react'
import {
    StyleSheet,
    Text,
    View,
   Image,
   TouchableOpacity
   
  } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export const Navbar = (props) => {

  const navigation=useNavigation()
  return (
    <View style={styles.navbar}>
    <Image style={styles.navbtn}  source={require('../../assets/images/finstep.jpg')}/>
    
  <View style={styles.navContainer}>
  
  <TouchableOpacity onPress={props.helpClick}>
  <MaterialIcons name='help-outline' size={28} color="#312651" />
  </TouchableOpacity>
  <TouchableOpacity onPress={props.notification}>
  
  <MaterialIcons name='notifications' size={28} color="#312651" />
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>{navigation.navigate('Profile',{data:props.profile})}}> 
  <Image source={require('../../assets/icons/parents.png')} style={styles.profile} />

  
  </TouchableOpacity>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    navbar: {
    
        flexDirection: "row",
        marginTop: 20,
        padding: 10,
        width: "100%",
        justifyContent: "space-between",
      },
      navbtn: {
        width: 25,
        height: 35,
        borderRadius:7
     
      },
      profile: {
        width: 30,
        height: 30,
     
        borderRadius:100
      },
      navContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:'40%'
      }
})