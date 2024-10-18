import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  
  const subName =  useSelector(Store=> Store.subName)
  
  return <>
 <div className="row row-cols-1 row-cols-md-3 g-4 ">
  
    {subName.map((subName)=> 
    
  <div className="col" key={subName.sId}>
    <div className="card subCards" style={{width:'17rem', height:'17rem'} }>
       <span className="sId"><h2>{subName.sId}</h2></span>
    
      <div className="card-body cardbody">
        <b><h5 className="card-title">{subName.sName}</h5></b>
        <p className="card-text">{subName.sPara}</p>
        <Link to={subName.sName} className="btn btn-primary Go-somewhere">Go somewhere</Link>
      </div>

    </div>
  </div>
  )}
  </div> 
  
  </>
}

export default Home;