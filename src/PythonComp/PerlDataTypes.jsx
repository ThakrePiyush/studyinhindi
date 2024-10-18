
const PerlDataTypes = () => {
  return   <>
  <div className="mainpageactualDiv">

  <h1><b>Perl Data Type in Hindi: (perl data type क्या है)</b></h1>
  <center><img src="../images/PERLDATATYPE_11zon.png" alt="PERLDATATYPE_11zon" /></center>
  <p> Perl एक Loosely Type की गयी language है perl interpreter खुद Data type Select करता है इसलिए Perl Programming & Data Type को specity करने की कोई आवश्यकता नहीं होती है।</p><br />
   <b>Perl Programming Language में मुख्य रूप से तीन Data Type होते है।</b>
   <ul>
     <b><li>1) Scalars</li>
     <li>2) Arrays</li>
     <li>3) Hashes</li></b>
   </ul>
   <h4><b>1) Scalars -</b></h4>
   <p>Perl Scalars एक Single Data item है वे सरल variables जो एक चिन्ह ($) से पहले होते है। एक scalars (number, Reterence या string )हो सकता है।</p>
   <p><b>Example :<br /> $age = 12; <br />$name = 'piyush';
                
   </b></p><br />
   <h4><b>2) Perl Arrays -</b></h4>
   <p>Perl Arrays Scalars के एक Order की List होते है जो (@) चिन्ह से पहले होते है इन्हें इनके Index number के द्वारा access  किया जाता है। जो कि 0  से शुरु होते हैं।</p>
   <p><b>Example :- <br />
     @ages = (32,43,23);<br />
     @names = ("Harsh","Srajan","Kisan");
   </b></p><br />
   <h4><b>3) Perl Hashes-</b></h4>
   <p>Perl Hash Key value pair का एक

   अनियंत्रित संग्रह है वे (%) चिन्ह से
   
   पहले शुरू होते है और इन्हें Key के द्वारा access
   
   किया जाता है।</p>
   <p><b>Example :- <br />
    %data = (23,'rgpv','xyz',45,45.34);
   </b></p>

   </div>
   </> 
}

export default PerlDataTypes;