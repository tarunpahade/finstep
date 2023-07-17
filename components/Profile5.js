import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile5 = memo(({ style }) => {
  return (
    <View style={[styles.profile5, style, styles.profile5FlexBox]}>
      <View style={styles.profile5FlexBox}>
        <View style={styles.icon}>
          <Image
            style={styles.currencyCrushInvestment}
            contentFit="cover"
            source={require("../assets/currency-crush-investment.png")}
          />
        </View>
        <Text style={styles.evanHarper}>Evan Harper</Text>
      </View>
      <Image
        style={styles.moreOverflowMenuHorizIcon}
        contentFit="cover"
        source={require("../assets/moreoverflowmenuhoriz1.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  profile5FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  currencyCrushInvestment: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 142,
    height: 142,
  },
  icon: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.ink07,
    borderStyle: "solid",
    borderColor: "#cdd9e3",
    borderWidth: 0.5,
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  evanHarper: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphLarge,
    color: Color.ink01Black,
    textAlign: "left",
    marginLeft: 15,
  },
  moreOverflowMenuHorizIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  profile5: {
    width: 286,
    justifyContent: "space-between",
  },
});

export default Profile5;
