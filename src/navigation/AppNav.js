import React, { useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import AppRoutes from "../homeStack";

import { AuthContext, AuthContextProvider } from "../context/AuthContext";
import AuthStack from "./AuthStack";
export default function AppNav() {
// const { isLoading, userToken } = useContext(AuthContext);
// console.log(isLoading, userToken);
//   if (isLoading) {
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <ActivityIndicator size="large" />
//     </View>;
//   }
  return (
    <AuthContextProvider>
    
    
      <AppRoutes />
    </AuthContextProvider>
  );
}
// {userToken !== null ? <AppRoutes /> : <Text>Not logged in</Text>}