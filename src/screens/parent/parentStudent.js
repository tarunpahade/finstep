import React, {useState} from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Buttons } from "../../components/buttonContainer/buttons";
import { COLORS, icons } from "../../constants";
import { homestyles } from "../../styles/homestyles";
import { useSelector } from "react-redux";
import { useGetAnalyticsQuery, useGetLoginDetailsQuery } from "../../store/apiSlice";
import { ActivityIndicator } from "react-native";
import { useEffect } from "react";
import { io } from "socket.io-client";


export const ParentStudentHome = ({ navigation }) => {
  
const userData=useSelector((state)=>state.account.account.name)
const user=useSelector((state)=>state.account)

const [help, sethelp] = useState(false);

const { data, isLoading, error,refetch, } = useGetLoginDetailsQuery(user.account.userId);
const socket = io("https://backend-5ig7.onrender.com/");

useEffect(() => {
  // Listen for the 'newOrder' event
  socket.on("ApproveTask", (Task) => {
  
    refetch()
  });
  // Clean up the event listener on component unmount
  return () => {
    socket.off("ApproveTask");
  };
}, []);




if (isLoading ) {
  return  <ActivityIndicator size={'large'} style={{flex:1}} />
}
if (error) {
  return <Text>Error {error.error}</Text>;
}




    function transaction() {
      navigation.navigate("Transactions");
    }

  function notification() {
  
  }
  function helpClick() {
    sethelp(true);
  }
  function hideHelp() {
    sethelp(false);
  }
  
  function savings() {
    navigation.navigate("Savings", { fromWho: 'parent' });
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
    navigation.navigate("Add account");
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
      description: "Send Money",
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
        <View style={{ backgroundColor: "#333" }}>
          <View
            style={[homestyles.container, { paddingBottom: 250, paddingTop: 5 }]}
          >
            <View style={homestyles.subContainer}>


            
            <View style={homestyles.imgContainer}>
            <View>
              <Text style={homestyles.Heading}>Welcome Back,</Text>
              <Text style={homestyles.SubHeading}>View {userData}</Text>
              <Text style={homestyles.SubHeading}>Current Balance {data.data[0].balance}</Text>
  
              </View>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'25%'}}>
            <MaterialIcons name="help" size={1} color="#000" onPress={helpClick} />

            <TouchableOpacity onPress={notification}>
            <Image source={require('../../assets/icons/teen.png')} style={homestyles.ProfileImage} />

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
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

//add scroolview
