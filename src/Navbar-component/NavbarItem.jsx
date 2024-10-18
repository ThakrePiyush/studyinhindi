import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const NavbarItem = () => {
  
   const subName =  useSelector(Store=> Store.subName)
   
   return <>
   <nav className="navbar navbar-expand-lg bg-primary main-navbar">
       <div className="container-fluid">
       <Link className="navbar-brand" to='/' >Home</Link>
          {subName.map((subName)=>
               <Link className="navbar-brand" to={subName.sName} key={subName.sId}>{subName.sName}</Link>
          )}
          <Link className="navbar-brand" to="/about">About</Link>
          <Link className="navbar-brand" to="/contact">Contact</Link>
       </div>
    </nav>
    </>
}

export default NavbarItem;