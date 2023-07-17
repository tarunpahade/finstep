import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";

const Break = memo(({ style }) => {
  return <View style={[styles.break, style]} />;
});

const styles = StyleSheet.create({
  break: {
    borderStyle: "solid",
    borderColor: "#f4f7fa",
    borderTopWidth: 1,
    width: 326,
    height: 1,
  },
});

export default Break;
