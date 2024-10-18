
import { useSelector } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import '../python.css'

const Dsa  = () => {

    const dbmSlice =  useSelector(Store=> Store.dbmSlice)
    const scrollTop = () => {
       window.scrollTo({top:0 ,behavior :'smooth'});
    }

return <>
<Outlet></Outlet>
<center><h1><b>All Database Management System(DBMS) notes in hindi</b></h1></center>
<div className='actualDiv'>  
       {dbmSlice.map((dbmSlice)=>
        <div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover" style={{width: '300px' ,overflow: 'hidden'}} key={dbmSlice.dbmId}>
        <div className="px-2 py-2">
          <div className='date-id'>
          <p className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            {dbmSlice.dbmId}
          </p>
          <p>{dbmSlice.dbmDate}</p>
          </div>
          <h1 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" >
            {dbmSlice.dbmTitle}
          </h1>
          <p className="mb-1">
            {dbmSlice.dbmPara}
          </p>
        </div>
        <Link to={dbmSlice.dbmLink} onClick={scrollTop} className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
          Read More
        </Link>
      </div>
      )}
      
</div>    
    </>
}

export default Dsa;