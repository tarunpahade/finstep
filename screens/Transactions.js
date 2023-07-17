import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const Transactions = () => {
  return (
    <View style={styles.transactions}>
      <View style={styles.transactions1}>
        <View style={styles.tabTitle}>
          <Pressable style={[styles.arrowRightNext, styles.iconLayout1]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>
          <Text style={styles.transactions2}>Transactions</Text>
          <View style={styles.profileAndSettings}>
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/moreoverflowmenuhoriz.png")}
            />
            <Image
              style={[styles.accountUserIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/accountuser.png")}
            />
          </View>
        </View>
        <Text style={styles.title}>Chose which account to transfer to</Text>
        <Pressable style={styles.button}>
          <Image
            style={styles.buttonChild}
            contentFit="cover"
            source={require("../assets/group-4.png")}
          />
          <Text style={styles.newAccount}>New account</Text>
        </Pressable>
        <View style={styles.accounts}>
          <View style={styles.transactions1}>
            <View style={styles.tabnames}>
              <View>
                <Text style={[styles.label, styles.labelTypo]}>Recents</Text>
                <View style={[styles.indicator, styles.indicatorSpaceBlock]} />
              </View>
              <View style={styles.tabnamesChild} />
              <View style={styles.tab1}>
                <Text style={[styles.label, styles.labelTypo]}>Contacts</Text>
                <View style={[styles.indicator1, styles.indicatorSpaceBlock]} />
              </View>
            </View>
            <View style={[styles.underline, styles.breakBorder]} />
          </View>
        </View>
      </View>
      <View style={styles.homeBar}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 26,
    width: 26,
    overflow: "hidden",
  },
  labelTypo: {
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.paragraphLarge,
    lineHeight: 24,
    textAlign: "left",
  },
  indicatorSpaceBlock: {
    marginTop: 8,
    height: 2,
    alignSelf: "stretch",
  },
  breakBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#f4f7fa",
    borderStyle: "solid",
  },
  currencyPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  profileFlexBox: {
    width: 286,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  currencyLayout: {
    height: 142,
    width: 142,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    borderWidth: 0.5,
    borderColor: "#cdd9e3",
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    height: 50,
    width: 50,
    overflow: "hidden",
    backgroundColor: Color.ink07,
  },
  vectorIcon: {
    height: "66.67%",
    width: "66.67%",
    top: "16.66%",
    right: "116.67%",
    bottom: "16.67%",
    left: "-83.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  arrowRightNext: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  transactions2: {
    textAlign: "center",
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    lineHeight: 23,
    letterSpacing: 0,
    fontSize: FontSize.headingH5_size,
    color: Color.ink01Black,
  },
  accountUserIcon: {
    marginLeft: 10,
  },
  profileAndSettings: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    flexDirection: "row",
  },
  tabTitle: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 102,
    padding: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.ink07,
  },
  title: {
    width: 300,
    marginTop: 24,
    textAlign: "left",
    color: Color.ink01Black,
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    lineHeight: 23,
    letterSpacing: 0,
    fontSize: FontSize.headingH5_size,
  },
  buttonChild: {
    height: 50,
    width: 50,
  },
  newAccount: {
    fontSize: FontSize.paragraphLarge_size,
    marginLeft: 19,
    fontFamily: FontFamily.paragraphLarge,
    lineHeight: 24,
    textAlign: "center",
    color: Color.ink01Black,
    letterSpacing: 0,
  },
  button: {
    backgroundColor: Color.accentGreen,
    width: 325,
    height: 90,
    paddingHorizontal: 17,
    paddingVertical: Padding.p_xl,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_3xs,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  label: {
    color: Color.ink01,
  },
  indicator: {
    backgroundColor: Color.ink01,
  },
  tabnamesChild: {
    borderColor: "#e8eef3",
    borderRightWidth: 1,
    width: 1,
    height: 21,
    marginLeft: 55,
    borderStyle: "solid",
  },
  indicator1: {
    backgroundColor: Color.ink01Black,
    display: "none",
  },
  tab1: {
    marginLeft: 55,
  },
  tabnames: {
    flexDirection: "row",
  },
  underline: {
    width: 233,
  },
  transactions1: {
    justifyContent: "center",
    alignItems: "center",
  },
  accounts: {
    borderWidth: 1,
    paddingTop: Padding.p_3xs,
    borderColor: "#f4f7fa",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_3xs,
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.ink07,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.ink03,
    width: 134,
    height: 5,
    opacity: 0.4,
    position: "absolute",
  },
  homeBar: {
    height: 34,
    marginTop: -15,
    width: 375,
  },
  transactions: {
    flex: 1,
    width: "100%",
    height: 812,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.ink07,
  },
});

export default Transactions;
