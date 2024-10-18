import { Link } from 'react-router-dom';

const Footer  = () => {
   return <>
   <footer className='footer'>
    <p>Disclaimer :- &copy; 2024 Our Company. All rights reserved.</p>
    <Link className='footerNav' to="/Terms&Conditions">Terms and Conditions</Link>
    <Link className='footerNav' to="/Privacy-Policy">Privacy-Policy</Link>
  </footer>
  </>
}

export default Footer;