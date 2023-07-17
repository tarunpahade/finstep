import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding1}>
      <StatusBar barStyle="default" />
      <View style={[styles.container, styles.homeBarSpaceBlock]}>
        <Text style={[styles.finstep, styles.textClr]}>Finstep</Text>
        <View style={[styles.content, styles.contentFlexBox]}>
          <Image
            style={styles.currencyCrushGraphs}
            contentFit="cover"
            source={require("../assets/currency-crush-graphs.png")}
          />
          <View style={styles.pagination}>
            <View style={styles.current} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/2.png")}
            />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/2.png")}
            />
          </View>
          <View style={[styles.onboarding, styles.contentFlexBox]}>
            <Text style={[styles.title, styles.textClr]}>Save money</Text>
            <Text style={[styles.text, styles.textClr]}>
              Have all your finances in one place!
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Onboarding2")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon-left.png")}
          />
          <Text style={styles.label}>Continue</Text>
          <Image
            style={[styles.iconRight, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-right.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.homeBar, styles.homeBarSpaceBlock]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeBarSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  textClr: {
    color: Color.ink01,
    letterSpacing: 0,
    textAlign: "center",
  },
  contentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    display: "none",
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  finstep: {
    textAlign: "center",
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    color: Color.ink01,
    letterSpacing: 0,
  },
  currencyCrushGraphs: {
    width: 341,
    height: 341,
  },
  current: {
    width: 16,
    backgroundColor: Color.utilityActive,
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
  },
  icon: {
    width: 8,
    marginLeft: 16,
    height: 8,
  },
  pagination: {
    width: 53,
    marginTop: 32,
    flexDirection: "row",
    height: 8,
  },
  title: {
    textAlign: "center",
    fontFamily: FontFamily.headingH4,
    fontWeight: "600",
    lineHeight: 26,
    fontSize: FontSize.headingH4_size,
    color: Color.ink01,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.paragraphLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphLarge,
    marginTop: 16,
    textAlign: "center",
    color: Color.ink01,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  onboarding: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  content: {
    width: 298,
  },
  label: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.paragraphLargeBold,
    color: Color.ink07,
    marginLeft: 8,
    textAlign: "center",
    flex: 1,
  },
  iconRight: {
    marginLeft: 8,
  },
  button: {
    width: 305,
    height: 54,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.utilityActive,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 686,
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.ink03,
    width: 134,
    height: 5,
    opacity: 0.4,
  },
  homeBar: {
    height: 34,
  },
  onboarding1: {
    backgroundColor: Color.ink07,
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding1;
