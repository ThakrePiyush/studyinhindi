import { createSlice} from "@reduxjs/toolkit";


const datascienceSlice = createSlice({
  name : 'datascienceSlice',
  initialState : [
  {
    datasciId : '1',
    datasciDate : " 8/01/2024",
    datasciTitle : "What is Data Science in hindi",
    datasciPara : "Data Science एक ऐसा area या place है जिसमें data को analyze,processing..",
    datasciLink : 'what-is-data-science-in-hindi'
  },
  {
    datasciId : '2',
    datasciDate : " 8/02/2024",
    datasciTitle : "Types of Data Science in hindi",
    datasciPara : "इसका उद्देश्य past के data का Analysis करके यह समझना होता है कि क्या हुआ और क्या ..",
    datasciLink : 'what-is-type-data-science-in-hindi'
  },
  {
    datasciId : '3',
    datasciDate : " 8/03/2024",
    datasciTitle : "What is Data mining in hindi",
    datasciPara : "Data Mining एक process है जिसमें large data set से important ..",
    datasciLink : 'what-is-data-mining-in-hindi'
  },
  {
    datasciId : '4',
    datasciDate : " 8/04/2024",
    datasciTitle : "Pattern in data mining in hindi",
    datasciPara : "Data Mining में pattern का महत्व बहुत बड़ा है क्योंकि ये pattern  ..",
    datasciLink : 'what-is-data-mining-pattern-in-hindi'
  },
 

],
  
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    },
  
  }
});



export default datascienceSlice;