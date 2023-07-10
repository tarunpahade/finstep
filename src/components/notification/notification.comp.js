import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
export function Item (props){

    return (
        <View style={styles.notifications}>
        <MaterialIcons name='contact-page' size={30} color="red" />
        <View style={styles.text}>
        <Text style={styles.mdTxt}>{props.data.item.message} </Text>
        <Text style={styles.smTxt}>{props.data.item.date}</Text>
        </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    mdTxt:{
        fontSize:16,
      
        textAlign:'left',
      justifyContent:'flex-end',
      alignSelf:'flex-end',
      paddingBottom:6
      },
      smTxt:{
        fontSize:10,
        marginLeft:172
       
      },
      text:{
      justifyContent:'space-between',
      
      },
      notifications:{
        flexDirection:'row',
       
     backgroundColor:'#e0e0d4',
     padding:12,
     justifyContent:'space-between',
  marginBottom:11
      },
  
  
 
})