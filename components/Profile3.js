import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile3 = memo(({ style }) => {
  return (
    <View style={[styles.profile3, style, styles.profile3FlexBox]}>
      <View style={styles.profile3FlexBox}>
        <View style={styles.icon}>
          <Image
            style={styles.currencyCrushLock1}
            contentFit="cover"
            source={require("../assets/currency-crush-lock-1.png")}
          />
        </View>
        <Text style={styles.adrienneHuffman}>Adrienne Huffman</Text>
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
  profile3FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  currencyCrushLock1: {
    position: "absolute",
    top: 6,
    left: 6,
    width: 38,
    height: 38,
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
  adrienneHuffman: {
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
  profile3: {
    width: 286,
    justifyContent: "space-between",
  },
});

export default Profile3;
