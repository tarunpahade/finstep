import React from "react";
import AppRoutes from "./src/homeStack";
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { AuthContextProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";
export default function App() {

  
    return (
      <Provider store={store}>
      <AppNav />
      </Provider>
    
  )
  
}
