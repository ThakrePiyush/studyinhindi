import { createSlice} from "@reduxjs/toolkit";


const dbmSlice = createSlice({
  name : 'dbmSlice',
  initialState : [
  {
    dbmId : '1',
    dbmDate : " 8/19/2024",
    dbmTitle : "What is Data Structure Algorithm in hindi",
    dbmPara : "Computer Organization Special रूप से Computer के hardware, Software....",
    dbmLink : 'what-is-computer-architecture-in-hindi'
  },
 

],
  
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    },
  
  }
});



export default dbmSlice;