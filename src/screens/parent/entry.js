import { View, Text,FlatList,StyleSheet,Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';

 export const Entry = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff',height:'100%'}}>

    <View style={{width:'100%',alignItems:'center',marginTop:'30%',backgroundColor:'#fff'}}>
   
          <View style={styles.PanelItemContainer}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ParentHome')}}>
          <View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'space-around',width:'90%'}}>
            <View style={{}}>
              <Image source={require('../../assets/icons/parents.png')} style={styles.PanelImage}  />
            </View>
    
            <View>
              <Text style={{fontSize: 24, color: '#000'}}>Parent</Text>
              
            </View>
          </View>
      
          </TouchableOpacity>
      </View>
    
      <View style={styles.PanelItemContainer}>
      <TouchableOpacity  onPress={()=>{navigation.navigate('Home')}}>
      <View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'space-around',width:'90%'}}>
        <View style={{}}>
          <Image source={require('../../assets/icons/teen.png')} style={styles.PanelImage}  />
        </View>

        <View>
          <Text style={{fontSize: 24, color: '#000'}}>Student</Text>
          
        </View>
      </View>
      </TouchableOpacity>
  </View>
  
  </View>
    </View>
 

  )
}

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
     width:'80%',
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
      backgroundColor: '#fff',
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