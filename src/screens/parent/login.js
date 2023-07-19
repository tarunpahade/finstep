import React, {  useState,useContext } from 'react';
import { View,Alert, TextInput, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useLoginMutation } from '../../store/apiSlice';
import { useDispatch } from 'react-redux';
import { parentAccountSlice } from '../../store/parentAuth';
import { accountSlice } from '../../store/authitication';

import { AuthContext } from '../../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const {userlogin} = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [name, setName]=useState('')
  const [password, setPassword] = useState('');
const dispatch=useDispatch()
  const [login, {data,error,isLoading}] =  useLoginMutation()

  const setAccount = (data) => {
    dispatch(accountSlice.actions.setAccount(data));
  };
  const setParentAccount = (data) => {
    dispatch(parentAccountSlice.actions.setParentAccount(data))
   }
  async function  checkLogin(data){
    const result= await login(data)
    console.log(result,'this a');
    if(result.error){
    
      alert('Invalid username or password')
    } else     if(result.data.status || result.data.status==='Ok'){
        if(result.data.data.is_parent===false){
          setAccount(result.data.data)
  
          navigation.replace('Home')
        }else if(result.data.data.is_parent===true){
          setParentAccount(result.data.data)
           navigation.replace('ParentHome')
        }
     
     
    
      }
      console.log('where is error');

  
    
    
};

  const handleLogin = () => {
    if (!user || user.trim() === '') {
      Alert.alert('Error', 'Please enter a value');

    }else if(!password || password.trim() === ''){
      Alert.alert('Error', 'Please enter a value');

    }else if(user || password){

      const loginDetails={name:user,password:password}



    checkLogin(loginDetails)
    }


   

}
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FinStep</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#95a5a6"
          value={user}
          onChangeText={(text)=>{setUser(text)}}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#95a5a6"
          value={password}
          onChangeText={(text)=>{setPassword(text)}}
        />
      </View>
      

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} disabled={isLoading}>
    
        {isLoading ? (
          <ActivityIndicator /> // Show the loading indicator
        ) : (
          <Text>Login</Text> // Show login text when isLoading is false
        )}
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3498db',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    borderWidth: 1, // Add border width
    borderColor: '#95a5a6', // Set border color
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#34495e',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#2ecc71',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default LoginScreen;
