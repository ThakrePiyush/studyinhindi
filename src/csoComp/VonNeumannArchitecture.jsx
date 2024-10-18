
const VonNeumannArchitecture = () => {

  return <div className="mainpageactualDiv">

    <h1><b>Von Neumann Architecture in hindi (Von Neumann Architecture क्या है :)</b></h1>
    <p>[10:01 AM, 8/17/2024] 𝙿𝙸𝚈𝚄𝚂𝙷 𝚃𝙷𝙰𝙺𝚁𝙴</p><br />

    <p>यह Computer system का एक architecture है जिसे john Von neumann ने devlop किया था John von neumann गणितज्ञ और physics scientist थे।   यह architecture Stored program Computer concept पर आधारित है इसमें program, memory मे  Store  होते है CPU memory से एक समय में केवल एक Instruction को fetch करता है और उसे execute करता है।</p>
    <h2>Von - neumann architecture में निम्न Unit होते है</h2>
    <ul>
      <li>1) Control Unit</li>
      <li>2) Arithmetic and logic Unit (ALU)</li>
      <li>3) Register (main memory Unit)</li>
      <li>4) Input / Output Devices</li>
      <li>5) CPU (Central Processing Unit)</li>
    </ul><br />
    <center> <img src='../images/vonneumann.png' alt="functional units"  /> </center> <br />
    <h3><b>1) Control Unit :- </b></h3>
    <p>इस unit द्वारा एक Computer मे होने वाले सभी प्रकार की activity को control किया जाता है।Control Unit A.L.U को गणना करने हेतु विभिन्न प्रकार के निर्देश प्रदान करती है।Conteral Unit द्वारा user द्वारा  दिए गये निर्देशो को मशीन भाषा मे बदला जाता है जिससे A.L.U इस पर गणना कर सके।Conteral Unit in computer में आने वाली Input तथा जाने वाली Output को भी नियंत्रण करती है।Control Unit main memory मे Process किये गये Data को Processor में लाने का कार्य भी करती है।</p><br />
    <h3><b>2) Arithmetic and logic Unit (ALU) :-</b></h3>
    <p>ALU (Arthmetic and logic Unit) इस unit द्वारा एक Computer में होने वाली सभी arithmetic तथा logical calculation की जाती है।A.L.U , Control Unit(C.U) द्वारा दिये गये निर्देशो के अनुसार किसी भी Data पर गणना करता है।</p><br />
    <h3><b>3) Register (main memory Unit) :-</b></h3>
    <p>Register एक प्रकार की computer memory है जिसका use cpu द्वारा तुरंत उपयोग किए जाने वाले data और instruction को quickly accept करने, store करने और transfer करने के लिए किया जाता है। cpu द्वारा उपयोग किए जाने वाले register को अक्सर Processor registers कहा जाता है।</p>
    <br />
    <h3><b>4) Input / Output Devices :-</b></h3>
    <p>Input : -यह Computer की वह Unit(इकाई) होती है। जो Data और निर्देशो के रूप मे Input के रूप मे प्राप्त होती है।<br />
    Output :- इस Unit द्वारा computer द्वारा प्रदान किए गये Output को दर्शाया जाता है।Computer द्वारा प्रदान किये गये output को सूचना(Information) कहाँ जाता है Information व्यवस्थित Data का समुह(group) होता है जिसे Data को process करने के बाद प्राप्त किया जाता है</p><br />
    <h3><b>5) CPU (Central Processing Unit):-</b></h3>
    <p>Central Processing

Unit इसको Computer का मस्तिष्क भी कहाँ जाता है   Central Processing Unit Input Data को process करता है इसके बाद Output प्रदर्शित करता है।</p><br />
   
  </div>
}

export default VonNeumannArchitecture;