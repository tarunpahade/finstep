import React from 'react'
import {
    StyleSheet,
    Text,
    View,
   Image,
   TouchableOpacity
   
  } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
    <Image style={styles.navbtn}  source={require('../../assets/images/finstep.jpg')}/>
   
  <View style={styles.navContainer}>
  <TouchableOpacity onPress={props.notificationClick}>
  <MaterialIcons name='notifications' size={30} color="#312651" />
  </TouchableOpacity>
    <Image style={styles.profile} source={require('../../assets/images/kemal.jpg')}/>
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
        width:80
      }
})