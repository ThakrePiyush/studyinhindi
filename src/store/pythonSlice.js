import { createSlice} from "@reduxjs/toolkit";


const pythonSlice = createSlice({
  name : 'pythonSlice',
  initialState : [
  {
    pyId : '1',
    pyDate : " 8/18/2024",
    pyTitle : "What is Python in Hindi",
    pyPara : "Python एक Scripting Language है Pyhton एक High Level Language है....",
    pyLink : 'what-is-python-in-hindi'
  },
  {
    pyId : '2',
    pyDate : "08/19/2024",
    pyTitle : " Python programing variable in Hindi",
    pyPara : "This website is very good.This website helped me a lot",
     pyLink : 'what-is-python-variable-in-hindi'
  },
  {
    pyId : '3',
    pyDate : "08/20/2024",
    pyTitle : "What is Perl programing in Hindi",
    pyPara : "Perl Object Oriented और procedural दोनो प्रकार के programming Language",
     pyLink : 'what-is-perl-in-hindi'
  },
  {
    pyId : '4',
    pyDate : "08/21/2024",
    pyTitle : "Python and Perl Installation process in hindi",
    pyPara : "Perl Object Oriented और procedural दोनो प्रकार के programming Language",
     pyLink : 'intallation-python-perl'
  },
  {
    pyId : '5',
    pyDate : "08/22/2024",
    pyTitle : "Perl Data Types in hindi : (perl data type क्या है)",
    pyPara : "Perl Object Oriented और procedural दोनो प्रकार के programming Language",
     pyLink : 'perl-data-types'
  },
  {
    pyId : '6',
    pyDate : "08/23/2024",
    pyTitle : "Understanding read function in Python",
    pyPara : "Python programming मे Understanding read function का use Files से Data को read..",
     pyLink : 'understanding-read-function'
  },
  {
    pyId : '7',
    pyDate : "08/24/2024",
    pyTitle : "Understanding write function in python",
    pyPara : "Python मे write() function का use files मे data को write या लिखने....",
     pyLink : 'understanding-write-function'
  },
  {
    pyId : '8',
    pyDate : "08/25/2024",
    pyTitle : "File operation in python in hindi",
    pyPara : "python programing मे file operation काफी easy था सरल है। जिनकी help से...",
     pyLink : 'file-operation-in-python'
  },
  {
    pyId : '9',
    pyDate : "08/26/2024",
    pyTitle : "Powerful pattern matching and searching in python",
    pyPara : "Python मे powerful pattern matching और searching के लिए  're' module का use ..",
     pyLink : 'powerful-pattern-matching'
  },
  {
    pyId : '10',
    pyDate : "08/27/2024",
    pyTitle : "Framework in python in hindi (Framework क्या है।)",
    pyPara : "Python मे framework modules या packages का एक collection होता है जो हमे application ..",
     pyLink : 'framework-in-python'
  },
  {
    pyId : '11',
    pyDate : "08/28/2024",
    pyTitle : "Django and Web2py framework in hindi",
    pyPara : "Web2py framework का use dynamic web application devlop करने के ..",
     pyLink : 'django-web2py-in-hindi'
  },

],
  
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    },
  
  }
});



export default pythonSlice;
