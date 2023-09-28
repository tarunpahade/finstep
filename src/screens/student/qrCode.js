import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as ImagePicker from 'expo-image-picker';

export const QRCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScan = ({ data }) => {
    if (!scanned) {
      setScanned(true);
      setScannedData(data);
    }
  };

  const handleResetScan = () => {
    setScanned(false);
    setScannedData('');
  };

  const handleChooseFromGallery = async () => {
    let permissionResult = null;

    if (Platform.OS === 'ios') {
      permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    }

    if (permissionResult && permissionResult.status !== 'granted') {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      setScannedData(''); // Reset scanned data if an image is chosen from the gallery
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          style={styles.camera}
          onBarCodeScanned={scanned ? undefined : handleScan}
        />
      </View>
      {selectedImage ? (
        <Image style={styles.selectedImage} source={{ uri: selectedImage }} />
      ) : (
        <View style={styles.scanContainer}>
          <View style={styles.scanRect} />
          <TouchableOpacity style={styles.galleryButton} onPress={handleChooseFromGallery}>
            <Text style={styles.galleryButtonText}>Choose from Gallery</Text>
          </TouchableOpacity>
        </View>
      )}
      {scanned && (
        <TouchableOpacity style={styles.resetButton} onPress={handleResetScan}>
          <Text style={styles.resetButtonText}>Scan Again</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.scannedData}>{scannedData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cameraContainer: {
    flex: 16 / 16, // Adjust the ratio as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: Dimensions.get('window').width * 108,
    height: Dimensions.get('window').width * 1.8, // Adjust the ratio as needed
  },
  scanContainer: {
    position: 'absolute',
    top: (Dimensions.get('window').height - Dimensions.get('window').width * (9 / 16)) / 3, // Adjust the ratio as needed
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanRect: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'white',
  },
  galleryButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  selectedImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  resetButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scannedData: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});


