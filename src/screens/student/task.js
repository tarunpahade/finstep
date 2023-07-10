import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { pagestyles } from "../../styles/pagesStyles";
import { useUploadImageMutation } from "../../store/apiSlice";
import * as ImagePicker from "expo-image-picker";
import { blackstyles } from "../../styles/blackstyles";
import { useGetTasksQuery } from "../../store/apiSlice";
import * as FileSystem from 'expo-file-system';
export function Tasks({ navigation }) {
  //const studentId = useSelector((state) => state.auth.user.id);
const studentId = 6314434; 
  const { data, isLoading, error } = useGetTasksQuery(studentId);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }

  const Task = data.data;
 
  let pendingData = Task.filter((item) => item.status === "pending");
 
 
  if (pendingData.length === 0) {
    pendingData = [{ name: "No Pending Tasks Yet", amount: " ",status:null }];
  } 


  return (
    <View style={pagestyles.container}>
      <View style={styles.notificationNav}>
        <Text style={pagestyles.bgText}>Tasks</Text>
      </View>

      <View>
        <StatusBar />
       <View style={{marginBottom:90}}>
        <FlatList
          data={pendingData}
          numColumns={1}
          renderItem={(item) =>       
            <Item data={item} camera={()=>{navigation.navigate("Camera",{

              taskDetails:item
            })}} />
            
           
           
        }
        />
        </View>
      </View>
    </View>
  );
}

function Item(props) {
 const [image,setImage] = useState()
  const [uploadImage, {data2,error2,isLoading2}] =  useUploadImageMutation()
  async function  uploadToDatabase(data){
    
    await uploadImage(data)
 console.log('sent');
 
  
 }
 console.log(props.data.item);
 


 
 const fileLaunch = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    
    if (!result.canceled) {
      
    
      let base64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: FileSystem.EncodingType.Base64,
      })
      uploadToDatabase({imageUri:base64,id:props.data.item._id})
    }
  };
return (
    <View>
   
  
    
    <View style={blackstyles.PanelItemContainer}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* this ia the text container */}
      <View>
        <Text style={{ fontSize: 19, color: "#000" }}>
          {props.data.item.name}
        </Text>
        <Text style={{ fontSize: 14, color: "#000", opacity: 0.6 }}>
          {props.data.item.amount}
        </Text>
      </View>
    </View>
    <View style={{ marginRight: 10 }}></View>
    {props.data.item.status==='pending'&& 
   
    <View
      style={{
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={props.camera}
        style={[styles.miniIcon, { marginHorizontal: 10 }]}
      >
        <MaterialIcons
          name="camera"
          styles={{ padding: 15 }}
          size={23}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={fileLaunch} style={styles.miniIcon}>
        <MaterialIcons
          name="file-upload"
          styles={{ padding: 15 }}
          size={22}
          color="#fff"
        />
      </TouchableOpacity>
    </View> 
    
  
  }
  </View>
  
    
    </View>
  );
}

const styles = StyleSheet.create({
  notificationNav: {
    flexDirection: "row",
    width: "92%",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  miniIcon: {
    backgroundColor: "#333",
    borderRadius: 100,
    justifyContent: "center",
    padding: 6,
    borderWidth: 1,
    borderColor: "#fff",
  },

  camera: {
    height: 400,

    bottom: 100,
  },
  text: {
    color: "#000",

    fontWeight: "bold",
    textAlign: "center",
  },
});
