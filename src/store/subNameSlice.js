
import { createSlice} from "@reduxjs/toolkit";


const SubNameSlice = createSlice({
  name : 'subName',
  initialState : [
    {
      sId : '1',
      sName:'Python-Perl',
      sPara : 'Python-Perl से related Information Hindi में read करने के लिए निचे दिए गए Link पर Click करे ।'
    },
    {
      sId : '2',
      sName:'Data-Science',
      sPara : 'Data-Science से related Information Hindi में read करने के लिए निचे दिए गए Link पर Click करे । '
    },
    {
      sId : '3',
      sName:'Computer-Network',
      sPara : 'Computer-Network से related Information Hindi में read करने के लिए निचे दिए गए Link पर Click करे । '
    },
    // {
    //   sId : '4',
    //   sName:'DBMS',
    //   sPara : 'Multimedia-Technology से related Information Hindi में read करने के लिए निचे दिए गए Link पर Click करे । '
    // },
    {
      sId : '4',
      sName:'IOT',
      sPara : 'Internet Of Things से related Information Hindi में read करने के लिए निचे दिए गए Link पर Click करे । '
    },
    {
      sId : '5',
      sName:'e-Governance',
      sPara : 'e-Governance से related Information Hindi में read करने के लिए निचे दिए गए Link पर Click करे ।'
    },
    {
      sId : '6',
      sName:'CSO',
      sPara : 'CSO से related Information Hindi में read करने के लिए निचे दिए गए Link पर Click करे । '
    },
    {
      sId : '7',
      sName:'DSA',
      sPara : 'Data Structure & Algorithm से related Information Hindi में read करने के लिए निचे दिए गए Link पर Click करे ।'
    },
   
  ],
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    }
  }
});

export const SubNameActions = SubNameSlice.actions;

export default SubNameSlice;
