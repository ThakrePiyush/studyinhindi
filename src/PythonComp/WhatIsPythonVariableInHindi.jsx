
const WhatIsPythonVariableInHindi = () => {
  return <>
        <div className='mainpageactualDiv'>
          <h1>Python Programing Variables in Hindi : </h1>
          <p>[8:41 AM, 8/20/2024] 𝙿𝙸𝚈𝚄𝚂𝙷 𝚃𝙷𝙰𝙺𝚁𝙴</p><br />
          <center><img src="../images/pythonvariable_11zon.png" alt="pythonvariable" /></center>
          <p>Python programing language मे भी और programing language(C, C++,Java etc.) की तरह variable होते है जो किसी value या Data  को store करते है। Python मे Variables को different type से declare किया जाता है इसमें हमे Variables ka data type define करने कि जरूरत नही होती है।</p><br />
          <h2> Python variable का example : </h2>
          <p><b>1) a=5</b></p>
          <p>Explain : इस example मे ' a 'एक variable है जो कि 5 value ko store कर रहा है ओर ' = ' एक operator है जिसकी help से हम किसी भी variable मे value assign करते है। इसमें 5 एक integar है। </p>
          <p><b>2) b=2.0 </b></p>
          <p>Explain : इस example me b variable मे 2.0 को store किया गया जहा b का data type float है। 
          Python मे built in library होती है जो variable का data type automatic identify कर लेता है।</p><br />
          <h2><b>Type of variable in Python :</b></h2>
          <h3>1.Local variable</h3>
          <h3>2.Globel variable</h3>
          <p><b>1.Local variable :</b>ऐसे variable variable जिनका scope किसी special block तक ही होता है उन्हे Local variable कहा जाता है। इन Variables का use हम block के बाहर नही कर सकते है। </p><br />
          <p><b>Example :</b><br/>def my_function():<br/>
    local_var = 101  # This is a local variable<br/>
    print(local_var)<br/><br />

my_function()  # This will print: 101</p><br />
<p>Output : 101</p><br />
          <p><b>2.Globel Variable :</b> ऐसे variable जिनका scope पूरे program मे होता है या जिन Variables को हम कही पर भी use कर सकते है Globel variable कहलाते है।</p><br />
          <p><b>Example :</b> <br />
          global_var = 10<br/>

def print_global():<br/>
    print("Global variable:", global_var)  # Access the global variable<br/>

print_global() <br/>
          </p><br />
          <p>Output : 10</p><br />
          
          <h3><b>Variable Declaration Rules in Python :</b></h3>
          <ul>
            <li>1.Variable का name हमेशा alphabet से start होना चाहिए।</li>
            <li>2.variable name मे कोई special character(@, #,₹ etc. ) नही होना चाहिए।</li>
            <li>3.Variable name किसी number से start नही होना चाहिए।</li>
            <li>4.Variable name मे (_) underscore का उस कर सकते है।</li>
            <li>5.Variable का name हमेसा meaning full होना चाहिए।</li>
            <li>6.Variable का name Python के किसी reserved keyword(int, float, char) से match नही होना चाहिए।</li>
          </ul>
        </div>
  </>
}

export default WhatIsPythonVariableInHindi;