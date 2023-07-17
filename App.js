const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Transactions from "./screens/Transactions";
import Home from "./screens/Home";
import Home1 from "./screens/Home1";
import FrameScreen from "./screens/FrameScreen";
import Wallet1 from "./screens/Wallet1";
import Wallet2 from "./screens/Wallet2";
import MoneySent from "./screens/MoneySent";
import SendMoney from "./screens/SendMoney";
import StatusBar2 from "./components/StatusBar2";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding1 from "./screens/Onboarding1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Montserrat_extrabold: require("./assets/fonts/Montserrat_extrabold.ttf"),
    "Open Sans_bold": require("./assets/fonts/Open_Sans_bold.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Rubik_regular: require("./assets/fonts/Rubik_regular.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Onboarding1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Transactions"
              component={Transactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet1"
              component={Wallet1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet2"
              component={Wallet2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MoneySent"
              component={MoneySent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendMoney"
              component={SendMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <FrameScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
