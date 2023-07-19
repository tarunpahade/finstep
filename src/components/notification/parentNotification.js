import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Modal,
} from "react-native";
import { ScrollView, gestureHandlerRootHOC } from "react-native-gesture-handler";


export function ParentNotification({tasks,removeTask,addMoney}) {
console.log('Hello from parent notification');
  const renderItem = ({ item }) => {
   
    let message = '';
    let iconName = '';


    function onNotificationClick(){

      removeTask(item)
     
     }

     function onNAddMoneyClick(){

      addMoney(item)
     
     }

    switch (item.type) {
      case 'task sent for approval':
        message = `${item.childName} Student uploaded a task ${item.name}`;
        iconName = 'add';
        onpress=onNotificationClick; 
        break;
        case 'Money Requested By Child':
          message = `${item.childName} requested ₹ ${item.amount} for ${item.note}`;
          iconName = 'add';
          onpress=onNAddMoneyClick;
          break;
        
      default:
        message = `hello ${item.note} and ${item.reason}`;
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
  }  
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
  <Text >No New Notifications</Text>
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
});

export const ParentNotification1=(gestureHandlerRootHOC(({tasks,removeTask,addMoney}) =>
// <Modal>
<ParentNotification tasks={tasks} removeTask={removeTask} addMoney={addMoney} />
// </Modal>
));

