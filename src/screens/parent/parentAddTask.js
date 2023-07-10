import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput, View,StyleSheet, Touchable,Text } from 'react-native';
import { useCreateTaskMutation, useStoreNotificationMutation } from '../../store/apiSlice';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { schedulePushNotification } from '../../components/sendNotification/notification';
import { COLORS } from '../../constants';
import { io } from 'socket.io-client';
import { ActivityIndicator } from 'react-native';
import { log } from 'react-native-reanimated';
import { Profile } from '../../components/renderProfile/profile';



export function AddTask() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] =useState(new Date().toDateString());
  const [createTask, {data,error,isLoading}] =  useCreateTaskMutation()
 
const username = useSelector((state) => state.account.account.name);

const navigation=useNavigation()
const [newNotification, { data2, error2, isLoading2 }] = useStoreNotificationMutation(); //to store notification and create a new task 
const kids = useSelector((state) => state.parentAccount.account.children);
const [studentId,setStudentId]=useState(kids[0].userId)


const storeNotification = async (notification) => {
  const addNewNotification = await newNotification(notification);
  console.log(addNewNotification.data.status);
  if (addNewNotification.data.status === "Ok") {
  

  }
};

const socket = io('https://backend-5ig7.onrender.com/'); // Replace with your server URL


  
  async function  uploadToDatabase(data){
    console.log('task');
 const result= await createTask(data)
 console.log(result);

 const notification={    amount: data.amount,
 name: data.name,
userId:studentId,
type:'New Task',
username
}
storeNotification(notification)
 if(result.data.status==='Ok'){
socket.emit('newTask', data);

//schedulePushNotification(data.name,token)
 navigation.navigate("Parent Task");
 }}
 
const toggleProfileChange = (dataOntoggle) => {
console.log(dataOntoggle); 
setStudentId(dataOntoggle)
}
  const handleSubmit = () => {
    const data = {
      amount: `₹ ${amount}`,
      name: name,
      date: date,
      status:'pending',
     studentId:JSON.stringify(studentId),
     type:'New Task'
    };
    uploadToDatabase(data)
   
  };

  return (
    <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#fff' }}>
    <Text>Select Child</Text>
    <Profile kids={kids} ProfikleChange={toggleProfileChange} />
  
  
    <TextInput
    placeholder="Name"
    value={name}
    onChangeText={setName}
    style={styles.textInput}
  /> 
  

    <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.textInput}
      />
     
      
      <TouchableOpacity style={styles.btn2} onPress={handleSubmit} disabled={isLoading} >
      {isLoading ? (
        <ActivityIndicator /> // Show the loading indicator
      ) : (
        <Text>Submit</Text> // Show login text when isLoading is false
      )}
      </TouchableOpacity>
    </View>
  );
}

// #8deee7 "#28529a"
const styles = StyleSheet.create({
  textInput:{
    width:'80%',
    backgroundColor:'#fff',
 padding:10,
 borderWidth:1,
 marginTop:20
},
  btn2: {
    padding: 10,
    paddingHorizontal:10,
    marginVertical:20,
    width:'80%',
    alignItems: "center", 
    backgroundColor: COLORS.secondarygreen,
  },
  btn3:{
    position:"absolute",
    backgroundColor:'#eee',
    padding:10,
    top:60,
    right:20
  },
form:{
  flex:1,
  justifyContent:"center",
  alignItems: "center", 
 
}

    
    
    })