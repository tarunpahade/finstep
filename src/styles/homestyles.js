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
      borderRadius: 0,
    },
    ProfileImageNotification: {
      height: "23%",
      width: "55%",
      borderRadius: 15,
      position: "absolute",
      right: -8,
      borderWidth: 0,
      borderColor: "#000",
    },
    imgContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    Heading: {
      marginTop: 10,
      fontSize: 18,
      color: COLORS.black,
     fontWeight:'600'
    },
    SubHeading: { fontSize: 12, color: COLORS.black, opacity: 0.6 },
    image: {
      width: "99%",
      height: 210,
      marginVertical: 20,
      resizeMode: "contain",
    },
    notificationNav: {
    marginTop:'10%',

      flexDirection: "row",
      width: "48.9%",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 20,
    },
    bgText: {
      fontSize: 19,
      fontWeight: "bold",
      paddingLeft: 0,
    },
  });
  