import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile4 = memo(({ style }) => {
  return (
    <View style={[styles.profile4, style, styles.profile4FlexBox]}>
      <View style={styles.profile4FlexBox}>
        <View style={styles.icon}>
          <Image
            style={styles.currencyCrushStatistics}
            contentFit="cover"
            source={require("../assets/currency-crush-statistics.png")}
          />
        </View>
        <Text style={styles.emilyIbarra}>Emily Ibarra</Text>
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
  profile4FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  currencyCrushStatistics: {
    position: "absolute",
    top: 4,
    left: 7,
    width: 41,
    height: 41,
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
  emilyIbarra: {
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
  profile4: {
    width: 286,
    justifyContent: "space-between",
  },
});

export default Profile4;
