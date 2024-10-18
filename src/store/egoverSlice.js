import { createSlice} from "@reduxjs/toolkit";


const egoverSlice = createSlice({
  name : 'egoverSlice',
  initialState : [
  {
    egoverId : '1',
    egoverDate : " 8/10/2024",
    egoverTitle : "What is E-governance in hindi",
    egoverPara : "E-Governance का मतलब है government द्वारा digital techniques का उपयोग...",
    egoverLink : 'what-is-e-governance-in-hindi'
  },
  {
    egoverId : '2',
    egoverDate : " 8/11/2024",
    egoverTitle : "E-governance advantage and disadvantage",
    egoverPara : "E-Governance का मतलब है government द्वारा digital techniques का उपयोग...",
    egoverLink : 'advantage-disadvantage-egovernance'
  },
  {
    egoverId : '3',
    egoverDate : " 8/12/2024",
    egoverTitle : "Trends of ICT in hindi",
    egoverPara : "ICT ( Information and Communication Technology ) के विकास में new emerging trends का ज्ञान...",
    egoverLink : 'what-is-ict-in-hindi'
  },
  {
    egoverId : '4',
    egoverDate : " 8/13/2024",
    egoverTitle : "Need of Government Process Re-engineering",
    egoverPara : "Government processes को Modern और effective बनाने के लिए (GPR) की आवश्यकता होती है।...",
    egoverLink : 'need-of-gpr-in-hindi'
  },
  {
    egoverId : '5',
    egoverDate : " 8/14/2024",
    egoverTitle : "National e-Governance Plan (NeGP) for india",
    egoverPara : " National e-Governance Plan (NeGP) का मुख्य उद्देश्य है government services को...",
    egoverLink : 'what-negp-india-in-hindi'
  },
  {
    egoverId : '6',
    egoverDate : " 8/15/2024",
    egoverTitle : "E-governance life cycle in hindi",
    egoverPara : "E-governance life cycle वह phase यह दर्शाता है जिसके माध्यम से government...",
    egoverLink : 'egovernance-life-cycle-in-hindi'
  },
  {
    egoverId : '7',
    egoverDate : " 8/16/2024",
    egoverTitle : "E-governance components in hindi",
    egoverPara : "E-governance के components निम्नलिखित  है:..",
    egoverLink : 'egovernance-components-in-hindi'
  },
  {
    egoverId : '8',
    egoverDate : " 8/17/2024",
    egoverTitle : "Government to Citizens (G2C) in hindi",
    egoverPara : "G2C (Government to Citizen) E-Governance एक ऐसा platform है जहाँ ..",
    egoverLink : 'g2c-e-governance-in-hindi'
  },
  {
    egoverId : '9',
    egoverDate : " 8/18/2024",
    egoverTitle : "Government to Government (G2G) in hindi",
    egoverPara : "G2G का मतलब है online non-commercial interaction, जो government..",
    egoverLink : 'g2g-e-governance-in-hindi'
  },
  {
    egoverId : '10',
    egoverDate : " 8/19/2024",
    egoverTitle : "Government to Business (G2B) in hindi",
    egoverPara : "Government और local businesses, चाहे बड़े हों या छोटे, के बीच good..",
    egoverLink : 'g2b-e-governance-in-hindi'
  },
  {
    egoverId : '11',
    egoverDate : " 8/20/2024",
    egoverTitle : "Government to Employee (G2E) in hindi",
    egoverPara : "G2E  E-Governance एक ऐसा मॉडल है जो government और उसके employees..",
    egoverLink : 'g2e-e-governance-in-hindi'
  },
  
 

],
  
  reducers : {
    addInitialItems : (state,action) => {
      return action.payload;
    },
  
  }
});



export default egoverSlice;