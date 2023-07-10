import { createSlice } from '@reduxjs/toolkit';


const initialState = {
 value:[]

};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    Alltask: (state, action) => {
      state.value = action.payload;
  
  
    },
    AddTaskData: (state, action) => {
      const newTask = action.payload;
      
        state.value.push({ newTask });
   
    },
  },
});

export const { Alltask, AddTaskData }  = taskSlice.actions

