import { createSlice} from "@reduxjs/toolkit";


const iotSlice = createSlice({
  name : 'iotSlice',
  initialState : [
  {
    iotId : '1',
    iotDate : " 8/19/2024",
    iotTitle : "What is Internet of Things in hindi",
    iotPara : "Computer Organization Special रूप से Computer के hardware, Software....",
    iotLink : 'what-is-computer-architecture-in-hindi'
  },
 

],
  
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    },
  
  }
});



export default iotSlice;