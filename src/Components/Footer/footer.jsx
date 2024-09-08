import React,{useEffect,useState} from 'react'
import './footer.scss'
import footervideo from '../../Assesttour/footervideo.mp4'
import { BsSend } from "react-icons/bs"
import {MdTravelExplore} from 'react-icons/md'
import { RxTwitterLogo } from "react-icons/rx"
import { FiYoutube } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa6"
import { FaTripadvisor } from "react-icons/fa"
import { FiChevronsRight } from "react-icons/fi"
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';
const Footer=()=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    const [email, setEmail] = useState();

    const subscription = (event) => {
        event.preventDefault();
        if (!email) {
            alert("Email is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return;
        }
        axios.post("http://localhost:8081/footer", { email })
            .then(res => {
                if (res.data.Status === "Success") {
                    alert("Subscription successful!");
                    window.location.reload();  
                } else {
                    alert(res.data.Error);
                }
            })
            .catch(err => console.log(err));
    };
    return(
        <>
       <section id='about' className='footer'>
        <div className="videoDiv">
            <video src={footervideo} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="setContent container">
            <div data-aos="fade-right" className="contactDiv flex">
                <div  className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with Us</h2>
                </div>
                <div className="inputDiv flex">
                         <input 
                            type="email"
                            className="email"
                            placeholder='Enter Mail for Subscription'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className='btn flex' onClick={subscription} type='submit'>
                            SEND <BsSend className="icon" />
                        </button>
                    </div>


            </div>
            <div data-aos="fade-up" className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#footer" className='logo flex'><MdTravelExplore className="icon"/>TRAVEL</a>
                    </div>

                    <div data-aos="fade-up" className="footerParagraph">
                    It seems that the more places I see and experience, the bigger I realize the world to be. The more I become aware of, the more I realize how relatively little I know of it, how many places I have still to go, how much more there is to learn
                    </div>

                    <div data-aos="fade-up"className="footerSocials flex">
                    <RxTwitterLogo className="icon"/>
                    <FiYoutube className="icon" />
                    <FaInstagram  className="icon"/>
                    <FaTripadvisor className="icon" />
                    </div>
                </div>

                

                <div className="footerLinks grid">
                    {/*Group one */}

                    <div  data-aos="fade-up" data-aos-duration="3000"  className="linkGroup">
                        <span className="groupTitle">OUR AGENCY</span>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Services
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Agency
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Insurance 
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Payment 
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Tourism 
                        </li>

                    </div>

                    {/*Group two */}
                    
                    <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                        <span className="groupTitle">PARTNERS</span>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Partners
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Bookings
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Rentcars 
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Trivago 
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Tripadvisor 
                        </li>

                    </div>

                    {/*Group three */}

                    <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                        <span className="groupTitle">LAST MINUTE</span>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        London
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        California
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Indonesia 
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Europe 
                        </li>

                        <li className="footerList flex">
                        <FiChevronsRight className="icon" />
                        Oceania 
                        </li>

                    </div>


                </div>
                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>@COPYRIGHTS RESERVED -ABC Resources</small>
                </div>
                
            </div>
        </div>
       </section>
       </>
    )
}

export default  Footer