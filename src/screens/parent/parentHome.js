import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  StyleSheet,
  Modal,
  Image,
  FlatList
} from "react-native";
import { globastyles } from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Notification } from "../../components/notification/notification";
import { Navbar } from "../../components/navbar/nav";
export const ParentHome = ({ navigation }) => {
  const [notificationclick, setnotificationclick] = useState(false);
  
  const childData =[
    {
      amount: "4020",
      name: "Laila",
      icon: require("../../assets/images/kemal.jpg"),
      click:addMoney,
      showProfile:showProfile
    },
   
    {
      amount: "7672",
      name: "Aman",
      icon: require("../../assets/images/kemal.jpg"),
      click:addMoney,
      showProfile:showProfile
    },
  ]
  function notification() {
    setnotificationclick(true);
  }
  function showProfile() {
    navigation.navigate('Parent Student Home')
  }
  function addMoney() {
    console.log('Add Money');
  }

  function hidenotification() {
    setnotificationclick(false);
  }

 

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
    <View>     
        <View style={styles.container}>
          <Navbar notificationClick={notification} />
          <View style={styles.containerBody}>
          <View>
          <Text >Your Parent Balance</Text>
          <Text style={globastyles.bgText}>Rs. 9999</Text>


          </View>
       
          <FlatList
          data={childData}
          numColumns={1}
          renderItem={(item) => <ShowKids data={item} />}
        />
         
     
            <View style={styles.parent}>
              <View style={styles.add}>
                <TouchableOpacity>
                  <Text  style={{ fontSize:15,color:'#000'}}>Add Child</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Modal visible={notificationclick}>
          <View style={globastyles.notificationNav}>
            <TouchableOpacity onPress={hidenotification}>
              <MaterialIcons name="arrow-back-ios" size={18} color="#312651" />
            </TouchableOpacity>
            <Text style={globastyles.bgText}>Notifications</Text>
          </View>

          <Notification />
        </Modal>
        </View>

    </TouchableWithoutFeedback>
  );
};
//color scheme
// #8deee7 "#28529a"
const styles = StyleSheet.create({
  containerBody: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: '8%',
    padding: 20,
  },
  parent: {
    flexDirection: "column",
marginVertical:15,
    color: "#fff",
    width: "100%",
    marginBottom: 0,
  },
  child: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  moneyTxty: {
    backgroundColor: "#28529a",
    color:'#fff',
    flexDirection: "row",
    height: 70,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    backgroundColor: "#fff",
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize:15,
  },
  prText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 10,
  },
  padding: {
    paddingLeft: 10,
    paddingTop: 10,
    color:'#fff',
    fontSize:18

  },
});



function ShowKids(props){
  return (
    <View style={styles.parent}>
    <View style={styles.child}>
      <View style={styles.moneyTxty}>
      <TouchableOpacity onPress={props.data.item.showProfile}>
        <View style={styles.prText}>
          <Image
            style={globastyles.profile}
            source={props.data.item.icon}
          />

          <Text style={styles.padding}>{props.data.item.name}</Text>
        </View>
        </TouchableOpacity>

        </View>
      <View style={styles.moneyTxty}>

<Text style={{ color:'#fff',fontSize:16}}>Balance {props.data.item.amount}</Text>
      </View>
    </View>
    <View style={styles.add}>
      <TouchableOpacity onPress={props.data.item.click} >
        <Text style={{ fontSize:15,color:'#000'}}>Add Balance</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}