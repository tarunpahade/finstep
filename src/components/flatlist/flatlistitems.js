import React from 'react'
const styles = StyleSheet.create({
  
    ProfileImage: {
      width: 55,
      height: 55,
      borderRadius: 40
    },
    ProfileImageNotification: {
      height: 12,
      width: 12,
      backgroundColor: '#4853ef',
      borderRadius: 6,
      position: 'absolute',
      right: 6,
      borderWidth: 2,
      borderColor: '#000'
    },
    AddUser: {
      height: 140,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0c0c0c',
      borderRadius: 10,
      marginRight: 14
    },
    AddUserIconbg: {
      width: 70,
      height: 70,
      backgroundColor: '#000',
      borderRadius: 10,
      marginBottom: 10,
      justifyContent: 'center'
    },
    PanelHandle: {
      height: 6,
      width: 50,
      backgroundColor: '#666',
      borderRadius: 6,
      alignSelf: 'center',
      marginTop: 6
    },
    PanelItemContainer: {
      borderWidth: 0.4,
      borderColor: '#666',
      padding: 16,
      borderRadius: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    },
    PanelImage: {
      width: 40,
      height: 40,
      backgroundColor: '#000',
      borderRadius: 40
    },
    PanelButton: {
      padding:14,
      width: 200,
      justifyContent: 'center',
      backgroundColor: '#1c1c1c',
      borderRadius: 10
    },
    PanelButtonText: {
      fontSize: 28,
      color: '#fff',
      alignSelf: 'center'
    }
  });
  import {
    StyleSheet,
    Text,
    View,
   Image,
   TouchableOpacity
   
  } from "react-native";
  import { MaterialIcons } from '@expo/vector-icons'; 
export const Flatlistitem = (props) => {
 
    const item= props.data
  return (
    
        <View style={styles.PanelItemContainer}>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
              <View style={{marginRight: 10}}>
                <Image source={{uri: item.userImage}} style={styles.PanelImage}  />
              </View>
      {/* this ia the text container */}
              <View>
                <Text style={{fontSize: 19, color: '#000'}}>{item.userName}</Text>
                <Text style={{fontSize: 14, color: '#000', opacity: 0.6}}>{item.transactionDate}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 18, color: '#000', marginHorizontal: 2}}>{item.amount}</Text>

              {item.credit ? (
                <MaterialIcons name='arrow-drop-up' size={22} color='green' />
              ) : (
                <MaterialIcons name='arrow-drop-down' size={22} color='#ff3838' />
              )}
            </View>
        </View>
      
  )}