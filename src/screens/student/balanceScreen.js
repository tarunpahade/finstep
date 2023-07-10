import React, { useEffect } from "react";
import { View, Text, StyleSheet,ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { useGetLoginDetailsQuery } from "../../store/apiSlice";
import { io } from 'socket.io-client';

export  function BalanceScreen() {
  const current=useSelector((state)=>state.account.account.userId)
  const { data, isLoading, error,refetch } = useGetLoginDetailsQuery(current); 
  const socket = io("https://backend-5ig7.onrender.com/");

  useEffect(() => {
    

    socket.on('ApproveTask', (approveTask) => {
if(JSON.parse(approveTask.studentId)===current){
      refetch()

    }
    });
    return () => {
      socket.off('ApproveTask');
    };
  }, []);

if (isLoading ) {
  return  <ActivityIndicator size={'large'} style={{flex:1}} />
}
if (error) {
  return <Text>Error {error.error}</Text>;
}
console.log(data.data[0].balance,'this is balance');
const balance=data.data[0].balance

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>₹ {balance}</Text>
        <Text style={styles.balanceLabel}>Current Balance</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* Add buttons or other components as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  balanceContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  balanceLabel: {
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  // Add additional styles as needed
});
