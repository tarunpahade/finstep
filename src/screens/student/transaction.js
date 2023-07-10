import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Flatlistitem } from "../../components/flatlist/flatlistitems";
import { useGetTransactionQuery } from "../../store/apiSlice";
import { useSelector } from "react-redux";

export function Transactions({ navigation }) {
  
  const { height } = Dimensions.get("window");
  const authentication=useSelector((state) => state.account)
  const studentId=authentication.account.userId
  const { data, isLoading, error } = useGetTransactionQuery(studentId);
  const [transactionData, setTransactionData] = useState(null)
  
const arrangeByMonths = (transactions) => {
  const monthsMap = {};
  
  transactions.forEach((transaction) => {
    const { month } = transaction;
    
    if (monthsMap[month]) {
      monthsMap[month].push(transaction);
    } else {
      monthsMap[month] = [transaction];
    }
  });

//  const Users = data.data
 
  
  const months = Object.keys(monthsMap).map((key) => ({
    name: key,
    key: key.toLowerCase(),
    transactions: monthsMap[key],
  }));

  return months;
};
if (isLoading) {
  return  <ActivityIndicator size={'large'} style={{flex:1}} />
}
if (error) {
  return <Text>Error{error.error}</Text>;
}
if (!transactionData && data && data.data) {
  setTransactionData(data.data);
  console.log(data.data);
}

const months = arrangeByMonths(data.data);

const renderMonthButton = ({ item }) => {
  const transactionsForMonth = data.data.filter(
    transaction => transaction.month.toLowerCase() === item.key.toLowerCase()
  );

  return (
    <TouchableOpacity
      style={styles.monthButton}
      onPress={() => {
        setTransactionData(transactionsForMonth)
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

if (data.data.length === 0) {
  return <Flatlistitem data={{name:'No transactions'}} />
}
  return (
    <View style={{flex:1,  backgroundColor: "#fff", padding: 14 }}>
      <View >
        <View style={{ height: height,width:'100%', paddingBottom: 10,marginBottom:50 }}>
        <View style={{justifyContent: 'center', alignItems: 'center',width:'100%'}}>
        
       
      <FlatList
      data={months}
      style={{width:'100%',alignContent:"space-around"}}
      keyExtractor={item => item.key}
      renderItem={renderMonthButton}
      horizontal
    />
      
        </View>
          <FlatList
            data={transactionData}
            keyExtractor={(item,index) =>  index.toString()}
            renderItem={({ item }) => {
              return <Flatlistitem data={item} />;
            }}
          />
      
          <View style={{height:55,width:10,borderColor:'#000'}}>
          
          </View>    
        </View>
      
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 17,
  },
  monthButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginBottom:10
  },
})