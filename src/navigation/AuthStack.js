import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/parent/login";
import RegisterPhone from "../screens/authentication/askForNumber";
const Stack = createNativeStackNavigator();

function AuthStack() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
      
      <Stack.Screen
      name="Register Screen"
      component={RegisterPhone}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen
      name="Login Page"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
      
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStack;

