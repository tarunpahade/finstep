import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    account:{
 name:'',
 studentId:null,
 panNumber:null,
 password:'',
 expoPushToken:'',
 phoneNumber:'',
 }
 

};

export const accountSlice = createSlice({
  name: 'Student Authentication',
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    logout: (state, action) => {
    state.account= initialState
    },
   
  },
});

export const { setAccount, logout }  = accountSlice.actions

