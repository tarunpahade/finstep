const {configureStore}= require('@reduxjs/toolkit')
import { transactionSlice } from './transactionSlice'
import { appSlice } from './apiSlice'
import { taskSlice } from './taskSlice'
export const store =configureStore({
    
    reducer:{
transaction:transactionSlice.reducer,
    api:appSlice.reducer,
    task:taskSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appSlice.middleware),
})