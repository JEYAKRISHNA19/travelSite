import React,{useState} from 'react'
import './navbar.scss'
import {MdTravelExplore} from 'react-icons/md'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from "react-icons/tb"
import '../../LoginRegister'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Navbar =()=>{
   
    const [active, setActive]= useState('navBar')
    const showNav =()=>{
        setActive('navBar activeNavbar')
     }
     const removeNavbar =()=>{
        setActive('navBar')
     }

     const navigate= useNavigate()
    return(
     <>
      <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <a href="#logoflex" className="logo flex">
                    <h1><MdTravelExplore className="icon"/> Travel</h1>                    
                </a>
            </div>
            <div className={active}>
               <ul className="navLists flex">
                <li className="navItem">
                   <a href="#home1" className="navLink">Home</a> 
                </li>
               


                <li className="navItem">
                   <a href="#packages" className="navLink">Packages</a> 
                </li>

                <li className="navItem">
                   <a href="#about" className="navLink">About</a> 
                </li>

                <li className="navItem">
                   <a href="#contact" onClick={()=>navigate('contactform')} className="navLink">Contact</a> 
                </li>

                <button className='btn'> <Link to='/#register'></Link>
                <a href="#register" onClick={()=> navigate('register')} >Signup</a>
                </button>
                
                </ul> 

                <div onClick={removeNavbar} className="closeNavBar">
                <IoIosCloseCircle className="icon"/></div>
                 </div>
                 <div  onClick={showNav} className="toggleNavbar">
                  <TbGridDots className= "icon" /></div>
        </header>
      </section>
      </>
    )
}

export default  Navbar 