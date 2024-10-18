import { createSlice} from "@reduxjs/toolkit";


const csoSlice = createSlice({
  name : 'csoSlice',
  initialState : [
  {
    csoId : '1',
    csoDate : " 8/15/2024",
    csoTitle : "What is Computer System Architecture in hindi",
    csoPara : "Computer Organization Special रूप से Computer के hardware, Software....",
    csoLink : 'what-is-computer-architecture-in-hindi'
  },
  {
    csoId : '2',
    csoDate : " 8/16/2024",
    csoTitle : "Functional unit in CSO in Hindi",
    csoPara : "Computer System  का functional infrastructure five important components से बना है। Functional unit C.P.U का part हैं।..",
    csoLink : 'functional-unit-in-hindi'
  },
  {
    csoId : '3',
    csoDate : " 8/17/2024",
    csoTitle : "Von Neumann Architecture in Hindi",
    csoPara : "यह Computer system का एक architecture है जिसे john Von neumann ने devlop किया था  ..",
    csoLink : 'von-neumann-architecture-in-hindi'
  },
 

],
  
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    },
  
  }
});



export default csoSlice;