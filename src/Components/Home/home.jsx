import React, { useEffect, useState } from 'react';
import './home.scss';
import video from '../../Assesttour/videobg.mp4';
import { GrLocation } from 'react-icons/gr';
import { TfiFacebook } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa';
import { IoIosList } from 'react-icons/io';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const destinations = [
        'Bora Bora',
        'Machu Picchu',
        'Great Barrier Reef',
        'Cappadocia',
        'Guanajuato',
        'Cinque Terre',
        'Angkor Wat',
        'Taj Mahal',
        'Bali'
    ];

    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Every Life requires Exploration
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search for some Fresh air!
                    </h1>
                </div>
                <div data-aos="fade-up" className="cardDiv flex">
                    <div className="destinationInput">
                        <label htmlFor="destination">Search your Destination</label>
                        <div className="input flex">
                            <select
                                id="destination"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            >
                                <option value="" disabled>Select a place</option>
                                {destinations.map((place, index) => (
                                    <option key={index} value={place}>
                                        {place}
                                    </option>
                                ))}
                            </select>
                            <GrLocation className="icon" />
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Search your Journey date</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="priceInput">
                        <label htmlFor="city"></label>
                    </div>
                    <div className="searchOptions flex">
                        <span onClick={() => navigate('/payment')}>Book Now</span>
                    </div>
                </div>
                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <TfiFacebook className="icons"/>
                        <FaInstagram className="icons"/>
                    </div>
                    <div className="leftIcons">
                        <IoIosList className="icons"/>
                        <TbApps className="icons" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
