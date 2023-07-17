import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MoneySent = () => {
  return (
    <View style={[styles.moneySent, styles.moneyLayout]}>
      <View style={[styles.frame, styles.moneyLayout]}>
        <View style={[styles.moneySentUi, styles.moneyLayout]}>
          <View style={[styles.uiIcon, styles.uiIconSpaceBlock]}>
            <Image
              style={styles.removeCloseXIcon}
              contentFit="cover"
              source={require("../assets/removeclosex.png")}
            />
          </View>
          <Image
            style={styles.currencyCrushSpaklingBitcoi}
            contentFit="cover"
            source={require("../assets/currency-crush-spakling-bitcoin.png")}
          />
          <View style={styles.profileFlexBox}>
            <View style={styles.title}>
              <Text style={styles.moneySent1}>Money sent!</Text>
              <Text style={styles.weHaveJust}>
                We have just send your money to
              </Text>
            </View>
            <View style={[styles.profile, styles.profileFlexBox]}>
              <View style={styles.icon}>
                <Image
                  style={styles.currencyCrushAnalytics}
                  contentFit="cover"
                  source={require("../assets/currency-crush-analytics2.png")}
                />
              </View>
              <Text style={[styles.melanieWard, styles.timeClr]}>
                Melanie Ward
              </Text>
            </View>
          </View>
          <View style={styles.profileFlexBox}>
            <Text style={[styles.amount1, styles.amount1Typo]}>$40.00</Text>
            <Text style={[styles.inputReason, styles.dateTypo]}>
              for “Tuesday lunch”
            </Text>
          </View>
          <Text style={[styles.date, styles.dateTypo]}>
            Oct. 26, 2021 - 9:40 PM
          </Text>
        </View>
        <View style={styles.homeBar}>
          <View style={[styles.homeIndicator, styles.capIconPosition]} />
        </View>
      </View>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moneyLayout: {
    height: 812,
    alignItems: "center",
  },
  uiIconSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  profileFlexBox: {
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
  },
  timeClr: {
    color: Color.ink01,
    fontWeight: "600",
    letterSpacing: 0,
  },
  amount1Typo: {
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
  },
  dateTypo: {
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    textAlign: "center",
    color: Color.ink01Black,
  },
  capIconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  removeCloseXIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  uiIcon: {
    width: 353,
    alignItems: "center",
  },
  currencyCrushSpaklingBitcoi: {
    width: 283,
    height: 201,
    marginTop: 30,
  },
  moneySent1: {
    fontSize: FontSize.headingH3_size,
    letterSpacing: -1,
    lineHeight: 42,
    fontWeight: "800",
    fontFamily: FontFamily.headingH3,
    textAlign: "left",
    color: Color.ink01Black,
  },
  weHaveJust: {
    fontSize: FontSize.paragraphLarge_size,
    lineHeight: 24,
    marginTop: 10,
    textAlign: "center",
    fontFamily: FontFamily.paragraphLarge,
    letterSpacing: 0,
    color: Color.ink01Black,
  },
  title: {
    alignItems: "center",
  },
  currencyCrushAnalytics: {
    top: 9,
    width: 142,
    height: 142,
    left: 0,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_21xl,
    borderColor: "#cdd9e3",
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderStyle: "solid",
    backgroundColor: Color.greenSubtle,
    overflow: "hidden",
  },
  melanieWard: {
    marginLeft: 15,
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    color: Color.ink01,
    textAlign: "left",
  },
  profile: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.greenSubtle,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  amount1: {
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.ink01Black,
  },
  inputReason: {
    marginTop: 5,
    fontFamily: FontFamily.paragraphLarge,
  },
  date: {
    fontWeight: "700",
    fontFamily: FontFamily.paragraphLargeBold,
    marginTop: 30,
  },
  moneySentUi: {
    backgroundColor: Color.accentGreen,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    paddingTop: Padding.p_3xs,
    width: 375,
    alignItems: "center",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.ink03,
    width: 134,
    height: 5,
  },
  homeBar: {
    height: 34,
    display: "none",
    marginTop: -34,
    width: 375,
  },
  frame: {
    width: 375,
    alignItems: "center",
    overflow: "hidden",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderColor: "#191d21",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    position: "absolute",
    borderStyle: "solid",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.ink01,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 14,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppins,
    color: Color.ink01,
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    textAlign: "center",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
  },
  statusBar: {
    height: 44,
    opacity: 0,
    marginTop: 61,
    width: 375,
  },
  moneySent: {
    backgroundColor: Color.ink07,
    flex: 1,
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default MoneySent;
