import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const Wallet1 = () => {
  return (
    <View style={styles.wallet1}>
      <View style={styles.tabTitle}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/arrowrightnext.png")}
        />
        <Text style={[styles.yourWallet, styles.titleFlexBox]}>
          Your wallet
        </Text>
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
      <Text style={[styles.title, styles.titleFlexBox]}>
        Add your credit or debit cards to have access all the time
      </Text>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.tabBars}>
        <View style={styles.tabs}>
          <View style={[styles.tabs1, styles.tab1FlexBox]}>
            <View style={styles.tab1FlexBox}>
              <View style={styles.iconFlexBox}>
                <Image
                  style={[styles.homeIcon, styles.iconLayout]}
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
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/activity1.png")}
              />
            </View>
            <Text style={[styles.tab2, styles.tabTypo]}>Activity</Text>
          </View>
          <View style={styles.tab1FlexBox}>
            <View style={[styles.statisticsWrapper, styles.tab1FlexBox]}>
              <Image
                style={styles.iconLayout}
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
        style={styles.currencyCrushOnlineCharts}
        contentFit="cover"
        source={require("../assets/currency-crush-online-charts.png")}
      />
      <View style={styles.addCard}>
        <Image
          style={styles.floatingActionButton}
          contentFit="cover"
          source={require("../assets/floating-action-button1.png")}
        />
        <Image
          style={[styles.arrowIcon, styles.borderPosition]}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "center",
    color: Color.ink01Black,
    letterSpacing: 0,
  },
  iconLayout1: {
    height: 26,
    width: 26,
    overflow: "hidden",
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  capIconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  tab1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  tabLayout: {
    height: 18,
    width: 60,
  },
  iconFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tabTypo: {
    color: Color.ink03,
    fontFamily: FontFamily.paragraphMedium,
    lineHeight: 21,
    fontSize: FontSize.paragraphMedium_size,
    letterSpacing: -1,
    textAlign: "center",
  },
  yourWallet: {
    fontSize: FontSize.headingH5_size,
    lineHeight: 23,
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    color: Color.ink01Black,
    letterSpacing: 0,
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
    justifyContent: "space-between",
    left: 0,
    flexDirection: "row",
    top: 0,
    position: "absolute",
    backgroundColor: Color.ink07,
  },
  title: {
    width: "70.13%",
    top: "59.85%",
    left: "14.93%",
    fontSize: FontSize.paragraphLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphLarge,
    color: Color.ink01Black,
    letterSpacing: 0,
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
    color: Color.ink01,
    letterSpacing: -1,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    left: 0,
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
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium1,
    color: Color.utilityActive,
    fontSize: FontSize.paragraphMedium_size,
    height: 18,
    width: 60,
    letterSpacing: -1,
    textAlign: "center",
  },
  tabs1: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
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
    paddingTop: Padding.p_9xs,
    display: "none",
    justifyContent: "space-between",
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
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    paddingTop: Padding.p_9xs,
    display: "none",
    left: "0%",
    right: "0%",
    justifyContent: "space-between",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.ink07,
  },
  currencyCrushOnlineCharts: {
    top: 218,
    left: 47,
    width: 281,
    height: 240,
    position: "absolute",
  },
  floatingActionButton: {
    top: 101,
    left: 113,
    width: 72,
    height: 72,
    position: "absolute",
  },
  arrowIcon: {
    left: 19,
    width: 75,
    height: 113,
  },
  addCard: {
    top: 562,
    left: 170,
    width: 177,
    height: 161,
    position: "absolute",
  },
  wallet1: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.ink07,
  },
});

export default Wallet1;
