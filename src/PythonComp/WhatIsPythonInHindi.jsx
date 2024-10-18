import Python from '../routes/Python';
import Comment from '../comment/comment'
import { useSelector } from "react-redux";
const WhatIsPythonInHindi = () => {

  const pythonSlice =  useSelector(Store=> Store.pythonSlice);

  return <>
  <div className='mainpageactualDiv'>
      <h1><b>What is Python Programing in Hindi : ( पाइथॉन क्या है )</b></h1>
      <p>[11:53 AM, 8/18/2024] 𝙿𝙸𝚈𝚄𝚂𝙷 𝚃𝙷𝙰𝙺𝚁𝙴:</p>
      <br/>
      <center> <img src='../images/whatispython.png' alt="functional units"  /> </center> <br />
      <p>Python एक Scripting Language है। Python एक High Level Programing Language  है जिसका use Software Development, Web-Devlopment , Artificial Intelligence (AI), Machine Learning और बहुत सारी जगह पर किया जाता है। Python एक Dynamic और Open Source Language है। Python Programing Language का use हम दूसरी Programing Language के साथ भी कर सकते हैं। Python Programing Language को कोई भी आसानी से Learn कर सकता है और code कर सकता है। Python Programing Language  के  code fast और efficient होते हैं जिस कारण से python का use large  Tech company द्वारा उपयोग किया जाता है Tech company जैसे: Google, Amazon, Microsoft, Oracle आदि कंपनियों में किया जाता है</p><br/>
      <h2><b>History of Python in Hindi</b></h2><br/>
      <p>
       पायथन एक high level programing language है। जिसका use application and computer software बनाने में किया जाता है। Python Programing Language को 1991 में Guido Von Rossum ने devlop किया था।  Netherlands  के National Research Institute For Mathematics and Computer Science.
       Python Programing Language को 1991 में lunch किया गया था। 
तथा 1994 में python first version python 1.0 lunch किया गया था। Python का latest version Python 3.12.5 है ।
</p>  <br/>
     <h2><b>Features of Python in hindi</b></h2>
     <ul>
      <li>Easy to Learn and use.</li> 
      <li>Cross platform Janguage.</li>
      <li>Free and open source</li>
      <li> Object oriented language.</li>
      <li>GUI programming support.</li>
      <li> Interpreted language.</li>
     </ul>
     <p><b>1. Easy to Learn and use : </b>Python Programing Language का syntax बहुत easy होता है, जिस वजह से इसे सीखना आसान हो जाता है। Python का syntax और programing language like :  Java, C, C++ कि तुलना में आसान है।</p>
     <br/>
     <p><b>2. Cross platform language :</b>Python एक Cross platform language है। जिसका मतलब यह है कि हम python program को चलाने के लिए किसी भी Operating System का use कर सकते हैं। Operating System जैसे: Window, Linux, Unix, MacOS.</p>
     <br/>
     <p><b>3. Free and open source : </b>Python एक open Source Scripting Language हैं इसका use free में कर सकते हैं। इसके Source Code की download कर सकते हैं। </p><br/>
     <p><b>4. Object-Oriented Language(OOPs) : </b>Python एक Object Oriented Language है यह Classes, Object  जैसे concent को support करता है।</p><br/>
     <p><b>5. Graphic User Interface : </b>Python में GUI(Graphic User Interface) बनाने के लिए बहुत सारे module उपलब्ध है जैसे कि PyQt4, Py295 आदि।</p><br/>
     <p><b>6. portable Language :</b> Python एक portable Language
     है। जैसे अगर आपके पास python. का code window मे है तो आप same code का इस्तेमाल Linux, Unix, Mac आति में भी कर सकते हैं।</p><br/>
     <p><b>7. High Level Language :</b>Python एक High Level Language  है। </p><br/>
     <h2><b>Uses of Python in hindi</b></h2>
     <ul>
      <li>  Artificial Intelligence and Machine Learing में  Python language का use किया जाता है।</li>
      <li> python का use करने different type के application को program जाता है।</li>
      <li> Data Analytics मे भी python language का use किया जाता है।</li>
      <li> इसका use Deta  Visualization मे भी किया जाता है।</li>
      <li> Web Development and Software Development  मे भी python use किया जाता है।</li>
      <li> Backend Development  मे भी python use किया जाता है।</li>
     </ul>
     <h2><b>Advantage of Python in Hindi</b></h2><br/>
     <li>1. Python के code को read, write और explore करना  आसान है।</li>
     <li>2. इसका use free में कर सकते हैं।</li>
     <li> 3. Python एक  Open Source programming Language है।</li>
     <li>4. Python एक high speed Language है।</li>
     <li>5. यह एक portable Language है।</li><br/>
     <h2><b>Disadvantages of Python in Hindi</b></h2><br/>
     <li>1. Python Language बहुत अधिक memary का use करती है।</li>
     <li>2. Python का मुख्यत! Server Side programming Language के रूप में  use किया जाता है इसलिए हम python को client-Side और mobile Application मे नहीं देख सकते ।</li>
     <li>3. इसमे variable का data type कभी भी बदल सकता है।</li>
</div>


  </>
}

export default WhatIsPythonInHindi;