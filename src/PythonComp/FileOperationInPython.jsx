
const FileOperationInPython = () => {
   return <div className="mainpageactualDiv">

    <h1><b>File operation in python in hindi</b></h1>
    <br />
    <p>python programing मे file operation काफी easy था सरल है। जिनकी help से files को read या write कर सकते है । Python programing में कुछ file Operation निम्न लिखित है।</p><br />

    <h3>1) Open():-</h3>
    <p>इस Function का use File को open करने के लिए काम आता है।</p>
    <p><b>Syntax :-</b>File = Open ('file.txt', 'r')</p><br />

    <h3>2) Read():-</h3>
    <p>इस Function का use file से Data read या पढ़ने के लिए use किया जाता है।</p>
    <p><b>Syntax :-</b>content = file.read()</p><br />

    <h3>3) Readline():-</h3>
    <p> इस Function का use File से  किसी एक line को पढ़ने के लिए काम आता है</p>
    <p><b>Syntax:-</b>line = file.readline()</p><br />

    <h3>4) Readlines():-</h3>
    <p> इस Function का use file मे उपस्थित सभी Data को read करने के लिए इसका उपयोग किया जाता है।</p>
    <p><b>Syntax:-</b>lines = file.readlines()</p><br />

    <h3>2) write() :-</h3>
    <p>इस Function का use file मे Data की write या लिखने  के लिए किया जाता है। </p>
    <p><b>Syntax:- </b>file. write("Data") </p><br />
    
    <h3>3) close():-</h3>
    <p>इस function का use file को clase या बंद करने के लिए किया जाता</p>
    <p><b>Syntax:- </b>file.close()</p>


   </div>
}

export default FileOperationInPython;