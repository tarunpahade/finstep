import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/student/home";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Transactions } from "./screens/student/transaction";
import { Analytics } from "./screens/student/analytics";
import { Savings } from "./screens/student/savings";
import { Tasks } from "./screens/student/task";
import { Money } from "./screens/student/money";

import { RequestMoney } from "./screens/student/requestmoney";
import CameraScreen from "./screens/student/camera";
import { ParentHome } from "./screens/parent/parentHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "./constants";
import { ParentFund } from "./screens/student/parentFunds";
import { ParentTask } from "./screens/parent/parentTask";
import ImageViewer from "./screens/parent/imageViewer";
import { Entry } from "./screens/parent/entry";
import { AddTask } from "./screens/parent/parentAddTask";
import { ParentStudentHome } from "./screens/parent/parentStudent";
import { QRCodeScanner } from "./screens/student/qrCode";
import { AddMoney } from "./screens/student/addMoney";
import{ AddMoneyToAccount } from "./screens/student/addmoneyToAccount";
const Tab = createBottomTabNavigator();

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
    
      <Stack.Screen name="Entry" component={Entry} options={{
        elevation: 0,
        shadowOpacity: 0,
          headerTitleAlign: 'center',
          headerShadowVisible: false
        
          
      }} /> 
      <Stack.Screen name="Add account" component={AddMoneyToAccount} options={{
        title:'Add Money To account',
        elevation: 0,
        shadowOpacity: 0,
          headerTitleStyle:{
           fontSize:20, 
          },
          headerShadowVisible: false
        
          
      }} /> 
      <Stack.Screen name="Add Money" component={AddMoney} options={{
        title:'Add Money ',
        elevation: 0,
        shadowOpacity: 0,
          headerTitleStyle:{
           fontSize:20, 
          },
          headerShadowVisible: false
        
          
      }} /> 
 
      <Stack.Screen name="Parent Student Home" component={ParentStudentHome} options={{
        headerShown: false,         
      }} /> 
      
      <Stack.Screen name="Add Task" component={AddTask} options={{
        elevation: 0,
        shadowOpacity: 0,
          headerTitleAlign: 'center',
          headerShadowVisible: false
        
          
      }} /> 
      <Stack.Screen name="ParentHome" component={ParentHome} options={{
        headerShown: false,
      }}/>
       
        <Stack.Screen name="Parent Task" component={ParentTask} options={{
          elevation: 0,
          shadowOpacity: 0,
            headerTitleAlign: 'center',
            headerShadowVisible: false
          
            
        }} /> 
        <Stack.Screen name="ImageViewer" component={ImageViewer} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Home" component={App} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Analytics" component={Analytics} options={{
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
            headerTitleAlign: 'center'
        }} /> 
        <Stack.Screen name="Camera" component={CameraScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Qr Code" component={QRCodeScanner} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Payment" component={RequestMoney} options={{
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
            backgroundColor: '#4285F4',
            headerTintColor: '#fff',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#4285F4',
              },
        }} />

       
        <Stack.Screen name="Transactions" component={Transactions} options={{
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
      
            
            headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="Savings" component={Savings} options={{
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
      
            
            headerTitleAlign: 'center'
      
        }} />
        <Stack.Screen name="Parent Fund" component={ParentFund} options={{
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
            headerTitleAlign: 'center'
      
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;

function App() {
  const screenOptions = {
    unmountOnBlur: false,
    headerShown: false,
    tabBarStyle:{
      backgroundColor:COLORS.darkblue,
      height:50,
    },
    tabBarItemStyle:{
      backgroundColor:COLORS.darkblue,
      margin:3,
      borderRadius:8,
     width:10,
      borderRadius:20,
      
    }
  };
  const sceneContainerStyle = {
    backgroundColor: '#95a5a6',
  };
  return (
    <Tab.Navigator {...{ screenOptions, sceneContainerStyle }}  options={{
      headerShown: false,

      headerTitleStyle:{fontSize:12},

    }}>
      <Tab.Screen
        name="StudentHome"
        component={Home}
        
        options={{
          title:'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false 
        }}
       
      />

      <Tab.Screen
        name="Money"
        component={Money}
      
        options={{
          title:'Money',

          tabBarIcon: ({ color, size }) => (
          <Icon name="bank" color={color} size={size}/>
           
          ),
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
      
            
            headerTitleAlign: 'center'
        }}
            />
            <Tab.Screen
            name="Tasks"
            component={Tasks}
               
            options={{
            
              title:'Tasks',

              tabBarIcon: ({ color, size }) => (
                <Icon name="bullseye" color={color} size={size} />
              ),
              headerShown: false 
            }}
                />
     
    </Tab.Navigator>
  );
}
