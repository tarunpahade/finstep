import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FullPageHeader = ({ data , handleBackButton }) => {
    const useNav=useNavigation()
    // const handleBackButton =()=>{
    //     useNav.goBack()
    // }
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleBackButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.navbarCenter}>
          <Text style={styles.navbarTitle}>{data.name}</Text>
        </View>
        <View style={styles.navbarRight}></View>
      </View>
      {/* Add the rest of your page content here */}
    </View>
  );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        height: 56,
        backgroundColor: "#eee",
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
});

export default FullPageHeader;
