
import { useSelector } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import '../python.css'

const Dsa  = () => {

    const dsaSlice =  useSelector(Store=> Store.dsaSlice)
    const scrollTop = () => {
       window.scrollTo({top:0 ,behavior :'smooth'});
    }

return <>
<Outlet></Outlet>
<center><h1><b>All Data Structures and Algorithm notes in hindi</b></h1></center>
<div className='actualDiv'>  
       {dsaSlice.map((dsaSlice)=>
        <div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover" style={{width: '300px' ,overflow: 'hidden'}} key={dsaSlice.dsaId}>
        <div className="px-2 py-2">
          <div className='date-id'>
          <p className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            {dsaSlice.dsaId}
          </p>
          <p>{dsaSlice.dsaDate}</p>
          </div>
          <h1 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" >
            {dsaSlice.dsaTitle}
          </h1>
          <p className="mb-1">
            {dsaSlice.dsaPara}
          </p>
        </div>
        <Link to={dsaSlice.dsaLink} onClick={scrollTop} className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
          Read More
        </Link>
      </div>
      )}
      
</div>    
    </>
}

export default Dsa;