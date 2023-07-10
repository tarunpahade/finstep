import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

import { useSelector } from 'react-redux';

export  function ProfileScreen({route}){
  console.log(route.params,'dada');
  const accountDetails=route.params.data.account
  const navigation=useNavigation()
  const [name, setName] = useState(accountDetails.name);
  const [phoneNumber, setPhoneNumber] = useState(JSON.stringify(accountDetails.phone_number))
  const [isEditable, setIsEditable] = useState(false);

  const [dob, setDob] = useState(accountDetails.date_of_birth);
  const [className, setClassName] = useState(JSON.stringify(accountDetails.current_class)+'th standard')
 
 if(accountDetails.is_parent===true){
console.log('hii');  
 }


  const handleSave = () => {
    setIsEditable(false);
    // Perform save operation with updated data
    // You can make an API call here to save the data on the server
  };
  const Logout = () =>{
navigation.replace('Register Screen')
  }

  return (
    <View style={styles.container}>
    {accountDetails.is_parent ? (
      <TouchableOpacity>
      <Image source={require('../../assets/icons/parents.png')} style={styles.profilePhoto} />
    </TouchableOpacity>
    ) : (
      <TouchableOpacity>
      <Image source={require('../../assets/icons/teen.png')} style={styles.profilePhoto} />
    </TouchableOpacity>
    )}
      
      <View style={styles.infoContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          editable={isEditable}
        />
       
        
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          editable={isEditable}
        />
        {accountDetails.is_parent ? (

          <ButtonGroup />


        ) : (
<View>
          <TextInput
          style={styles.input}
          value={dob}
          onChangeText={text => setDob(text)}
          editable={isEditable}
        />
        <TextInput
          style={styles.input}
          value={className}
          onChangeText={text => setClassName(text)}
          editable={isEditable}
        />
</View>
          )}
        {isEditable ? (
          <Button title="Save" color="#000" onPress={handleSave} />
        ) : (
          <Button title="Edit"  onPress={()=>setIsEditable(true)} />
        )}
      </View>
      <TouchableOpacity style={styles.topContainer} onPress={Logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonGroup = () => {
  const [bgcolor, setbgColor] = useState("#000");
  const [color, setColor] = useState("#fff");

  const [bgcolor2, setbgColor2] = useState("#fff");
  const [color2, setColor2] = useState("#000");

  const [bgcolor3, setbgColor3] = useState("#fff");
  const [color3, setColor3] = useState("#000");

  const onButtonPress = () => {
 

    setbgColor("#000");
    setColor("#fff");

    setbgColor2("#fff");
    setColor2("#000");

    setbgColor3("#fff");
    setColor3("#000");
  };
  const onButtonPress2 = () => {

    //to change colors
    setbgColor2("#000");
    setColor2("#fff");

    setbgColor("#fff");
    setColor("#000");

    setbgColor3("#fff");
    setColor3("#000");
  };
  const onButtonPress3 = () => {
   

    setbgColor3("#000");
    setColor3("#fff");

    setbgColor2("#fff");
    setColor2("#000");

    setbgColor("#fff");
    setColor("#000");
  };
  return (
    <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "2%",
            marginBottom:'5%'
          }}
        >
          <Pressable
            style={[styles.topContainer, { backgroundColor: bgcolor }]}
            onPress={onButtonPress}
          >
            <Text style={{ color: color }}>Dad</Text>
          </Pressable>

          <Pressable
            style={[styles.topContainer, { backgroundColor: bgcolor2 }]}
            onPress={onButtonPress2}
          >
            <Text style={{ color: color2 }}>Mom</Text>
          </Pressable>
          <Pressable
            style={[styles.topContainer, { backgroundColor: bgcolor3 }]}
            onPress={onButtonPress3}
          >
            <Text style={{ color: color3 }}>Guadian</Text>
            </Pressable>
         

            </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
   color: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
  },
  logoutText: {
    fontSize: 16,
   paddingHorizontal:26,

padding:10,
color:'red',
borderWidth:1,
borderColor:'red',
},
  topContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
 
  },

});
