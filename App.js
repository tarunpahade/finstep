import React from "react";
import AppRoutes from "./src/homeStack";
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
export default function App() {

  
    return (
      <Provider store={store}>
      <AppRoutes />  
      </Provider>
    
  )
  ;
}
