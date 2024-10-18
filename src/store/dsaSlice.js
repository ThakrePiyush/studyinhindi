import { createSlice} from "@reduxjs/toolkit";


const dsaSlice = createSlice({
  name : 'dsaSlice',
  initialState : [
  {
    dsaId : '1',
    dsaDate : " 8/29/2024",
    dsaTitle : "Stack representation as array in hindi",
    dsaPara : "Stack   का यह implementation Array को represent करने के लिए list..",
    dsaLink : 'stack-representation-as-array-in-hindi'
  },
  {
    dsaId : '2',
    dsaDate : " 8/30/2024",
    dsaTitle : "Graph Terminology in hindi",
    dsaPara : "Vertex:- Graph में vertex nade को कहाँ जाता है जो edges से connected होता है।.",
    dsaLink : 'graph-terminology-in-hindi'
  },
 

],
  
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    },
  
  }
});



export default dsaSlice;