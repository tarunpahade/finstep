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

const CourseDetailsPage = ({ route,handleBackButton }) => {
  const data = route.params.data;
  const navigation = useNavigation();

  const transactionData = [
    {
      _id: "645cb48b1da97e1f2c9b8b37",

      key: "1",

      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDlUa5EPVm0bAs_GiK4XiOjFWSLvLWmhLLg&usqp=CAU",
      name: "Barter System",
    },
    {
      _id: "645cb48b1da97e1f2c9b8b37",

      key: "2",

      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iPA5tTUzu-Tl-7jwcrx-DO9BtrFGXrfX3Q&usqp=CAU",
      name: "Payment Methods",
    },
    {
      _id: "645cb48b1da97e1f2c9b8b37",

      key: "3",

      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDlUa5EPVm0bAs_GiK4XiOjFWSLvLWmhLLg&usqp=CAU",
      name: "Banking System",
    },
    {
      _id: "645cb48b1da97e1f2c9b8b37",

      key: "4",

      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDlUa5EPVm0bAs_GiK4XiOjFWSLvLWmhLLg&usqp=CAU",
      name: "Startups and Funding",
    },
  ];

  // const handleBackButton = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleBackButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.navbarCenter}>
          <Text style={styles.navbarTitle}>{data.name}</Text>
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
        <Image
          source={require("../../assets/images/course1.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          width: "95%",
          alignContent: "center",
          marginHorizontal: "2.5%",
          alignItems: "center",
          borderRadius: 7,
        }}
      >
        <View style={styles.detailsContainer}>
          <View
            style={[styles.popupHeader, { justifyContent: "space-around" }]}
          >
            <View>
              <Text>Course Progress</Text>
            </View>
            <View>
              <Text>33% completed</Text>
            </View>
          </View>
        </View>

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
              width: (1 / 3) * 230,
              height: 8,
              position: "relative",
              top: -8,
              borderRadius: 10,
            }}
          ></View>
        </View>

        <View style={styles.detailsContainer}></View>
      </View>

      <Animated.View style={[styles.popupContainer]}>
        <ScrollView style={styles.popupContainer}>
          {/* Cross button */}

          {/* Popup content */}
          <View style={styles.popupContent}>
            <View style={styles.popupHeader}>
              <View>
                <Text style={{ fontSize: 11 }}>
                  Complete all the cousrse to gain a certificate
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.popupContent,{marginBottom:50}]}>
            <FlatList
              style={{ width: "100%", backgroundColor: "#fff" }}
              data={transactionData}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => {
                return <Flatlistitem data={item} />;
              }}
            />
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};
const Flatlistitem = (props) => {
  const item = props.data;
  const navigation= useNavigation()
  function navigateToCourseDetails() {
    navigation.navigate("Understand Course", { data: item });
  }  
  return (
    <View style={flatlistStyles.PanelItemContainer}>
  <TouchableOpacity onPress={navigateToCourseDetails}>
    <View style={{ flexDirection: "row", alignItems: "stretch" }}>
        <View>
          <Image
            source={{ uri: item.userImage }}
            style={flatlistStyles.PanelImage}
          />
        </View>
        {/* this ia the text container */}
        <View style={{ marginLeft: 10, padding: 5 }}>
          <Text
            style={{ fontSize: 16, color: "#000" }}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            Lesson {item.key}
          </Text>
          <View style={{padding:0, minWidth: 180,
            borderRadius: 10,
         
         }}>
          <Text
            style={{ fontSize: 16, color: "#000" }}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {item.name}
          </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 26,
            }}
          >
            <Text style={{ fontSize: 13, color: "#000", opacity: 0.6 }}>
              Completed
            </Text>
            <MaterialIcons
              color={COLORS.yellow}
              name="play-circle-fill"
              size={22}
            />
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const flatlistStyles = StyleSheet.create({
  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },

  PanelHandle: {
    height: 6,
    width: 50,
    backgroundColor: "#666",
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 6,
  },
  PanelItemContainer: {
    borderWidth: 0.4,
    borderColor: "#666",
    height: 110,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 5,
  },
  PanelImage: {
    width: 100,
    height: 100,
    backgroundColor: "#eee",

    position: "relative",
    top: 0,
  },
  PanelButton: {
    padding: 14,
    width: 200,
    justifyContent: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
  },
  PanelButtonText: {
    fontSize: 28,
    color: "#fff",
    alignSelf: "center",
  },
});

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
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
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
  popupBoldText: { fontSize: 14, color: "#000", fontWeight: "700" },
  btn2: {
    padding: 7,
    paddingHorizontal: 7,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
    marginLeft: 0,
    borderColor: COLORS.secondarygreen,
    borderWidth: 3,
    backgroundColor: COLORS.secondarygreen,
    borderRadius: 5,
  },
});

export default CourseDetailsPage;
