import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile6 = memo(({ style }) => {
  return (
    <View style={[styles.profile6, style, styles.profile6FlexBox]}>
      <View style={styles.profile6FlexBox}>
        <View style={styles.icon}>
          <Image
            style={styles.currencyCrushGrowth}
            contentFit="cover"
            source={require("../assets/currency-crush-growth.png")}
          />
        </View>
        <Text style={styles.danielFerrell}>Daniel Ferrell</Text>
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
  profile6FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  currencyCrushGrowth: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 254,
    height: 254,
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
  danielFerrell: {
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
  profile6: {
    width: 286,
    justifyContent: "space-between",
  },
});

export default Profile6;
