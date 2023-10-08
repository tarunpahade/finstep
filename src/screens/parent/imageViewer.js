import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ImageViewer = (props) => {
  const { imageUri } = props.route.params;
  const navigation = useNavigation();

  const onClose = () => {
    navigation.navigate("Parent Task");
  }

  const renderImage = () => {
    if (imageUri.startsWith('http') || imageUri.startsWith('https')) {
      // If the image prop is a URI
      return (
        <Image
          style={styles.image}
          source={{ uri: imageUri }}
        />
      );
    } else if (image.startsWith('data:image')) {
      // If the image prop is a base64 encoded image
      return (
        <Image
          style={styles.image}
          source={{ uri: imageUri }}
        />
      );
    } else {
      // Handle other cases or show an error message
      return (
        <Text>Error: Invalid image source</Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      {renderImage()}
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
