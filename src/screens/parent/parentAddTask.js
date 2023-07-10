import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput, View,StyleSheet, Touchable,Text } from 'react-native';
import { useCreateTaskMutation } from '../../store/apiSlice';
import { useNavigation } from '@react-navigation/native';
import { taskSlice } from '../../store/taskSlice';
import { useDispatch } from 'react-redux';

export function AddTask() {
const dispatch=useDispatch()
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] =useState(new Date().toDateString());;
  const [createTask, {data,error,isLoading}] =  useCreateTaskMutation()
const navigation=useNavigation()


console.log(error,isLoading);
  
  async function  uploadToDatabase(data){
    
 const result= await createTask(data)

 if(result.data.status==='Ok'){

  dispatch(taskSlice.actions.AddTaskData(data));

    navigation.navigate("Parent Task", {
      task: data
    }
   
    );

 }
  
 }
 
  const handleSubmit = () => {
    const data = {
      amount: `₹ ${amount}`,
      name: name,
      date: date,
      status:'pending',
      //add redux reducer later
     studentId:"6314434"
    };
    uploadToDatabase(data)
   
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
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
     
      
      <TouchableOpacity style={styles.btn2} onPress={handleSubmit} ><Text style={{color:'#fff'}}>Submit</Text></TouchableOpacity>
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
    btn2:{
        padding:10,
        margin:15,
        alignItems:'center',
        color:'#fff',
        backgroundColor:'#000'
      },
    
    
    })