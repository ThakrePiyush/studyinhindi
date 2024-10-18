import {configureStore} from "@reduxjs/toolkit";
import SubNameSlice from "./subNameSlice";
import commentSlice from "./commentSlice";
import pythonSlice from "./pythonSlice";
import csoSlice from "./csoSlice";
import dsaSlice from "./dsaSlice";
import dbmSlice from "./dbms";
import datascienceSlice from "./datascienceSlice";
import iotSlice from "./iotSlice";
import egoverSlice from "./egoverSlice";

const blogStore =  configureStore({
   reducer : {
    subName : SubNameSlice.reducer,
    commentSlice : commentSlice.reducer,
    pythonSlice : pythonSlice.reducer,
    csoSlice:csoSlice.reducer,
    dsaSlice:dsaSlice.reducer,
    dbmSlice : dbmSlice.reducer,
    datascienceSlice : datascienceSlice.reducer,
    iotSlice:iotSlice.reducer,
    egoverSlice:egoverSlice.reducer,

   }
});

export default blogStore;