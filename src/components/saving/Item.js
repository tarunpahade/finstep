import React from "react";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Button,
  Image,
} from "react-native";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export function Item({ data , from }) {
  const navigation = useNavigation();
  const profileData = useSelector((state) => state.parentAccount.account);
 const userId=useSelector((state)=>state.account.account.userId)

  const parentId=profileData.userId
  function navigateToFundDetails() {
    console.log(from);
    if (from == "student"){
      console.log(userId);
      navigation.navigate("Fund Details", { data: data,userId:userId,studentId:userId,from:"student" });

    } else if(from == "parent fund"){
      navigation.navigate("Fund Details", { data: data,userId:parentId,studentId:parentId,from:"parent" });
    
    } else if(from == "parent"){
      console.log('View Only');
    }
  }
  return (
    <View>
      <TouchableOpacity onPress={navigateToFundDetails}>
        <View style={styles.PanelItemContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginRight: 20,
                borderWidth: 1,
                padding: 2,
                backgroundColor: COLORS.red,
              }}
            >
              <Image
                source={require("../../assets/icons/savings.png")}
                resizeMode="contain"
                style={[styles.btnImage, {}]}
              />
            </View>
            {/* this ia the text container */}
            <View>
              <Text style={{ fontSize: 20, color: "#000", paddingTop: 10 }}>
                {data.item.name}
              </Text>
              <View style={{marginTop:5}}>
                <Text style={{ fontSize: 12, color: "#444" }}>
                  {data.item.savedAmount}
                </Text>
                <View
                  style={{
                    width: 150,
                    height: 8,
                    backgroundColor: "#333",
                    position: "absolute",
                    left: 50,
                    bottom: 4,
                  }}
                ></View>
                <View
                  style={{
                    backgroundColor: COLORS.yellow,
                    width: (data.item.savedAmount / data.item.totalAmt) * 150,
                    height: 8,
                    position: "absolute",
                    left: 50,
                    bottom: 4,
                  }}
                ></View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",marginTop:15 }}>
            <Text
              style={{
                fontSize: 12,
                color: "#444",
                marginTop: "65%",
                marginRight: 6,
              }}
            >
              {data.item.totalAmt}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnImage: {
    height: 26,
    width: 26,

    paddingBottom: 30,
  },
  btn2: {
    padding: 10,
    margin: 15,
    alignItems: "center",
    backgroundColor: COLORS.secondarygreen,
  },

  notificationNav: {
    flexDirection: "row",
    width: "63%",
    justifyContent: "space-between",
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 0,
  },
  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: "#4853ef",
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
  btn: {
    backgroundColor: "#fff",
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0c0c",
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
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
    borderColor: "#fff",
    backgroundColor: "#fff",
    padding: 7,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  PanelImage: {
    width: 40,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 40,
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
