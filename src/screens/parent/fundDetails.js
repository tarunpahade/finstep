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
  Modal,
  TextInput,
  ActivityIndicator
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";
import { Flatlistitem } from "../../components/flatlist/flatlistitems";
import FullPageHeader from "../../components/navbar/smallNavbar";
import {
  useAddMoneyToPotMutation,
  useGetSavingTransactionsQuery
} from "../../store/apiSlice";
import { useSelector } from "react-redux";

const FundDetailsPage = ({ route }) => {
  // console.log(route.params);
  const data = route.params.data.item;

const userId=route.params.userId;
const studentId=route.params.studentId;
const fromWho=route.params.from;  //parent || student
  const navigation = useNavigation();
  const [amount, setAmount] = useState(0);
  const profileData = useSelector((state) => state.account);

  const [
    addToPot,
    { data: studentPot, error: errorInAddingMoneyToThePot, isLoading: loadingInAddingMoneyToThePot },
  ] = useAddMoneyToPotMutation();
  console.log(data);
  const { data:savingTransaction, isLoading, error, refetch } = useGetSavingTransactionsQuery(data._id);

  const [totalAmount, setTotalAmount] = useState(data.totalAmt);
  const [investedAmount, setInvestedAmount] = useState(data.savedAmount);
  const [makeAddmoneyVisible, setmakeAddmoneyVisible] = useState(false);


  const handleAddMoney = () => {
    console.log("Hello bro");

    setmakeAddmoneyVisible(true);
  };
  const handleBackButton = () => {
    // Handle back button press
    navigation.goBack();
  };
  const handleDenyMoneyGoBack = () => {
    setmakeAddmoneyVisible(false);
  };
  const handleTextChange = (value) => {
    const enteredValue = parseFloat(value);

    if (value === "") {
      setAmount(0);
    } else {
      const maxValue = totalAmount - investedAmount;
      console.log(enteredValue, maxValue);

      if (enteredValue <= maxValue) {
        setAmount(value);
      }
    }
  };
  const placeholderText = `Max ₹ ${totalAmount - investedAmount} can be added`;

  const AddMoneyInPot = async () => {
    console.log(profileData, "I am add balance to pot");
    const dataToDatabase = {
      userId: userId,
      amount: amount,
      potId: data._id,
      fundName: data.name,
      studentId: studentId,
      from:fromWho
    };
    console.log(dataToDatabase, "this is data to database");
      const addNewNotification = await addToPot(dataToDatabase);
      console.log(addNewNotification,'this is err');
if(addNewNotification.error){
  alert("Insuffeient Balance");
}
      if (addNewNotification.data.status === "Ok") {
        alert("Money added to top");
      setAmount(0);
     // setmakeAddmoneyVisible(false);
      navigation.goBack()
      } 
    
  };
if(isLoading){
  return <ActivityIndicator size="large" color="#00ff00" />;
}
if(error){
  return <Text>{error}</Text>;
}
console.log(savingTransaction.data,'this is saving transaction');
const transactions=savingTransaction.data
  return (
    <View style={styles.bodyContainer}>
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
        <View
          style={{
            borderWidth: 0.7,
            padding: 15,
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          <View style={styles.detailsContainer}>
            <Text style={styles.value}> ₹{investedAmount} </Text>
            <Text>Of ₹{totalAmount}</Text>
          </View>

          <View>
            <View
              style={{
                width: 150,
                height: 8,
                backgroundColor: "#333",
                position: "relative",
              }}
            ></View>
            <View
              style={{
                backgroundColor: "rgb(0, 191, 166);",
                width: (investedAmount / totalAmount) * 150,
                height: 8,
                position: "relative",
                top: -8,
              }}
            ></View>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Pressable style={styles.button} onPress={handleAddMoney}>
          <Text style={styles.buttonText}>Add Money</Text>
        </Pressable>
      </View>
      <Animated.View style={[styles.popupContainer]}>
        <ScrollView style={styles.popupContainer}>
          {/* Cross button */}

          {/* Popup content */}
          <View style={styles.popupContent}>
            <View style={styles.popupHeader}>
              <View>
                <Text style={styles.popupBoldText}>Transactions</Text>
              </View>
            </View>
          </View>
          <View style={styles.popupContent}>
            <FlatList
              style={{ width: "100%", backgroundColor: "#fff", padding: 10 ,marginBottom:300}}
              data={transactions}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text
                      style={{
                        fontSize: 13,
                        marginBottom: 5,
                        fontWeight: "300",
                      }}
                    >
                      {item.transactionDate}
                    </Text>
                    <Flatlistitem data={item} />
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </Animated.View>
      <Modal visible={makeAddmoneyVisible}>
        <FullPageHeader
          data={{ name: `Add Money in ${data.name}` }}
          handleBackButton={handleDenyMoneyGoBack}
        />

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Add money :</Text>
            <TextInput
              placeholder={placeholderText}
              style={styles.input}
              value={amount}
              keyboardType="number-pad"
              onChangeText={handleTextChange}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={AddMoneyInPot}>
            <Text style={styles.buttonText}>Add Money</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  //navbar
  bodyContainer: {
    backgroundColor: "#fff",
  },
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
    width: "50%",
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

  container: {
    flex: 1,
    width: "80%",
    marginLeft: "10%",
    marginTop: "20%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FundDetailsPage;
