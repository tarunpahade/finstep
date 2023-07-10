const {configureStore}= require('@reduxjs/toolkit')
import { appSlice } from './apiSlice'
import { taskSlice } from './taskSlice'
import { accountSlice } from './authitication'
import { parentAccountSlice } from './parentAuth'
export const store =configureStore({
    
    reducer:{
    api:appSlice.reducer,
    studentTask:taskSlice.reducer,
    account:accountSlice.reducer,
    parentAccount:parentAccountSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appSlice.middleware),
})