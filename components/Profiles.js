import React, { useState, memo } from "react";
import { FlatList, StyleProp, ViewStyle, StyleSheet } from "react-native";
import Profile from "./Profile";
import Break5 from "./Break5";
import Profile2 from "./Profile2";
import Break4 from "./Break4";
import Profile3 from "./Profile3";
import Break3 from "./Break3";
import Profile4 from "./Profile4";
import Break2 from "./Break2";
import Profile5 from "./Profile5";
import Break1 from "./Break1";
import Profile6 from "./Profile6";
import Break from "./Break";
import Profile7 from "./Profile7";
import Profiles from "Profiles";

const Profiles = memo(({ style }) => {
  const [profilesFlatListData, setProfilesFlatListData] = useState([
    <Profile />,
    <Break5 />,
    <Profile2 />,
    <Break4 />,
    <Profile3 />,
    <Break3 />,
    <Profile4 />,
    <Break2 />,
    <Profile5 />,
    <Break1 />,
    <Profile6 />,
    <Break />,
    <Profile7 />,
  ]);

  return (
    <FlatList
      style={[styles.profiles, style]}
      data={profilesFlatListData}
      ListHeaderComponent={<Profiles />}
      renderItem={({ item }) => item}
      contentContainerStyle={styles.profilesFlatListContent}
    />
  );
});

const styles = StyleSheet.create({
  profilesFlatListContent: {
    flexDirection: "column",
  },
  profiles: {
    flex: 1,
  },
});

export default Profiles;
