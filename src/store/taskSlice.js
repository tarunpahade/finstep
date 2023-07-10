import { createSlice } from '@reduxjs/toolkit';

const initialTasks = [

];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialTasks,
  reducers: {
    
    setTasks: (state, action) => {
     state=action.payload.data;
    },
    addTask: (state, action) => {
      const newTask = action.payload;
      state.push(newTask);
    },
   
  },
});

export const { setTasks,addTask } = taskSlice.actions;

