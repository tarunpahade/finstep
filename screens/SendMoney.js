import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const SendMoney = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sendMoney, styles.frameLayout]}>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.inputBorder]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeClr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.sendMoneyUi}>
          <View style={styles.tabTitle}>
            <View style={styles.arrowRightNext}>
              <Pressable
                style={styles.vector}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </Pressable>
            </View>
            <Text style={[styles.sendMoney1, styles.valueClr1]}>
              Send Money
            </Text>
          </View>
          <View style={[styles.creditCards, styles.rightFlexBox]}>
            <View style={styles.cards}>
              <View style={styles.creditCard}>
                <View style={[styles.balancebrand, styles.namedateFlexBox]}>
                  <View>
                    <Text style={[styles.currentBalance, styles.expDateTypo]}>
                      Current Balance
                    </Text>
                    <Text style={[styles.amount, styles.amountTypo]}>
                      $3,360.00
                    </Text>
                  </View>
                  <Image
                    style={styles.logoIcon}
                    contentFit="cover"
                    source={require("../assets/logo2.png")}
                  />
                </View>
                <View style={[styles.information, styles.informationPosition]}>
                  <Text style={styles.creditCardNumber}>
                    **** **** **** 2230
                  </Text>
                  <View style={[styles.namedate, styles.namedateFlexBox]}>
                    <Text style={[styles.currentBalance, styles.expDateTypo]}>
                      Louis Scottson
                    </Text>
                    <Text style={[styles.date, styles.timeClr]}>
                      <Text
                        style={[styles.expDate, styles.expDateTypo]}
                      >{`Exp. Date `}</Text>
                      <Text style={[styles.text, styles.textTypo]}>09/26</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                style={styles.creditCardLayout}
                contentFit="cover"
                source={require("../assets/credit-card.png")}
              />
              <View style={[styles.creditCard1, styles.creditCardLayout]}>
                <View style={[styles.balancebrand, styles.namedateFlexBox]}>
                  <View>
                    <Text style={[styles.currentBalance, styles.expDateTypo]}>
                      Current Balance
                    </Text>
                    <Text style={[styles.amount, styles.amountTypo]}>
                      $935.33
                    </Text>
                  </View>
                  <Image
                    style={styles.logoIcon1}
                    contentFit="cover"
                    source={require("../assets/logo.png")}
                  />
                </View>
                <View style={[styles.information, styles.informationPosition]}>
                  <Text style={styles.creditCardNumber}>
                    **** **** **** 4136
                  </Text>
                  <View style={[styles.namedate, styles.namedateFlexBox]}>
                    <Text style={[styles.currentBalance, styles.expDateTypo]}>
                      Louis Scottson
                    </Text>
                    <Text style={[styles.date, styles.timeClr]}>
                      <Text
                        style={[styles.expDate, styles.expDateTypo]}
                      >{`Exp. Date `}</Text>
                      <Text style={[styles.text, styles.textTypo]}>08/25</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.pagination}>
              <Image
                style={styles.icon1}
                contentFit="cover"
                source={require("../assets/11.png")}
              />
              <View style={[styles.current, styles.icon2SpaceBlock]} />
              <Image
                style={[styles.icon2, styles.icon2SpaceBlock]}
                contentFit="cover"
                source={require("../assets/11.png")}
              />
            </View>
          </View>
          <View style={[styles.creditCards, styles.rightFlexBox]}>
            <View style={styles.rightFlexBox}>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/profile-pic.png")}
              />
              <Text style={[styles.melanieWard, styles.valueClr1]}>
                Melanie Ward
              </Text>
            </View>
            <TextInput
              style={[styles.amount2, styles.amountTypo]}
              placeholder="₹0"
              keyboardType="number-pad"
              placeholderTextColor="#000"
            />
            <View style={[styles.input, styles.inputBorder]}>
              <TouchableOpacity
                style={[styles.left, styles.leftFlexBox]}
                activeOpacity={0.2}
                onPress={() => {}}
              >
                <Image
                  style={[styles.leftIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/left-icon1.png")}
                />
                <Text style={[styles.secondaryValue, styles.valueClr]}>
                  Value
                </Text>
                <Text style={[styles.value, styles.valueClr1]}>Reason</Text>
              </TouchableOpacity>
              <View style={[styles.right, styles.rightFlexBox]}>
                <Text style={[styles.value1, styles.valueClr]}>Value</Text>
                <Image
                  style={[styles.rightIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/right-icon3.png")}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.leftFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("MoneySent")}
          >
            <Image
              style={[styles.leftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon-left1.png")}
            />
            <Text style={[styles.label, styles.textTypo]}>Continue</Text>
            <Image
              style={[styles.iconRight, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon-right1.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.homeBar}>
          <View style={[styles.homeIndicator, styles.capIconPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 812,
    overflow: "hidden",
  },
  inputBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  capIconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  timeClr: {
    color: Color.ink01,
    textAlign: "center",
  },
  framePosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  valueClr1: {
    color: Color.ink01Black,
    textAlign: "center",
  },
  rightFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  namedateFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  expDateTypo: {
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
    fontFamily: FontFamily.paragraphLarge,
  },
  amountTypo: {
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
  },
  informationPosition: {
    left: 20,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.paragraphLargeBold,
    fontWeight: "700",
    lineHeight: 24,
  },
  creditCardLayout: {
    marginLeft: 15,
    height: 174,
    width: 325,
    borderRadius: Border.br_xl,
  },
  icon2SpaceBlock: {
    marginLeft: 16,
    height: 8,
  },
  leftFlexBox: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  valueClr: {
    color: Color.ink021,
    display: "none",
    fontSize: FontSize.paragraphMedium_size,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#191d21",
    width: 22,
    opacity: 0.35,
    top: 0,
    position: "absolute",
    height: 11,
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
    left: 0,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    fontWeight: "600",
    color: Color.ink01,
    letterSpacing: 0,
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  statusBar: {
    height: "5.42%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "-83.33%",
    top: "16.66%",
    right: "116.67%",
    bottom: "16.67%",
    width: "66.67%",
    height: "66.67%",
    position: "absolute",
  },
  arrowRightNext: {
    width: 26,
    height: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  sendMoney1: {
    marginLeft: 80,
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    lineHeight: 23,
    fontSize: FontSize.headingH5_size,
    letterSpacing: 0,
  },
  tabTitle: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 102,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xl,
    alignItems: "flex-end",
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.ink07,
  },
  currentBalance: {
    fontFamily: FontFamily.paragraphLarge,
    textAlign: "center",
    color: Color.ink01,
  },
  amount: {
    marginTop: 10,
    lineHeight: 23,
    fontFamily: FontFamily.headingH4,
    fontSize: FontSize.headingH5_size,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.ink01,
  },
  logoIcon: {
    width: 55,
    height: 24,
  },
  balancebrand: {
    top: 25,
    width: 282,
    left: 20,
    position: "absolute",
  },
  creditCardNumber: {
    letterSpacing: 2,
    fontWeight: "500",
    fontFamily: FontFamily.paragraphCreditCardNumbers,
    lineHeight: 24,
    fontSize: FontSize.headingH5_size,
    textAlign: "center",
    color: Color.ink01,
  },
  expDate: {
    fontFamily: FontFamily.paragraphLarge,
  },
  text: {
    fontSize: FontSize.paragraphMedium_size,
  },
  date: {
    textAlign: "center",
  },
  namedate: {
    width: 281,
    marginTop: 10,
    alignItems: "center",
  },
  information: {
    top: 99,
  },
  creditCard: {
    backgroundColor: Color.accentBlue,
    height: 174,
    width: 325,
    borderRadius: Border.br_xl,
  },
  logoIcon1: {
    width: 39,
    height: 39,
  },
  creditCard1: {
    backgroundColor: Color.accentPurple,
  },
  cards: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    flexDirection: "row",
  },
  icon1: {
    height: 8,
    width: 8,
  },
  current: {
    backgroundColor: Color.utilityDarkBackground,
    width: 16,
    marginLeft: 16,
    borderRadius: Border.br_9xs,
  },
  icon2: {
    marginLeft: 16,
    width: 8,
  },
  pagination: {
    marginTop: 20,
    flexDirection: "row",
  },
  creditCards: {
    marginTop: 40,
  },
  melanieWard: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    marginTop: 18,
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    letterSpacing: 0,
  },
  amount2: {
    fontSize: 40,
    marginTop: 22,
  },
  leftIcon: {
    display: "none",
  },
  secondaryValue: {
    fontFamily: FontFamily.paragraphMedium2,
    textAlign: "left",
    marginLeft: 8,
    lineHeight: 24,
  },
  value: {
    marginLeft: 8,
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphLarge,
    flex: 1,
  },
  left: {
    paddingHorizontal: 0,
    flex: 1,
  },
  value1: {
    lineHeight: 20,
    fontFamily: FontFamily.bodyBase,
    textAlign: "right",
    letterSpacing: 0,
  },
  rightIcon: {
    marginLeft: 8,
  },
  right: {
    marginLeft: 8,
    display: "none",
    flexDirection: "row",
  },
  input: {
    borderColor: "#acb8c2",
    width: 309,
    height: 53,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    marginTop: 22,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.ink07,
  },
  label: {
    fontSize: FontSize.paragraphLarge_size,
    color: Color.ink07,
    marginLeft: 10,
    textAlign: "center",
    letterSpacing: 0,
  },
  iconRight: {
    marginLeft: 10,
    display: "none",
  },
  button: {
    backgroundColor: Color.utilityActive,
    width: 305,
    height: 54,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_9xs,
    marginTop: 40,
  },
  sendMoneyUi: {
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
    marginTop: -10,
    width: 375,
  },
  frame: {
    left: -316,
    width: 1005,
    alignItems: "center",
    overflow: "hidden",
    height: 812,
  },
  sendMoney: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.ink07,
  },
});

export default SendMoney;
