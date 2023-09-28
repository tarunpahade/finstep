import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Modal,
  Alert,
} from "react-native";
import { pagestyles } from "../../styles/pagesStyles";
import { COLORS } from "../../constants";
import { Item } from "../../components/saving/Item";
import {
  useCreateFundMutation,
  useGetStudentFundQuery,
} from "../../store/apiSlice";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
export function Savings({route}) {

  const [from, setFrom] = useState(route.params?.fromWho || 'student');
  console.log(from,'fromWho');

  const authentication = useSelector((state) => state.account);
  const studentId = authentication.account.userId;
  const [AddFund, setAddFund] = useState(false);
  const [createFund, { data2, error2, isLoading2 }] = useCreateFundMutation();
  const { data, isLoading, error } = useGetStudentFundQuery(studentId);
  const authentication2 = useSelector((state) => state.parentAccount.account);


  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  if (isLoading) {
    return <ActivityIndicator size={'large'} style={{flex:1}} />
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
        {from === 'student' ? (
          <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            setAddFund(true);
          }}
        >
          <Text>Create Pots</Text>
        </TouchableOpacity>
        ) : null}
        
      </View>
    );
  }

  async function uploadToDatabase(database) {
    const result = await createFund(database);
    if (result.data.status === "Ok") {
      setAmount("");
      setName("");
      setAddFund(false);
      //after we call the state it runs all the below functions again
    }
  }

  const handleSubmit = () => {
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
      <FlatList
        data={data.data}
        numColumns={1}
        renderItem={(saving) => <Item data={saving} from={from} />}
      />
{from === 'student' ? (
  <TouchableOpacity>
  <TouchableOpacity
    style={styles.btn2}
    onPress={() => {
      setAddFund(true);
    }}
  >
    <Text>Create Pots</Text>
  </TouchableOpacity>
</TouchableOpacity>

) : null

}
  
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
    </View>
  );
}

const styles = StyleSheet.create({
  btnImage: {
    height: 28,
    width: 28,

    paddingBottom: 30,
  },

  textInput: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    marginTop: 20,
  },
  btn2: {
    position: "absolute",
    padding: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: "90%",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: COLORS.secondarygreen,
    bottom: 9,
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
