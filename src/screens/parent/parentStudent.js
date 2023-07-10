import React, {useState} from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
Modal
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Buttons } from "../../components/buttonContainer/buttons";
import { COLORS, icons } from "../../constants";
import { homestyles } from "../../styles/homestyles";
export const ParentStudentHome = ({ navigation }) => {
  const [notificationclick, setnotificationclick] = useState(false);


    const [help, sethelp] = useState(false);
    function transaction() {
      navigation.navigate("Transactions");
    }

  function notification() {
    setnotificationclick(true);
  }
  function helpClick() {
    sethelp(true);
  }
  function hideHelp() {
    sethelp(false);
  }
  
  function savings() {
    navigation.navigate("Savings");
  }
  function parentFund() {
    navigation.navigate("Parent Fund");
  }
  function analysis() {
    navigation.navigate("Analytics");
  }


  function parentTask() {
    navigation.navigate("Parent Task");
  }
  function addMoney() {
    navigation.navigate("Add Money");
  }
  const featuresData = [
    {
      id: 1,
      icon: icons.wallet,
      color: COLORS.red,
      backgroundColor: COLORS.lightpurple,
      description: "Tasks ",
      onpress: parentTask,
    },
    {
      id: 2,
      icon: icons.history,
      backgroundColor: COLORS.lightyellow,
      description: "Statement",
      onpress: transaction,
    },
    {
      id: 3,
      icon: icons.savings,
      backgroundColor: COLORS.lightGreen,
      description: "Add Money",
      onpress:addMoney
  ,   
  
    },
    {
      id: 3,
      icon: icons.savings,
      backgroundColor: COLORS.lightGreen,
      description: "Parent                Funds",
      onpress: parentFund,
    },

    {
      id: 3,
      icon: icons.pot,
      backgroundColor: COLORS.lightGreen,
      description: "Saving Pots",
      onpress: savings,
    },

    {
      id: 4,
      icon: icons.dashboard,
      backgroundColor: COLORS.lightRed,
      description: "Analysis",
      onpress: analysis,
    },
  
  ];

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        style={{ backgroundColor: "#fff" }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView style={{ backgroundColor: "#333" }}>
          <View
            style={[homestyles.container, { paddingBottom: 250, paddingTop: 5 }]}
          >
            <View style={homestyles.subContainer}>
            <View style={homestyles.imgContainer}>
            <View>
              <Text style={homestyles.Heading}>Welcome Back,</Text>
              <Text style={homestyles.SubHeading}>James Murray</Text>
            </View>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'25%'}}>
            <MaterialIcons name="help" size={23} color="#000" onPress={helpClick} />

            <TouchableOpacity onPress={notification}>
              <Image
                source={{
                  uri:
                    "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                }}
                style={homestyles.ProfileImage}
              />
              <View style={homestyles.ProfileImageNotification}>
             
              </View>
            </TouchableOpacity>
          </View>
          </View>

              <View
                style={{ width: "100%", alignItems: "center", padding: 20 }}
              >
                <Image
                  source={require("../../assets/images/card2.png")}
                  style={homestyles.image}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Buttons data={featuresData} />
                
              </View>
            </View>
            <Modal visible={help}>
                <View style={homestyles.notificationNav}>
                  <TouchableOpacity onPress={hideHelp}>
                    <MaterialIcons name="arrow-back-ios" size={18} color="#312651" />
                  </TouchableOpacity>
                  <Text style={homestyles.bgText}>Help</Text>
                </View>
      
               
              </Modal>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

//add scroolview
