import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image,Color, FontFamily, FontSize, Border, Padding } from "../../styles/global.styles";

const HomeNew = () => {
    console.log('hii');
  return (
    <View style={styles.home}>
      <View style={[styles.header, styles.headerShadowBox]}>
        <View style={styles.profileWelcome}>
          <View style={[styles.profilePic, styles.tabBarsBg]}>
            <Image
              style={[
                styles.currencyCrushGrowth,
                styles.backgroundIconPosition,
              ]}
              contentFit="cover"
              source={require("../../new-assets/assets/currency-crush-growth.png")}
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
          source={require("../../new-assets/assets/moreoverflowmenuhoriz.png")}
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
            source={require("../../new-assets/assets/currency-crush-coins.png")}
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
                source={require("../../new-assets/assets/chevronarrowleft.png")}
              />
            </View>
            <View style={styles.wallet}>
              <View style={styles.icontext}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../../new-assets/assets/wallet.png")}
                />
                <Text style={[styles.wallet1, styles.valueTypo]}>Wallet</Text>
              </View>
              <Image
                style={[styles.chevronArrowLeftIcon1, styles.iconLayout1]}
                contentFit="cover"
                source={require("../../new-assets/assets/chevronarrowleft.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.options1}>
          <View style={[styles.principalButtons, styles.principalFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../new-assets/assets/icon.png")}
            />
            <Text style={[styles.title, styles.titleTypo]}>Send</Text>
          </View>
          <View style={[styles.principalButtons1, styles.principalFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../new-assets/assets/icon1.png")}
            />
            <Text style={[styles.title1, styles.titleTypo]}>Request</Text>
          </View>
          <View style={[styles.principalButtons2, styles.principalFlexBox]}>
            <View style={styles.iconLayout}>
              <Image
                style={[styles.backgroundIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../../new-assets/assets/background.png")}
              />
              <View style={styles.options2}>
                <View style={[styles.optionsChild, styles.optionsLayout]} />
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
        <View style={styles.yourLastActivity}>
          <View style={[styles.title3, styles.title3FlexBox]}>
            <Text style={[styles.hiLou, styles.hiLouClr]}>
              Your last activity
            </Text>
            <View style={styles.tag}>
              <Text style={[styles.value, styles.valueFlexBox]}>Today</Text>
              <Image
                style={styles.rightIcon}
                contentFit="cover"
                source={require("../../new-assets/assets/right-icon.png")}
              />
            </View>
          </View>
          <View style={[styles.activity, styles.title3FlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../../new-assets/assets/icon2.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>
                Shopping
              </Text>
            </View>
            <Text style={[styles.amount, styles.amountTypo]}>$120,00</Text>
          </View>
          <View style={[styles.activity, styles.title3FlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../../new-assets/assets/icon3.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>Food</Text>
            </View>
            <Text style={[styles.amount, styles.amountTypo]}>$55,00</Text>
          </View>
          <View style={[styles.activity, styles.title3FlexBox]}>
            <View style={styles.icontext1}>
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../../new-assets/assets/icon4.png")}
              />
              <Text style={[styles.shopping, styles.valueFlexBox]}>Taxi</Text>
            </View>
            <Text style={[styles.amount, styles.amountTypo]}>$12,00</Text>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.statusBar, styles.tabBarsPosition]} />
      <View style={[styles.tabBars, styles.tabBarsPosition]}>
        <View style={styles.homeBar}>
          <View style={styles.homeIndicator} />
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
  headerShadowBox: {
    justifyContent: "space-between",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  tabBarsBg: {
    backgroundColor: Color.ink07,
    overflow: "hidden",
  },
  backgroundIconPosition: {
    left: 0,
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
  balanceFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 24,
    width: 24,
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
    height: 21,
    fontFamily: FontFamily.proximaNovaBold,
    lineHeight: 21,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    color: Color.ink01Black,
    letterSpacing: 0,
  },
  iconLayout: {
    height: 61,
    width: 61,
  },
  optionsLayout: {
    backgroundColor: Color.gray,
    borderRadius: 3,
    left: "8.33%",
    right: "53.31%",
    width: "38.36%",
    height: "38.36%",
    position: "absolute",
  },
  optionsItemPosition: {
    bottom: "8.33%",
    top: "53.31%",
  },
  optionsInnerPosition: {
    left: "53.31%",
    right: "8.33%",
    backgroundColor: Color.gray,
    borderRadius: 3,
    width: "38.36%",
    height: "38.36%",
    position: "absolute",
  },
  title3FlexBox: {
    width: 315,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  valueFlexBox: {
    textAlign: "left",
    lineHeight: 24,
    color: Color.ink01Black,
  },
  tabBarsPosition: {
    display: "none",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  currencyCrushGrowth: {
    width: 254,
    height: 254,
  },
  profilePic: {
    borderRadius: 40,
    borderStyle: "solid",
    borderColor: "#cdd9e3",
    borderWidth: 0.5,
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  hiLou: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.ink01Black,
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
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.accentGreen,
    width: 375,
    height: 137,
    padding: 20,
    alignItems: "flex-end",
    flexDirection: "row",
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    justifyContent: "space-between",
    left: 0,
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
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  options: {
    justifyContent: "flex-end",
    marginLeft: 18,
  },
  balance: {
    borderRadius: Border.br_base,
    paddingHorizontal: 13,
    paddingVertical: 21,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    alignItems: "flex-end",
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.12)",
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
    bottom: "53.31%",
    top: "8.33%",
  },
  optionsItem: {
    backgroundColor: Color.gray,
    borderRadius: 3,
    left: "8.33%",
    right: "53.31%",
    width: "38.36%",
    height: "38.36%",
    position: "absolute",
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
    marginTop: 28,
    flexDirection: "row",
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
    borderRadius: 4,
    padding: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  title3: {
    height: 32,
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
    borderRadius: Border.br_3xs,
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
  statusBar: {
    height: "5.42%",
    top: "0%",
    bottom: "94.58%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: Color.ink02,
    width: 134,
    height: 5,
    opacity: 0.4,
    position: "absolute",
  },
  homeBar: {
    alignSelf: "stretch",
    height: 34,
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
    paddingHorizontal: 16,
    paddingTop: Padding.p_9xs,
    alignItems: "center",
    justifyContent: "space-between",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    overflow: "hidden",
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

export default HomeNew;