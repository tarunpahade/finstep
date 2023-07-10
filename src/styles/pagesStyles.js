import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

export const pagestyles = StyleSheet.create({
  textContainer: {
    marginRight: 18,
  },
  body: {
    marginTop: 22,
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#252525",
    width: "100%",
  },
  icon: {
    backgroundColor: "#333",
    borderRadius: 100,
    justifyContent: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#fff",
  },

  bgText: {
    fontSize: 21,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  smtxt: {
    paddingTop: 5,
  },

  pot: {
    position: "relative",
    backgroundColor: "#fff",
    bottom: 0,
    margin: 90,
    padding: 17,
    alignItems: "center",
    borderRadius: 23,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 159,
  },
  potText: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: "bold",
    paddingLeft: 2,
  },

  notificationNav: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
    margin: 20,
    backgroundColor: "#fff",
  },
  CheckboxContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  Checkbox: {
    padding: 5,
  },
  sent: {
    color: "#ce6969",
    fontSize: 18,
    fontWeight: "bold",
  },
  recieved: {
    color: "#76d87d",
    fontSize: 18,
    fontWeight: "bold",
  },
});
