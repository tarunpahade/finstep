import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile7 = memo(({ style }) => {
  return (
    <View style={[styles.profile7, style, styles.profile7FlexBox]}>
      <View style={styles.profile7FlexBox}>
        <View style={styles.icon}>
          <Image
            style={styles.currencyCrushAnalytics}
            contentFit="cover"
            source={require("../assets/currency-crush-analytics.png")}
          />
        </View>
        <Text style={styles.deborahSanchez}>Deborah Sanchez</Text>
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
  profile7FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  currencyCrushAnalytics: {
    position: "absolute",
    top: 9,
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
  deborahSanchez: {
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
  profile7: {
    width: 286,
    justifyContent: "space-between",
  },
});

export default Profile7;
