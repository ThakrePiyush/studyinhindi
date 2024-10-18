
const PatternInDataMining = () => {
   return <div className="mainpageactualDiv">

    <h1><b>Pattern in data mining in hindi (Data Mining patterns)</b></h1><br />
    <center><img src="../images/dataminingpattern_11zon.png" alt="dataminingpattern." /></center>
    <p>Data Mining में pattern का महत्व बहुत बड़ा है क्योंकि ये pattern हमें data में hidden information और रुझानों (trends) को समझने में help करते हैं। </p>

    <h2>Types of data mining patterns in hindi</h2>
    <p>Data mining patterns two type के होते है।</p>
    <h3><b>Descriptive patterns : </b></h3>
    <p>इसका उद्देश्य past के data का Analysis करके यह समझना होता है कि क्या हुआ और क्या हो रहा है।
    यह data visualization, reporting, और dashboards के माध्यम से किया जाता है।</p>
    <ul>
      <li>Clustering Patterns</li>
      <li>Association Patterns</li>
      <li>Correlations</li>
    </ul>
    <p><b>a) Clustering Patterns:</b>
    Clustering एक process है जिसमें data points को Equality के आधार पर समूहों (clusters) में divide किया जाता है। प्रत्येक Cluster में data points आपस में अधिक समान होते हैं, लेकिन दूसरे clusters से different होते हैं।</p>
    <p><b>Example : </b>एक ही age group के लोग समान product खरीदते हैं</p>
    <p>Association Patterns:
    ये Patterns data में item के बीच संबंधों (relationships) को दर्शाते हैं। 
    
    Example के लिए, अगर कोई customer bread खरीदता है, तो वह butter भी खरीद सकता है। यह पैटर्न "Market     Basket analysis" में उपयोग होता है, जहां आप जानते हैं कि कौन से product अक्सर एक साथ खरीदे जाते     हैं।</p>
    <p><b>Example : </b>अगर customer X item खरीदता है, तो Y item खरीदने की Possibility अधिक है।</p><br />

    <h3><b>Predictive patterns :</b></h3>
    <p>इसका उद्देश्य Future में क्या हो सकता है, इसका अनुमान लगाना होता है।
    इसमें machine learning, time series analysis, और predictive modeling technique का उपयोग होता है।</p>
    <ul>
      <li>Outlier Detection</li>
      <li>Clustering Patterns</li>
      <li>Regression Patterns</li>
      <li>Sequential Patterns</li>
    </ul>

    
    <p><b>Outlier Detection:</b>
      Outlier ऐसे data points होते हैं जो simple pattern से अलग होते हैं। इन्हें Identify करना important होता है क्योंकि ये data में छिपी हुई irregularities या possible errors की ओर Signal कर सकते हैं।</p>
      <p><b>Example : </b>किसी customer का खर्चा सामान्य से बहुत अधिक होना</p><br />
      <p><b>Clustering Patterns:</b>
      Clustering एक process है जिसमें  data points को Equality के आधार पर समूहों (clusters) में divide किया जाता है। प्रत्येक cluster में data point आपस में अधिक समान होते हैं, लेकिन दूसरे clusters से भिन्न होते हैं।</p>
      <p><b>Example : </b>Sales का level temperature के बढ़ने के साथ बढ़ता है </p><br />
   </div>
}

export default PatternInDataMining;