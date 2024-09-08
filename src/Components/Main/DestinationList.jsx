
import React,{useEffect}from 'react';
import { Link } from 'react-router-dom';

import {HiLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardList} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css' 
import './main.scss'

const DestinationList = ({ destinations }) => {
    
    useEffect(()=>{
        Aos.init({duration:2000})

     },[])
  return (
    
    <section id='packages' className="main container section">
    <div className="secTitle">
        <h3  data-aos="fade-right" className="title">
            Most Visited Destinations
        </h3>
    </div>
      <div data-aos="fade-up" className="secContent grid">
        {destinations.map(destination => (
          <div key={destination.id} className="singleDestination">
            <div className="imageDiv">
              <img src={destination.imgSrc} alt={destination.destTitle} />
              
            </div>
            <div data-aos="fade-up" className="cardInfo">
              <h4 className="destTitle">{destination.destTitle}</h4>
              <span className="continent flex">
              <HiLocationMarker className="icon" />
              <span className="name">{destination.location}</span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span><small>{destination.grade}</small></span>
                </div>
                <div className="price">
                    <h5>{destination.fees}</h5>
                    </div>
              </div>
              <div className="desc">
                <p>{destination.description}</p>
                </div>
              <Link to={`/details/${destination.id}`} className="btn flex">
                View Details<HiOutlineClipboardList className="icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default DestinationList;
