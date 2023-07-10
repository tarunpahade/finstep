import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";



export function Notification({tasks,removeTask}) {
  
  const renderItem = ({ item }) => {
    let message = '';
    let iconName = '';


    function onNotificationClick(){

 removeTask(item)

}
console.log(item);
    switch (item.type) {
      case 'New Task':
        message = `Parent added a new task ${item.name} for ${item.amount}`;
        iconName = 'add';
        onpress=onNotificationClick;
        break;
      case 'Reminder':
        message = `Parent sent a reminder to complete ${item.name}`;
        iconName = 'add-alert';
        onpress=onNotificationClick;
        break;
        case 'Approved':
        message = `Congrats! Your task ${item.name} is approved and you received rupees ${item.amount}`;
        iconName = 'check';
        onpress=onNotificationClick;
        break;
            
        case 'Money Sent By Parent':
        message = `Parent sent to your account ${item.amount}`;
        iconName = 'check';
        onpress=onNotificationClick;
        break;
        
        case 'Parent Denied The Request':
        message = `Parent denied request because because ${item.reason}`;
        iconName = 'check';
        onpress=onNotificationClick;
        break;
        
      default:
        message = `Congrats! ${item.name} is approved, received ${item.amount}`;
        iconName = 'check';
        onpress=onNotificationClick;
        break;
    }

    return (
      <TouchableOpacity
        style={styles.taskItem}
        onPress={onpress}
      >
        <MaterialIcons name={iconName} size={24} color="black" />
        <Text style={styles.taskText}>{message}</Text>
      </TouchableOpacity>
   
    );
  };
  return (
    <ScrollView>
   <View>
   <View style={styles.notificationContainer}>

{tasks.length > 0 ? (
  <View>
 
    <FlatList
    data={tasks}
    keyExtractor={(item, index) => index.toString()}
    renderItem={renderItem}
  />
  </View>
) : (
  <View style={[styles.listItem]}>
  <Text style={styles.text} >No New Notifications</Text>
</View>
)}


   </View>
   </View>
   </ScrollView>
  );
}


const styles = StyleSheet.create({
  notificationContainer: {
    marginTop: 32,
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    marginBottom: 10,
    fontSize:15,
    alignItems:"flex-start",
    marginLeft:10,
    borderTopWidth:1,
    borderBottomWidth:1,
    padding:10,

    
    width:'100%'
  },
  listItemText: {
    fontSize: 16,
  },
  newTaskText: {
    color: 'green',
  },
  reminderText: {
    color: 'blue',
  },
  approveTaskText: {
    color: 'purple',
  }
  ,
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignItems:"flex-start",
    marginLeft:10,
    borderTopWidth:1,
    borderBottomWidth:1,
    padding:10,

    
    width:'90%'
  },
  taskText: {
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
  }
});


