import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Image,
  Animated,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";

const UnderstandCoursePage = ({ route }) => {
  const data = route.params.data;

  const navigation = useNavigation();
  const [CoryReply, setCoryReply] = useState(
    "I am Cory, your personal assistant. I will help you understand this lesson."
  );
  const [conversation, setConversation] = useState([]);
  const [userReply, setuserReply] = useState(
    "I am Cory, your personal assistant. I will help you understand this lesson."
  );
  console.log(data);
  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleBackButton}>
          <MaterialIcons name="arrow-back" size={18} color="black" />
        </TouchableOpacity>
        <View style={styles.navbarCenter}>
          <Text style={styles.navbarTitle}>
            Lesson {data.key}: {data.name}
          </Text>
        </View>
        <View style={styles.navbarRight}></View>
      </View>

      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          width: "70%",
          marginHorizontal: "15%",
        }}
      >
        <View>
          <View
            style={{
              width: 240,
              borderRadius: 10,
              height: 8,
              backgroundColor: "#333",
              position: "relative",
              opacity: 0.7,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "rgb(0, 191, 166);",
              width: (0 / 3) * 230,
              height: 8,
              position: "relative",
              top: -8,
              borderRadius: 10,
            }}
          ></View>
        </View>
        <View style={{ position: "relative", left: -40, bottom: -100 }}>
          <Image
            source={require("../../assets/icons/robot.png")}
            style={styles.PanelImage}
          />
          <View
            style={{
              position: "relative",
              left: 20,
              top: 7.5,
              minWidth: 180,
              borderRadius: 10,
              backgroundColor: COLORS.lightpurple,
              padding: 15,
              paddingHorizontal: 9,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 11, letterSpacing: 0.8 }}>
              {CoryReply}
            </Text>
          </View>
          
        </View>
       
      </View>
      <TouchableOpacity style={styles.btn2}>
        <Text style={{ color: "#fff" }}>Lets Find Out 🔍</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //navbar
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: "#FFFFFF",
  },
  navbarCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  navbarTitle: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  navbarRight: {
    width: 24,
  },
  //middle container
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    marginBottom: 10,
    textAlign: "left",
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  value: {
    fontSize: 21,
    fontWeight: "bold",
    paddingTop: 0,
    position: "relative",
    top: -5,
  },
  addButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomSection: {
    width: "100%",

    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "4%",
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: "40%",
    margin: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "70%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 1,
  },

  // transactions

  popupContainer: {
    height: "65%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 1,
  },
  crossButton: {
    position: "absolute",
    top: -50,
    right: 10,
    padding: 5,
    paddingHorizontal: 8,
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
  },
  popupContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5%",
    paddingTop: 10,
    paddingBottom: 0,

    backgroundColor: "#fff",
  },
  popupHeader: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: "0%",
    marginBottom: "2%",
    justifyContent: "space-between",
  },
  btnImage: {
    height: "45%",
    width: "35%",
    paddingBottom: 30,
  },
  btn2: {
    position: "absolute",
    padding: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: "90%",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: COLORS.blue,
    bottom: 9,
    borderRadius: 10,
  },
  popupBoldText: { fontSize: 14, color: "#000", fontWeight: "700" },
  PanelImage: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(0,96,255,0.2)",
    backgroundColor: "#eee",
    borderRadius: 40,
  },
});

export default UnderstandCoursePage;



