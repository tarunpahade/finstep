import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/student/home";
import { Transactions } from "./screens/student/transaction";
import { Analytics } from "./screens/student/analytics";
import { Savings } from "./screens/student/savings";
import { Tasks } from "./screens/student/task";
import { Payment } from "./screens/student/payment";
import CameraScreen from "./screens/student/camera";
import { ParentHome } from "./screens/parent/parentHome";
import { ParentFund } from "./screens/parent/parentFunds";
import { ParentTask } from "./screens/parent/parentTask";
import ImageViewer from "./screens/parent/imageViewer";
import { Entry } from "./screens/parent/entry";
import { AddTask } from "./screens/parent/parentAddTask";
import { ParentStudentHome } from "./screens/parent/parentStudent";
import { QRCodeScanner } from "./screens/student/qrCode";
import { Request } from "./screens/student/request";
import { AddMoneyToAccount } from "./screens/student/addmoneyToAccount";
import LoginScreen from "./screens/parent/login";
import { BalanceScreen } from "./screens/student/balanceScreen";
import { ProfileScreen } from "./screens/student/profilepage";
import { StudentForm } from "./screens/parent/studentForm";

const Stack = createNativeStackNavigator();

function StudentStack() {
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
        name="Analytics"
        component={Analytics}
        options={{
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          headerTitleAlign: "center",
        }}
      />
        
        <Stack.Screen
          name="Request Money"
          component={Request}
          options={{
            elevation: 0,
            shadowOpacity: 0,
            headerTitleStyle: {
              fontSize: 20,
            },
            headerShadowVisible: false,
          }}
        />


        <Stack.Screen
          name="Add Task"
          component={AddTask}
          options={{
            elevation: 0,
            shadowOpacity: 0,
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="ParentHome"
          component={ParentHome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Parent Task"
          component={ParentTask}
          options={{
            elevation: 0,
            shadowOpacity: 0,
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="ImageViewer"
          component={ImageViewer}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
                     headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Balance Screen"
          component={BalanceScreen}
          options={{}}
        />

        
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Qr Code"
          component={QRCodeScanner}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            backgroundColor: "#4285F4",
            headerTintColor: "#fff",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#4285F4",
            },
          }}
        />

        <Stack.Screen
          name="Transactions"
          component={Transactions}
          options={{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS

            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Savings"
          component={Savings}
          options={{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS

            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          headerTitleAlign: "center",
          }}
      />
        <Stack.Screen
          name="Parent Fund"
          component={ParentFund}
          options={{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StudentStack;

