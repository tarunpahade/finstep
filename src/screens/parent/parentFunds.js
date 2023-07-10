import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Modal,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { pagestyles } from "../../styles/pagesStyles";
import { COLORS } from "../../constants";
import {
  useCreateParentFundMutation,
  useGetParentFundQuery,
} from "../../store/apiSlice";
import { Item } from "../../components/saving/Item";
import { useSelector } from "react-redux";
export function ParentFund({ navigation }) {
  const studentId = useSelector((state) => state.account.account.userId);

  const [
    createFund,
    { data2, error2, isLoading2 },
  ] = useCreateParentFundMutation();
  const [AddFund, setAddFund] = useState(false);
  const { data, isLoading, error } = useGetParentFundQuery(studentId);

  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  console.log(data);

  if (isLoading) {
    return  <ActivityIndicator size={'large'} style={{flex:1}} />
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }
  if (data.data.length === 0) {
    return (
      <View
        style={[
          styles.container,
          { alignContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ fontSize: 20, color: "#000", paddingTop: 10 }}>
          No pots created Yet
        </Text>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            setAddFund(true);
          }}
        >
          <Text>Add Pots</Text>
        </TouchableOpacity>
      </View>

    );
  }
  console.log(error2, isLoading2);

  async function uploadToDatabase(database) {
    const result = await createFund(database);
    if (result.data.status === "Ok") {
      setAddFund(false);
    }
  }

  const handleSubmit = async () => {
    if (!name || name.trim() === "") {
      Alert.alert("Error", "Please enter a value");
    } else if (!amount || amount.trim() === "") {
      Alert.alert("Error", "Please enter a value");
    } else if (name || amount) {
      const database = {
        totalAmt: amount,
        name: name,
        savedAmount: 0,
        studentId: JSON.stringify(studentId),
      };

      uploadToDatabase(database);
    }
  };

  return (

    <View style={pagestyles.container}>
      <View>
        <FlatList
          data={data.data}
          numColumns={1}
          renderItem={(saving) => <Item data={saving} from={'parent fund'} />}
        />
     
      </View>
      <Modal visible={AddFund}>
        <View style={styles.form}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            style={styles.textInput}
          />

          <TouchableOpacity
            style={styles.btn2}
            onPress={handleSubmit}
            disabled={isLoading2}
          >
            {isLoading2 ? (
              <ActivityIndicator /> // Show the loading indicator
            ) : (
              <Text>Submit</Text> // Show login text when isLoading is false
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn3}
            onPress={() => {
              setAddFund(false);
            }}
          >
            <Text style={{ fontSize: 19 }}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
      style={styles.btn2}
      onPress={() => {
        setAddFund(true);
      }}
    >
      <Text>Add Pots</Text>
    </TouchableOpacity>
      </View>
  
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    marginTop: 20,
  },
  btn2: {
    position:"absolute",
    padding: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: "90%",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: COLORS.secondarygreen,
    bottom:9
  },
  btn3: {
    position: "absolute",
    backgroundColor: "#eee",
    padding: 10,
    top: 60,
    right: 20,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
