import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
} from "react-native";
import { Buttons } from "../../components/buttonContainer/buttons";
import SlidingUpPanel from "rn-sliding-up-panel";
import { COLORS, SIZES, FONTS, icons } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
export const Money = ({ navigation }) => {
  function notification() {
    setnotificationclick(true);
  }
  function transaction() {
    navigation.navigate("Transactions");
  }
  function savings() {
    navigation.navigate("Savings");
  }
  function analysis() {
    navigation.navigate("Analytics");
  }

  function requestMoney() {
    navigation.navigate("Request Money");
  }

  // Users Data
  const featuresData = [
    {
      id: 1,
      icon: icons.savings,

      backgroundColor: COLORS.lightpurple,
      description: "Balance",
    },
    {
      id: 6,
      icon: icons.pot,
      backgroundColor: COLORS.lightpurple,
      description: "Saving Pots",
      onpress: savings,
    },

    {
      id: 3,
      icon: icons.dashboard,
      backgroundColor: COLORS.lightpurple,
      description: "Analysis",
      onpress: analysis,
    },
    {
      id: 4,
      icon: icons.wallet,
      color: COLORS.red,
      backgroundColor: COLORS.lightpurple,
      description: "Wallet",
    },
    {
      id: 2,
      icon: icons.mobile,

      backgroundColor: COLORS.lightpurple,
      description: "Transfer",
    },
    {
      id: 5,
      icon: icons.bill,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightpurple,
      description: "Request",
      onpress: requestMoney,
    },
  ];

  // Carousel data

  const { width, height } = Dimensions.get("window");

  // SLIDING PANEL

  const [dragRange, setDragRange] = useState({
    top: height - 90,
    bottom: 150,
  });
  const Users = useSelector((state) => state.transaction.products);
  const dispatch = useDispatch();

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);
  return (
    <View style={styles.container}>
    <StatusBar />  
    <View style={{ paddingTop: 30, paddingHorizontal: 14 }}>
  
        <ScrollView>
          <View style={{alignContent:"center",alignItems:'center',height:190,justifyContent:"space-around"}}>
<View>
<Text>Current Balance</Text>
<Text style={{fontSize:30,color:COLORS.purple}}>10,000</Text>

</View>
            <View style={{flexDirection:"row",justifyContent:"space-between",width:150,backgroundColor:'#eee',padding:10,borderRadius:10}}>
              <View>
                <Text>100</Text>
                <Text>Spent</Text>
              </View>
              <View style={{backgroundColor:'#fff',width:1.5,height:40}}></View>
              <View>
                <Text>1000</Text>
                <Text>Saved</Text>
              </View>
            </View>
          </View>
          <Buttons data={featuresData} />
        </ScrollView>
      </View>

      <View style={{ flex: 1}}>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[360]}
          height={height}
          friction={0.9}
          containerStyle={{ shadowColor: "red", borderTopWidth: 0 }}
        >
          <View
            style={{
              flex: 1,
      
              borderRadius: 24,
              padding: 14,
            }}
          >
            <View style={styles.PanelHandle}></View>
            <View></View>

            <View style={styles.PanelItemContainer}>
              <TouchableOpacity style={styles.PanelButton}>
                <MaterialIcons
                  name="qr-code-scanner"
                  color={"#fff"}
                  style={styles.PanelButtonImg}
                  onPress={() => {
                    navigation.navigate("Qr Code");
                  }}  
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.PanelButton}
                onPress={() => {
                  navigation.navigate("Payment");
                }}
              >
                <Text style={styles.PanelButtonText}>Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.PanelButton}
                onPress={() => {
                  savings()
                }}
              >
                <Text style={styles.PanelButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.PanelButton}
              onPress={() => {
                
                navigation.navigate("Add account ");
              }}
            >
              <Text style={styles.PanelButtonText}>Add</Text>
            </TouchableOpacity>
              
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-end" }}
            ></View>
          </View>
        </SlidingUpPanel>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
  },
  btnImage: {
    height: 28,
    width: 28,
    paddingBottom: 30,
  },

  ProfileImage: {
    width: 45,
    height: 45,
    borderRadius: 40,
  },
  
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.green,
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
    borderColor: "#666",
    padding: 14,
    marginTop: 10,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
 
  PanelButton: {
    padding: 12,
    width: 80,
    justifyContent: "center",
    backgroundColor: COLORS.purple,
    borderRadius: 10,
  },
  PanelButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
  PanelButtonImg: {
    alignSelf: "center",
    fontSize: 22,
  },
  ProfileImageNotification: {
    height: '19%',
    width: '25%',
    backgroundColor: "#4853ef",
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
