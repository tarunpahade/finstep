import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Item } from './notification.comp';
import { StyleSheet,TouchableOpacity, Text, View ,FlatList} from 'react-native';
export function Notification (props){
const [notification, setNotification]=useState([
    {id:Math.random().toString(), message:'Rs 6000 recived by Rahim',    date:'April 12 2023'},
{ id:Math.random().toString(),  message:'Complete the given task',  date:'March 12 2023'}
])
    return (
        <View style={styles.notificationContainer}>
        <FlatList 
        data={notification}
        numColumns={1}
        renderItem={(item)=>(
       <Item  data={item}/>
        )}/>

      
        </View>
    )
  }

  const styles = StyleSheet.create({

      notificationContainer:{
    marginTop:32,
  height:'100%'
,

},
    
  


})