import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useLoginMutation } from "../../store/apiSlice";
import { useDispatch } from "react-redux";
import { accountSlice } from "../../store/authitication";
import { parentAccountSlice } from "../../store/parentAuth";
import { styles } from "../../styles/StandardStyles";

const RegisterPhone = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [login, { data, error, isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  if (error) {
    console.log(error);
  }

  async function checkLogin(data) {
    const result = await login(data);

    if (result.error) {
      console.log("Error while logging in");
    } else if (result.data.data === "New User") {
      console.log("Navigate to registered screen");
      navigation.navigate("Pin Page", {
        accountType: "New User",
        phone_number: phoneNumber,
      });
    } else if (result.data.status === "Ok") {
      if (result.data.data.is_parent === false) {
        setAccount(result.data.data);
        console.log("Is a Kid");
        navigation.navigate("Pin Page", { accountType: "Student Login" });
      } else if (result.data.data.is_parent === true) {
        setParentAccount(result.data.data);
        console.log("Is a Parent");
        navigation.navigate("Pin Page", { accountType: "Parent Login" });
      }
    }
  }

  const setAccount = (data) => {
    dispatch(accountSlice.actions.setAccount(data));
  };
  const setParentAccount = (data) => {
    dispatch(parentAccountSlice.actions.setParentAccount(data));
  };
  const handleClearPress = () => {
    setPhoneNumber("");
  };

  const handleProceedPress = () => {
    console.log(phoneNumber);

    checkLogin({ phone_number: parseFloat(phoneNumber) });
  };
  const handleInputChange = (text) => {
    if (text.length <= 10) {
      setPhoneNumber(text);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#F0F8FF", padding: 20 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Enter your mobile number
        </Text>

        <View style={styles.inputContainer}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
              borderWidth: 1,
              borderColor: "lightgray",
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18, marginRight: 10 }}>+91</Text>
            <TextInput
              style={{
                flex: 1,
                fontSize: 18,
                borderWidth: 0,
                borderLeftWidth: 1,
                borderColor: "lightgray",
                paddingHorizontal: 15,
                margin: 0,
              }}
              value={phoneNumber}
              onChangeText={handleInputChange}
              keyboardType="numeric"
              s
            />
            {phoneNumber.length > 0 && (
              <TouchableOpacity onPress={handleClearPress}>
                <MaterialIcons name="clear" size={24} color="gray" />
              </TouchableOpacity>
            )}
          </View>
          {phoneNumber.length > 9 ? (
            <TouchableOpacity
              style={styles.button}
              onPress={handleProceedPress}
            >
              {isLoading ? (
                <ActivityIndicator size={"small"} />
              ) : (
                <Text style={{ color: "white", fontSize: 16 }}>Proceed</Text>
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "lightgray" }]}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Proceed</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default RegisterPhone;
