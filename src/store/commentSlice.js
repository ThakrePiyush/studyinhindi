import { createSlice} from "@reduxjs/toolkit";


const commentSlice = createSlice({
  name : 'comments',
  initialState : [
    {
    id : '001',
    name : "Harsh Verma",
    email : "harshverma001@gmail.com",
    comment : "This website is very good.This website helped me a lot",
  },
  {
    id : '002',
    name : "Kisan ",
    email : "kisan002@gmail.com",
    comment : "This website is very good.This website helped me a lot",
  },
 
  
],
  
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    },
  
  }
});

export const commentActions = commentSlice.actions;

export default commentSlice;
