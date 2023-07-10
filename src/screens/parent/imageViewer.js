import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View,Text } from 'react-native';

const ImageViewer = (props) => {
    const image=props.route.params.image
  const navigation=useNavigation()
const onClose=()=>{
navigation.navigate("Parent Task")
}
    return (
    <View style={styles.container}>
    <StatusBar />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: `data:image/png;base64,${image}` }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:0,
    left: 0,
    right: 0,
   bottom: 0,

   backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width:"80%",
    height:"40%",
     transform: [{ rotate: '-90deg' }],
  },
});

export default ImageViewer;
// position: 'absolute',
// top:100,
// left: 20,
// // right: 0,
// // bottom: 0,
// width:"80%",
// height:"40%",
// transform: [{ rotate: '-90deg' }],
// backgroundColor: 'black',
// justifyContent: 'center',
// alignItems: 'center',
