import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Provider} from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import blogStore from './store/index.js'
import './index.css'
import './about.css'
import DefaultPage from './comment/DefaultPage.jsx'
import MainPageContent from './Navbar-component/MainPagrContent copy .jsx';
import Contact from './FooterComponent/Contact.jsx'
import About from './comment/About.jsx';
import TermsAndCondition from './FooterComponent/TermsAndCondition.jsx'
import PrivacyPolicy from './FooterComponent/PrivacyPolicy.jsx';
import Python from './routes/Python.jsx';
import WhatIsPythonInHindi from './PythonComp/WhatIsPythonInHindi.jsx';
import WhatIsPythonVariableInHindi from './PythonComp/WhatIsPythonVariableInHindi.jsx';
import WhatIsPerlInHindi from './PythonComp/WhatIsPerlInHindi.jsx';
import InstallationProcessInHindi from './PythonComp/InstallationProcessInHindi.jsx';
import PerlDataTypes from './PythonComp/PerlDataTypes.jsx';
import UnderstandingReadFunction from './PythonComp/UnderstandingReadFunction.jsx';
import UnderstandingWriteFunction from './PythonComp/UnderstandingWriteFunction.jsx';
import FileOperationInPython from './PythonComp/FileOperationInPython.jsx';
import PowerfulPatternMatching from './PythonComp/PowerfulPatternMatching.jsx';
import FrameworkInPython from './PythonComp/FrameworkInPython.jsx';
import DjangoAndWeb2py from './PythonComp/DjangoAndWeb2py.jsx';
import Cso from './routes/Cso.jsx';
import WhatIsCsoInHindi from './csoComp/WhatIsCsoInHindi.jsx';
import FunctionalUnitInHindi from './csoComp/FunctionalUnitInHindi.jsx';
import VonNeumannArchitecture from './csoComp/VonNeumannArchitecture.jsx';
import Dsa from './routes/Dsa.jsx';
import Dbms from './routes/Dbms.jsx'
import StackRepresentationAsArray from './DsaComp/StackRepresentationAsArray.jsx';
import GraphTerminology from './DsaComp/GraphTerminology.jsx';
import DataScience from './routes/DataScience.jsx'
import DataScienceInHindi from './dataScienceComp/DataScienceInHindi.jsx';
import TypesOfDataScience from './dataScienceComp/TypesOfDataScience.jsx';
import DataMiningInHindi from './dataScienceComp/DataMiningInHindi.jsx';
import PatternInDataMining from './dataScienceComp/PatternInDataMining.jsx';
import Iot from './routes/Iot.jsx'
import Egovernance from './routes/Egovernance.jsx'
import WhatIsEgovernance from './E-goverComp/WhatIsEgovernance.jsx';
import AdvanAndDisadvanEgov from './E-goverComp/AdvanAndDisadvanEgov.jsx';
import IctInHindi from './E-goverComp/IctInHindi.jsx';
import NeedOfGPR from './E-goverComp/NeedOfGPR.jsx';
import NeGPInHindi from './E-goverComp/NeGPInHindi.jsx';
import LifeCycleOfEgover from './E-goverComp/LifeCycleOfEgover.jsx';
import EgoverComponents from './E-goverComp/EgoverComponents.jsx';
import G2c from './E-goverComp/G2c.jsx';
import G2g from './E-goverComp/G2g.jsx';
import G2b from './E-goverComp/G2b.jsx';
import G2e from './E-goverComp/G2e.jsx';



const router = createBrowserRouter(createRoutesFromElements(
  <Route  path='/' element={<App/>}>
      <Route path='' element={ <MainPageContent/>}/>
      <Route  path='contact' element={<Contact/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='Python-Perl' element={<Python/>}>
          <Route path='what-is-python-in-hindi' element={<WhatIsPythonInHindi/>}/>
          <Route path='what-is-python-variable-in-hindi' element={<WhatIsPythonVariableInHindi/>}/>
          <Route path='what-is-perl-in-hindi' element={<WhatIsPerlInHindi/>}/>
          <Route path='intallation-python-perl' element={<InstallationProcessInHindi/>}/>
          <Route path='perl-data-types' element={<PerlDataTypes/>}/>
          <Route path='understanding-read-function' element={<UnderstandingReadFunction/>}/>
          <Route path='understanding-write-function' element={<UnderstandingWriteFunction/>}/>
          <Route path='file-operation-in-python' element={<FileOperationInPython/>}/>
          <Route path='powerful-pattern-matching' element={<PowerfulPatternMatching/>}/>
          <Route path='framework-in-python' element={<FrameworkInPython/>}/>
          <Route path='django-web2py-in-hindi' element={<DjangoAndWeb2py/>}/>
      </Route>
      <Route path='CSO' element={<Cso/>}>
           <Route path='what-is-computer-architecture-in-hindi' element={<WhatIsCsoInHindi/>}/>
           <Route path='functional-unit-in-hindi' element={<FunctionalUnitInHindi/>}/>
           <Route path='von-neumann-architecture-in-hindi' element={<VonNeumannArchitecture/>}/>
      </Route>
      <Route path='DSA' element={<Dsa/>}>
           <Route path='stack-representation-as-array-in-hindi' element={<StackRepresentationAsArray/>}/>
           <Route path='graph-terminology-in-hindi' element={<GraphTerminology/>}/>
      </Route> 
      <Route path='Data-Science' element={<DataScience/>}>
         <Route path='what-is-data-science-in-hindi' element={<DataScienceInHindi/>}/>
         <Route path='what-is-type-data-science-in-hindi' element={<TypesOfDataScience/>}/>
         <Route path='what-is-data-mining-in-hindi' element={<DataMiningInHindi/>}/>
         <Route path='what-is-data-mining-pattern-in-hindi' element={<PatternInDataMining/>}/> 
      </Route>
      <Route path='IOT' element={<Iot/>}>
       
      </Route>
      <Route path='e-Governance' element={<Egovernance/>}>
         <Route path='what-is-e-governance-in-hindi' element={<WhatIsEgovernance/>}/>
         <Route path='advantage-disadvantage-egovernance' element={<AdvanAndDisadvanEgov/>}/>
         <Route path='what-is-ict-in-hindi' element={<IctInHindi/>}/>
         <Route path='need-of-gpr-in-hindi' element={<NeedOfGPR/>}/>
         <Route path='what-negp-india-in-hindi' element={<NeGPInHindi/>}/>
         <Route path='egovernance-life-cycle-in-hindi' element={<LifeCycleOfEgover/>}/>
         <Route path='egovernance-components-in-hindi' element={<EgoverComponents/>}/>
         <Route path='g2c-e-governance-in-hindi' element={<G2c/>}/>
         <Route path='g2g-e-governance-in-hindi' element={<G2g/>}/>
         <Route path='g2b-e-governance-in-hindi' element={<G2b/>}/>
         <Route path='g2e-e-governance-in-hindi' element={<G2e/>}/>
      </Route>
      {/* <Route path='DBMS' element={<Dbms/>}>
         
      </Route> */}
      <Route path='Privacy-Policy' element={<PrivacyPolicy/>}/>
      <Route index path='Terms&Conditions' element={<TermsAndCondition/>}/>
      <Route path='*' element={<DefaultPage/>} />
  </Route>
))






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={blogStore}>
             <RouterProvider router={router}/>  
    </Provider>
  </React.StrictMode>,
)
