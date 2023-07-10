import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

export const AddMoneyToAccount = () => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [upiId, setUpiId] = useState("");
  const [card, setcard] = useState(false);

  const handleAddMoney = () => {
    if (amount === "") {
      alert("Please enter an amount");
      return;
    }

    if (cardNumber === "") {
      alert("Please enter your card number");
      return;
    }

    if (cvv === "") {
      alert("Please enter your CVV");
      return;
    }

    if (expirationDate === "") {
      alert("Please enter your expiration date");
      return;
    }

    if (upiId === "") {
      alert("Please enter your UPI ID");
      return;
    }

    // TODO: Add money to account
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Modal visible={card}>
          <View style={styles.card}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              onChangeText={setCardNumber}
            />
            <Text style={styles.label}>Name on Card</Text>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              onChangeText={setCardNumber}
            />
            <View
              style={{
                flexDirection: "row",
                marginTop: "5%",
                justifyContent: "space-around",
              }}
            >
              <View>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  style={[styles.input, { width: 100 }]}
                  placeholder="CVV"
                  onChangeText={setCvv}
                />
              </View>
              <View>
                <Text style={styles.label}>Expiration Date</Text>
                <TextInput
                  style={[styles.input, , { width: 150 }]}
                  placeholder="Expiration Date"
                  onChangeText={setExpirationDate}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Button
              title="Add Money"
              onPress={handleAddMoney}
              style={styles.button}
            />
          </View>
        </Modal>


<View style={{alignItems:'center'}} >
          <TouchableOpacity style={styles.upi}
            onPress={() => {
              setcard(true);
            }}
          >
            <Text style={styles.label}>Debit Card </Text>
            <View style={{flexDirection:"row"}}>
            <MaterialIcons  name="add-circle" size={28} color={COLORS.blue} />

            </View>


          </TouchableOpacity>
        <View style={styles.upi}>
          <Text style={styles.label}>UPI</Text>
          <View style={{flexDirection:"row"}}>
          <MaterialIcons  name="add-circle" size={28} color={COLORS.blue} />
          

          </View>
        </View>
      </View>
      </View>

      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  card: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    height: 40,
    width: 100,
    borderRadius: 5,
    margin: 10,
  },
  upi:{
    padding:10,
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:"#eee",
    marginVertical:10,
borderWidth:0.5,
width:'80%',
  }
});
