import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image,ActivityIndicator } from "react-native";
import { pagestyles } from "../../styles/pagesStyles";
import { COLORS } from "../../constants";
import { useGetParentFundQuery } from "../../store/apiSlice";
import { Item } from "../../components/saving/Item";
export function ParentFund({ navigation }) {
  //const studentId = useSelector((state) => state.auth.user.id);
const studentId = 6314434; 

  
  const { data, isLoading, error } = useGetParentFundQuery(studentId);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }

  const SavingPots = data.data;

  return (
    <View style={pagestyles.container}>
      <View>
      
        <FlatList
          data={SavingPots}
          numColumns={1}
          renderItem={(saving) => <Item data={saving} />}
        />
        <View style={styles.btn2}>
          <Text>Add Pots</Text>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
 
  btn2: {
    padding: 10,
    margin: 15,
    alignItems: "center",
    backgroundColor: COLORS.secondarygreen,
  },

});
