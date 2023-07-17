import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.mobile1Parent}>
      <Image
        style={styles.mobile1Icon}
        contentFit="cover"
        source={require("../assets/mobile-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mobile1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
  },
  mobile1Parent: {
    backgroundColor: Color.ink07,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default FrameScreen;
