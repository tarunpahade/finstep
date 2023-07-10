import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/student/home";
import Icon from "react-native-vector-icons/FontAwesome";
import { Transactions } from "./screens/student/transaction";
import { Analytics } from "./screens/student/analytics";
import { Savings } from "./screens/student/savings";
import { Tasks } from "./screens/student/task";
import { Payment } from "./screens/student/payment";
import CameraScreen from "./screens/student/camera";
import { ParentHome } from "./screens/parent/parentHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "./constants";
import { ParentFund } from "./screens/parent/parentFunds";
import { ParentTask } from "./screens/parent/parentTask";
import ImageViewer from "./screens/parent/imageViewer";
import { AddTask } from "./screens/parent/parentAddTask";
import { ParentStudentHome } from "./screens/parent/parentStudent";
import { QRCodeScanner } from "./screens/student/qrCode";
import { Request } from "./screens/student/request";
import { AddMoneyToAccount } from "./screens/student/addmoneyToAccount";
import LoginScreen from "./screens/parent/login";
import { BalanceScreen } from "./screens/student/balanceScreen";
import { ProfileScreen } from "./screens/student/profilepage";
import { StudentForm } from "./screens/parent/studentForm";
import  FundDetailsPage from "./screens/parent/fundDetails";
import RegisterPhone from "./screens/authentication/askForNumber";
import CoursePage from "./screens/student/courses";
import { Text, View } from "react-native";
import CourseDetailsPage from "./screens/student/courseDetails";
import UnderstandCoursePage from "./screens/student/understandCourse";
import UnderstandCoursePage2 from "./screens/student/understandCourse2";
import PinPage from "./screens/authentication/enterLoginpin";
import UserDetailScreen from "./screens/authentication/details";
import { Home2 } from "./screens/student/home2";

const Stack = createNativeStackNavigator();

function AppRoutes() {
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
      name="Pin Page"
     component={PinPage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Details Screen"
     component={UserDetailScreen}
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
    
 

  
  <Stack.Screen
  name="Courses"
  component={CoursePage}

    options={{
      elevation: 0,
      shadowOpacity: 0,
      headerTitleAlign: "center",
      headerShadowVisible: false,


  }}
/>

<Stack.Screen
name="Courses Details"
component={CourseDetailsPage}

  options={{
    headerShown: false,

}}
/>


    <Stack.Screen
      name="Fund Details"
      component={FundDetailsPage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Understand Course"
      component={UnderstandCoursePage}
      options={{
        headerShown: false,
      }}
    />
    
       
        
        <Stack.Screen
          name="Student Form"
          component={StudentForm}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="Parent Student Home"
          component={ParentStudentHome}
          options={{
            headerShown: false,
          }}
        />
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
          name="Add account"
          component={AddMoneyToAccount}
          options={{
            title: "Add Money To account",
            elevation: 0,
            shadowOpacity: 0,
            headerTitleStyle: {
              fontSize: 20,
            },
            headerShadowVisible: false,
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
            headerStyle: {
              elevation: 0,       // Remove Android elevation
              shadowOpacity: 0,  // Remove iOS shadow
              borderBottomWidth: 0, // Remove bottom border
            },
            
            headerTitle: () => (
            <View>
              <Text style={{ fontSize: 17,marginBottom:4,marginTop:7 }}>Tasks</Text>
              <Text style={{ fontSize: 9 }}>Install Good Habits in Kids</Text>
            </View>
          ),
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
          borderBottomWidth: 0, // Remove bottom border line
          headerShadowVisible: false,
          Title:'My Tasks',  
         
        headerTitle: () => (
          <View>
            <Text style={{ fontSize: 18,marginBottom:4,marginTop:7 }}>My Tasks</Text>
          </View>
        ),
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

export default AppRoutes;

// function App() {
//   const screenOptions = {
//     unmountOnBlur: false,
//     headerShown: false,
//     tabBarStyle: {
//       backgroundColor: COLORS.darkblue,
//       height: 50,
//     },
//     tabBarItemStyle: {
//       backgroundColor: COLORS.darkblue,
//       margin: 3,
//       borderRadius: 8,
//       width: 10,
//       borderRadius: 20,
//     },
//   };
//   const sceneContainerStyle = {
//     backgroundColor: "#95a5a6",
//   };
//   return (
//     <Tab.Navigator
//       {...{ screenOptions, sceneContainerStyle }}
//       options={{
//         headerShown: false,

//         headerTitleStyle: { fontSize: 12 },
//       }}
//     >
//       <Tab.Screen
//         name="StudentHome"
//         component={Home}
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="home" color={color} size={size} />
//           ),
//           headerShown: false,
//         }}
//       />

//       <Tab.Screen
//         name="Money"
//         component={Money}
//         options={{
//           title: "Money",

//           tabBarIcon: ({ color, size }) => (
//             <Icon name="bank" color={color} size={size} />
//           ),
//           elevation: 0, // remove shadow on Android
//           shadowOpacity: 0, // remove shadow on iOS

//           headerTitleAlign: "center",
//         }}
//       />

//     </Tab.Navigator>
//   );
// }
