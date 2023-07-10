import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    account:{
   name:'',
 parentId:null,
 panNumber:null,
 child:[],
 password:'',
 expoPushToken:''

    }
}


export const parentAccountSlice = createSlice({
  name: 'Parent Auth',
  initialState,
  reducers: {
    setParentAccount: (state, action) => {
      state.account = action.payload;
    },
    logout: (state, action) => {
    state.account= initialState
    },
   
  },
});

export const { setParentAccount, logout }  = parentAccountSlice.actions

