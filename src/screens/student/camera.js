import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { useUploadImageMutation } from "../../store/apiSlice";
import { useNavigation } from "@react-navigation/native";
export default function CameraScreen(props) {

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const [imageUri, setImageUri] = useState('');
  const cameraRef = useRef();
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  
  const [uploadImage, {data,error,isLoading}] =  useUploadImageMutation()
  console.log(error,isLoading);
 const taskDetails=props.route.params.taskDetails.item
  const onCameraReady = () => {
    setIsCameraReady(true);
  };
  const navigation=useNavigation()
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;

      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        setImageUri(data)
    
      }
    }
  };
  const recordVideo = async () => {
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();
        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            console.log("video source", source);
            setVideoSource(source);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };
  const stopVideoRecording = () => {
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();
    }
  };
  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  };
  const renderCancelPreviewButton = () => (
 
   
      <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
        <View
          style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]}
        />
        <View
          style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
        />
      </TouchableOpacity>
     
    
  );
  const renderCaptureControl = () => (
    <View style={styles.control}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Text style={styles.text}>{"Flip"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        onLongPress={recordVideo}
        onPressOut={stopVideoRecording}
        onPress={takePicture}
        style={styles.capture}
      />
    </View>
  );
const onClose =()=>{
navigation.navigate('Tasks')
}

  async function  uploadToDatabase(data){
    
   await uploadImage(data)
console.log('sent');

 
}

  const uploadPhoto = () => (
    <View style={styles.control}>
    <TouchableOpacity disabled={!isCameraReady} onPress={cancelPreview}>
    <Text style={styles.text}>{"Retry"}</Text>
  </TouchableOpacity>
      
      
      <TouchableOpacity
      activeOpacity={0.7}
      disabled={!isCameraReady}
      onPress={()=>{ 
   
  uploadToDatabase({imageUri:imageUri.base64,id:taskDetails._id})
      
      }}
      style={[styles.capture,{alignItems:"center",justifyContent:'center',backgroundColor:'#000'}]}
    >
    <MaterialIcons
    name="file-upload"
    styles={{ padding: 0 }}
    size={32}
    color="#fff"
  />
   
      </TouchableOpacity>
      <TouchableOpacity disabled={!isCameraReady} onPress={()=>{}}>
      <Text style={styles.text}>{"Go Back"}</Text>

      </TouchableOpacity>

      </View>
  );
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        flashMode={Camera.Constants.FlashMode.on}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("camera error", error);
        }}
      />
      <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
      <Text style={styles.closeButtonText}>X</Text>
    </TouchableOpacity>
        {isPreview && renderCancelPreviewButton() &&uploadPhoto()}
        {!videoSource && !isPreview && renderCaptureControl()}
      </View>
    </SafeAreaView>
  );
}
const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
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
  closeButton: {
    position: "absolute",
    top: 35,
    left: 15,
    height: closeButtonSize,
    width: closeButtonSize,
    borderRadius: Math.floor(closeButtonSize / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c5c4",
    opacity: 0.7,
    zIndex: 2,
  },
  media: {
    ...StyleSheet.absoluteFillObject,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "#f5f6f5",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
  recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
});
