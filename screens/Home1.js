import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Home1 = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.header, styles.balanceFlexBox]}>
        <View style={styles.profileWelcome}>
          <View style={styles.profilePic}>
            <Image
              style={[styles.currencyCrushGrowth, styles.headerPosition]}
              contentFit="cover"
              source={require("../assets/currency-crush-growth1.png")}
            />
          </View>
          <View style={styles.titletext}>
            <Text style={[styles.hiLou, styles.hiLouClr]}>Hi, Lou</Text>
            <Text style={[styles.welcomeBack, styles.amountTypo]}>
              Welcome back!
            </Text>
          </View>
        </View>
        <Image
          style={styles.moreOverflowMenuHorizIcon}
          contentFit="cover"
          source={require("../assets/moreoverflowmenuhoriz.png")}
        />
      </View>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentScrollViewContent}
      >
        <View style={[styles.balance, styles.balanceFlexBox]}>
          <Image
            style={styles.currencyCrushCoins}
            contentFit="cover"
            source={require("../assets/currency-crush-coins.png")}
          />
          <View style={styles.options}>
            <View style={[styles.balance1, styles.balanceFlexBox]}>
              <View>
                <Text style={[styles.yourBalance, styles.amountTypo]}>
                  Your balance
                </Text>
                <Text style={[styles.hiLou, styles.hiLouClr]}>$7,065.00</Text>
              </View>
              <Image
                style={[styles.chevronArrowLeftIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/chevronarrowleft.png")}
              />
            </View>
            <View style={[styles.wallet, styles.walletFlexBox]}>
              <View style={styles.icontext}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/wallet.png")}
                />
                <Text style={[styles.wallet1, styles.valueTypo]}>Wallet</Text>
              </View>
              <Image
                style={[styles.chevronArrowLeftIcon1, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/chevronarrowleft.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.optionsWrapper}>
          <View style={[styles.options1, styles.headerPosition]}>
            <View style={[styles.principalButtons, styles.principalFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.title, styles.titleTypo]}>Send</Text>
            </View>
            <View style={[styles.principalButtons1, styles.principalFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/icon1.png")}
              />
              <Text style={[styles.title1, styles.titleTypo]}>Request</Text>
            </View>
            <View style={[styles.principalButtons2, styles.principalFlexBox]}>
              <View style={styles.iconLayout}>
                <Image
                  style={[styles.backgroundIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/background.png")}
                />
                <View style={styles.options2}>
                  <View style={[styles.optionsChild, styles.optionsBg]} />
                  <View
                    style={[styles.optionsItem, styles.optionsItemPosition]}
                  />
                  <View
                    style={[styles.optionsInner, styles.optionsInnerPosition]}
                  />
                  <View
                    style={[styles.rectangleView, styles.optionsInnerPosition]}
                  />
                </View>
              </View>
              <Text style={[styles.title, styles.titleTypo]}>More</Text>
            </View>
          </View>
        </View>
        <View style={styles.yourLastActivity}>
          <View style={styles.title3}>
            <Text style={[styles.hiLou, styles.hiLouClr]}>
              Your last activity
            </Text>
            <View style={styles.tag}>
              <Text style={[styles.value, styles.valueFlexBox]}>Today</Text>
              <Image
                style={styles.rightIcon}
                contentFit="cover"
                source={require("../assets/right-icon.png")}
              />
            </View>
          </View>
          <View style={[styles.activity, styles.walletFlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/icon2.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>
                Shopping
              </Text>
            </View>
            <Text style={[styles.amount, styles.amountTypo]}>$120,00</Text>
          </View>
          <View style={[styles.activity, styles.walletFlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/icon3.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>Food</Text>
            </View>
            <Text style={[styles.amount, styles.amountTypo]}>$55,00</Text>
          </View>
          <View style={[styles.activity, styles.walletFlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/icon4.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>Taxi</Text>
            </View>
            <Text style={[styles.amount, styles.amountTypo]}>$12,00</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.headerPosition]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.optionsBg]} />
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
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.tabBars, styles.tabsSpaceBlock]}>
        <View style={[styles.tabs, styles.tabsSpaceBlock]}>
          <View style={styles.tabs1}>
            <View style={styles.tab1}>
              <View style={styles.iconFlexBox}>
                <Image
                  style={[styles.homeIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/home.png")}
                />
              </View>
              <Text style={[styles.tab, styles.tabLayout]}>Home</Text>
            </View>
          </View>
          <View style={styles.tab1}>
            <View style={[styles.favouritesIcon, styles.iconFlexBox]}>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/activity.png")}
              />
            </View>
            <Text style={[styles.tab2, styles.tabTypo]}>Activity</Text>
          </View>
          <View style={styles.tab1}>
            <View style={styles.statisticsWrapper}>
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/statistics.png")}
              />
            </View>
            <Text style={styles.tabTypo}>Statistics</Text>
          </View>
        </View>
        <View style={styles.homeBar}>
          <View style={[styles.homeIndicator, styles.capIconPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  balanceFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  hiLouClr: {
    color: Color.ink01Black,
    textAlign: "center",
  },
  amountTypo: {
    fontFamily: FontFamily.paragraphLarge,
    color: Color.ink01Black,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  walletFlexBox: {
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  valueTypo: {
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.paragraphLarge,
  },
  principalFlexBox: {
    padding: 17,
    borderRadius: Border.br_mini,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTypo: {
    marginTop: 17.09,
    fontFamily: FontFamily.openSans,
    fontSize: 15,
    height: 21,
    fontWeight: "700",
    lineHeight: 21,
    textAlign: "center",
    color: Color.ink01Black,
    letterSpacing: 0,
  },
  iconLayout: {
    height: 61,
    width: 61,
  },
  optionsBg: {
    backgroundColor: Color.ink01,
    position: "absolute",
  },
  optionsItemPosition: {
    bottom: "8.33%",
    top: "53.31%",
  },
  optionsInnerPosition: {
    left: "53.31%",
    right: "8.33%",
    backgroundColor: Color.ink01,
    borderRadius: 3,
    width: "38.36%",
    height: "38.36%",
    position: "absolute",
  },
  valueFlexBox: {
    textAlign: "left",
    lineHeight: 24,
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  tabTypo: {
    color: Color.ink03,
    fontFamily: FontFamily.paragraphMedium,
    lineHeight: 21,
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "center",
  },
  currencyCrushGrowth: {
    width: 254,
    height: 254,
    left: 0,
  },
  profilePic: {
    borderRadius: Border.br_21xl,
    borderColor: "#cdd9e3",
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.ink07,
  },
  hiLou: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontFamily: FontFamily.headingH4,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  welcomeBack: {
    lineHeight: 24,
    fontSize: FontSize.paragraphLarge_size,
    fontFamily: FontFamily.paragraphLarge,
    letterSpacing: 0,
    textAlign: "center",
  },
  titletext: {
    marginLeft: 15,
  },
  profileWelcome: {
    flexDirection: "row",
  },
  moreOverflowMenuHorizIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  header: {
    left: 1,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.accentGreen,
    width: 375,
    height: 137,
    padding: Padding.p_xl,
    justifyContent: "space-between",
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    alignItems: "flex-end",
    top: 0,
    position: "absolute",
  },
  currencyCrushCoins: {
    width: 132,
    height: 131,
  },
  yourBalance: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 16,
    textAlign: "center",
  },
  chevronArrowLeftIcon: {
    marginLeft: 10,
    overflow: "hidden",
  },
  balance1: {
    justifyContent: "center",
  },
  wallet1: {
    marginLeft: 10,
    lineHeight: 24,
    textAlign: "center",
    color: Color.ink01Black,
  },
  icontext: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  chevronArrowLeftIcon1: {
    marginLeft: 44,
    overflow: "hidden",
  },
  wallet: {
    width: 147,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginTop: 15,
    alignItems: "center",
  },
  options: {
    justifyContent: "flex-end",
    marginLeft: 18,
  },
  balance: {
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_2xl,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    alignItems: "flex-end",
    backgroundColor: Color.ink07,
  },
  title: {
    width: 35,
  },
  principalButtons: {
    backgroundColor: Color.accentPurple,
  },
  title1: {
    width: 55,
  },
  principalButtons1: {
    backgroundColor: Color.accentBlue,
    marginLeft: 15,
  },
  backgroundIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  optionsChild: {
    borderRadius: 3,
    left: "8.33%",
    right: "53.31%",
    width: "38.36%",
    height: "38.36%",
    backgroundColor: Color.ink01,
    bottom: "53.31%",
    top: "8.33%",
  },
  optionsItem: {
    backgroundColor: Color.ink01,
    position: "absolute",
    borderRadius: 3,
    left: "8.33%",
    right: "53.31%",
    width: "38.36%",
    height: "38.36%",
  },
  optionsInner: {
    bottom: "53.31%",
    top: "8.33%",
  },
  rectangleView: {
    bottom: "8.33%",
    top: "53.31%",
  },
  options2: {
    top: 15,
    left: 15,
    width: 31,
    height: 31,
    position: "absolute",
  },
  principalButtons2: {
    backgroundColor: Color.accentRed,
    marginLeft: 15,
  },
  options1: {
    left: 0,
    flexDirection: "row",
  },
  optionsWrapper: {
    height: 132,
    marginTop: 28,
    width: 315,
  },
  value: {
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.paragraphLarge,
  },
  rightIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    overflow: "hidden",
  },
  tag: {
    borderRadius: Border.br_9xs,
    padding: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  title3: {
    height: 32,
    width: 315,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon3: {
    width: 37,
    height: 37,
  },
  shopping: {
    fontFamily: FontFamily.paragraphLargeBold,
    marginLeft: 13,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.paragraphLarge_size,
    letterSpacing: 0,
  },
  icontext1: {
    alignItems: "center",
    flexDirection: "row",
  },
  amount: {
    textAlign: "right",
    lineHeight: 24,
    fontSize: FontSize.paragraphLarge_size,
    fontFamily: FontFamily.paragraphLarge,
    letterSpacing: 0,
  },
  activity: {
    backgroundColor: Color.ink06,
    padding: Padding.p_3xs,
    marginTop: 10,
    width: 315,
    alignItems: "center",
    justifyContent: "space-between",
  },
  yourLastActivity: {
    marginTop: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    top: 165,
    left: 26,
    position: "absolute",
    flex: 1,
  },
  border: {
    right: 2,
    borderColor: "#191d21",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    borderRadius: 3,
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
    width: 18,
    height: 7,
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
    color: Color.ink01,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    width: 54,
  },
  statusBar: {
    height: "5.42%",
    top: "0%",
    bottom: "94.58%",
    display: "none",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  homeIcon: {
    overflow: "hidden",
  },
  tab: {
    fontFamily: FontFamily.paragraphMedium1,
    color: Color.utilityActive,
    lineHeight: 21,
    height: 18,
    width: 60,
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "center",
  },
  tab1: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabs1: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
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
  },
  tabBars: {
    height: "11.82%",
    top: "91.5%",
    bottom: "-3.33%",
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: Padding.p_base,
    left: "0%",
    right: "0%",
    paddingTop: Padding.p_9xs,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.ink07,
  },
  home: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.ink07,
  },
});

export default Home1;
