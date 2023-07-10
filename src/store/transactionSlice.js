import { createSlice } from '@reduxjs/toolkit';
import UsersData from '../data/transactionData';

const initialState = {
  products: UsersData,
  selectedProduct: null,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,

});