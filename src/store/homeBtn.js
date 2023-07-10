import { createSlice } from '@reduxjs/toolkit';
import UsersData from '../data/transactionData';

const initialState = {
  AppButtons: UsersData,
  selectedProduct: null,
};

export const transactionSlice = createSlice({
  name: 'AppData',
  initialState,

});