import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS } from '../constants'



export const homestyles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingTop: 0,
    },
    subContainer: { paddingTop: 50, paddingHorizontal: 14 },
    ProfileImage: {
      width: 35,
      height: 35,
      borderRadius: 40,
    },
    ProfileImageNotification: {
      height: "19%",
      width: "25%",
      backgroundColor: "#4853ef",
      borderRadius: 6,
      position: "absolute",
      right: 6,
      borderWidth: 2,
      borderColor: "#000",
    },
    imgContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    Heading: {
      fontSize: 20,
      color: COLORS.black,
      fontWeight: "bold",
    },
    SubHeading: { fontSize: 17, color: COLORS.black, opacity: 0.6 },
    image: {
      flex: 1,
      width: "99%",
      height: 210,
      marginVertical: 20,
      resizeMode: "contain",
    },
    notificationNav: {
      flexDirection: "row",
      width: "55%",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 20,
    },
    bgText: {
      fontSize: 19,
      fontWeight: "bold",
      paddingLeft: 2,
    },
  });
  