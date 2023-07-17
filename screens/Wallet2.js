import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, FontSize, Border, Padding, Color } from "../GlobalStyles";

const Wallet2 = () => {
  return (
    <View style={styles.wallet2}>
      <View style={[styles.walletUi, styles.tab1FlexBox]}>
        <View style={[styles.tabTitle, styles.tabTitleFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/arrowrightnext.png")}
          />
          <Text style={[styles.yourWallet, styles.amountTypo]}>
            Your wallet
          </Text>
          <View style={styles.profileAndSettings}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/moreoverflowmenuhoriz.png")}
            />
            <Image
              style={[styles.accountUserIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/accountuser.png")}
            />
          </View>
        </View>
        <View style={[styles.cards, styles.cardsShadowBox]}>
          <View style={styles.creditCard}>
            <View style={[styles.balancebrand, styles.informationPosition]}>
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
              <Text style={styles.creditCardNumber}>**** **** **** 2230</Text>
              <View style={[styles.namedate, styles.tabTitleFlexBox]}>
                <Text style={[styles.currentBalance, styles.expDateTypo]}>
                  Louis Scottson
                </Text>
                <Text style={styles.date}>
                  <Text style={styles.expDateTypo}>{`Exp. Date `}</Text>
                  <Text style={styles.text}>09/26</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.creditCard1, styles.creditCardLayout]}>
            <View style={[styles.balancebrand, styles.informationPosition]}>
              <View>
                <Text style={[styles.currentBalance, styles.expDateTypo]}>
                  Current Balance
                </Text>
                <Text style={[styles.amount, styles.amountTypo]}>
                  $7,065.00
                </Text>
              </View>
              <Image
                style={styles.logoIcon1}
                contentFit="cover"
                source={require("../assets/logo1.png")}
              />
            </View>
            <View style={[styles.information, styles.informationPosition]}>
              <Text style={styles.creditCardNumber}>**** **** **** 7281</Text>
              <View style={[styles.namedate, styles.tabTitleFlexBox]}>
                <Text style={[styles.currentBalance, styles.expDateTypo]}>
                  Louis Scottson
                </Text>
                <Text style={styles.date}>
                  <Text style={styles.expDateTypo}>{`Exp. Date `}</Text>
                  <Text style={styles.text}>07/26</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.creditCard2, styles.creditCardLayout]}>
            <View style={[styles.balancebrand, styles.informationPosition]}>
              <View>
                <Text style={[styles.currentBalance, styles.expDateTypo]}>
                  Current Balance
                </Text>
                <Text style={[styles.amount, styles.amountTypo]}>$935.33</Text>
              </View>
              <Image
                style={styles.logoIcon2}
                contentFit="cover"
                source={require("../assets/logo.png")}
              />
            </View>
            <View style={[styles.information, styles.informationPosition]}>
              <Text style={styles.creditCardNumber}>**** **** **** 4136</Text>
              <View style={[styles.namedate, styles.tabTitleFlexBox]}>
                <Text style={[styles.currentBalance, styles.expDateTypo]}>
                  Louis Scottson
                </Text>
                <Text style={styles.date}>
                  <Text style={styles.expDateTypo}>{`Exp. Date `}</Text>
                  <Text style={styles.text}>08/25</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.statusBar, styles.tabBarsPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.tabFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.tabBars, styles.tabsSpaceBlock]}>
        <View style={[styles.tabs, styles.tabsSpaceBlock]}>
          <View style={[styles.tabs1, styles.tab1FlexBox]}>
            <View style={styles.tab1FlexBox}>
              <View style={styles.iconFlexBox}>
                <Image
                  style={styles.homeIcon}
                  contentFit="cover"
                  source={require("../assets/home.png")}
                />
              </View>
              <Text style={[styles.tab, styles.tabLayout]}>Home</Text>
            </View>
          </View>
          <View style={styles.tab1FlexBox}>
            <View style={[styles.favouritesIcon, styles.iconFlexBox]}>
              <Image
                style={styles.activityIcon}
                contentFit="cover"
                source={require("../assets/activity1.png")}
              />
            </View>
            <Text style={[styles.tab2, styles.tabTypo]}>Activity</Text>
          </View>
          <View style={styles.tab1FlexBox}>
            <View style={[styles.statisticsWrapper, styles.tab1FlexBox]}>
              <Image
                style={styles.activityIcon}
                contentFit="cover"
                source={require("../assets/statistics1.png")}
              />
            </View>
            <Text style={styles.tabTypo}>Statistics</Text>
          </View>
        </View>
        <View style={styles.homeBar}>
          <View style={[styles.homeIndicator, styles.capIconPosition]} />
        </View>
      </View>
      <Image
        style={styles.floatingActionButton}
        contentFit="cover"
        source={require("../assets/floating-action-button.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tab1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabTitleFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  amountTypo: {
    fontFamily: FontFamily.headingH4,
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.headingH5_size,
  },
  iconLayout: {
    height: 26,
    width: 26,
    overflow: "hidden",
  },
  cardsShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  informationPosition: {
    left: 20,
    position: "absolute",
  },
  expDateTypo: {
    fontFamily: FontFamily.paragraphLarge,
    lineHeight: 16,
    fontSize: FontSize.paragraphSmall_size,
  },
  creditCardLayout: {
    marginTop: 15,
    height: 174,
    width: 325,
    borderRadius: Border.br_xl,
  },
  tabBarsPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  capIconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  tabFlexBox: {
    letterSpacing: -1,
    textAlign: "center",
  },
  tabsSpaceBlock: {
    paddingTop: Padding.p_9xs,
    display: "none",
    justifyContent: "space-between",
  },
  tabLayout: {
    height: 18,
    width: 60,
  },
  iconFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabTypo: {
    color: Color.ink03,
    fontFamily: FontFamily.paragraphMedium,
    lineHeight: 21,
    letterSpacing: -1,
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "center",
  },
  yourWallet: {
    color: Color.ink01Black,
    textAlign: "center",
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
    width: 375,
    height: 102,
    padding: Padding.p_xl,
    alignItems: "flex-end",
    backgroundColor: Color.ink07,
  },
  currentBalance: {
    color: Color.ink01,
    textAlign: "center",
  },
  amount: {
    color: Color.ink01,
    marginTop: 10,
    textAlign: "center",
  },
  logoIcon: {
    width: 55,
    height: 24,
  },
  balancebrand: {
    top: 25,
    width: 282,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  creditCardNumber: {
    letterSpacing: 2,
    fontWeight: "500",
    fontFamily: FontFamily.paragraphCreditCardNumbers,
    lineHeight: 24,
    color: Color.ink01,
    textAlign: "center",
    fontSize: FontSize.headingH5_size,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.paragraphLargeBold,
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 24,
  },
  date: {
    color: Color.ink01,
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
    height: 24,
  },
  creditCard1: {
    backgroundColor: Color.accentOrange,
  },
  logoIcon2: {
    height: 39,
    width: 39,
  },
  creditCard2: {
    backgroundColor: Color.accentPurple,
  },
  cards: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 16,
    elevation: 16,
    marginTop: 10,
  },
  walletUi: {
    left: 0,
    justifyContent: "center",
    top: 0,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#191d21",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
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
    height: 11,
    width: 24,
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
    width: 54,
    position: "absolute",
    color: Color.ink01,
    fontWeight: "600",
    letterSpacing: -1,
    left: 0,
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
  },
  statusBar: {
    height: "5.42%",
    top: "0%",
    bottom: "94.58%",
    display: "none",
  },
  homeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  tab: {
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium1,
    color: Color.utilityActive,
    letterSpacing: -1,
    textAlign: "center",
    fontSize: FontSize.paragraphMedium_size,
  },
  tabs1: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
  },
  activityIcon: {
    width: 24,
    height: 24,
  },
  favouritesIcon: {
    alignSelf: "stretch",
  },
  tab2: {
    height: 18,
    width: 60,
  },
  statisticsWrapper: {
    height: 40,
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  tabs: {
    height: 66,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.ink02,
    width: 134,
    height: 5,
  },
  homeBar: {
    height: 34,
    alignSelf: "stretch",
    display: "none",
  },
  tabBars: {
    height: "11.82%",
    top: "88.18%",
    bottom: "0%",
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: Padding.p_base,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.ink07,
  },
  floatingActionButton: {
    top: 715,
    left: 290,
    width: 72,
    height: 72,
    position: "absolute",
  },
  wallet2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.ink07,
  },
});

export default Wallet2;
