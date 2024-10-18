import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <>
    <nav className="navbar  domain uppernav">
      <div className="container">
        
        <Link className="navbar-brand Learn-computer"> <img src='../images/Study in.png' alt="logo" style={{height:'59px',width:'135px'}} /></Link>
        <p className='piyush'>(Computer Notes in Hindi )<br/>
         <a href="https://t.me/Learn_With_Piyush123"><FaTelegram  className="icons"/></a>
         <a href=""><FaLinkedin className="icons" /></a>
         <a href="https://youtube.com/@piyushthakre?si=F2KTyTNWF21jFUaE"><FaYoutube className="icons" /></a>
         </p>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
</>
}


export default Navbar;