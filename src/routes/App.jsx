
import Footer from "../FooterComponent/Footer"
import NavbarItem from '../Navbar-component/NavbarItem'
import Navbar from '../Navbar-component/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  
  
  return (
    <>
         <Navbar></Navbar>
         <NavbarItem></NavbarItem>
         <Outlet/>   
         <Footer></Footer>
    </>  
  )
}

export default App
