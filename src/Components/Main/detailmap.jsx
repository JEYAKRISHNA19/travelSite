
import React from 'react'
import { useParams } from 'react-router-dom'
import './detailmap.css'

const Detailmap = ({ destinations }) => {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id.toString() === id);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="destination-details">
      <h1>{destination.details.names}</h1>
      <img src={destination.details.bg} alt={destination.details.names} />
      <img src={destination.details.bg2} alt={`${destination.details.names}`} />
      <p>{destination.details.context}</p>
    </div>
  );
};

export default Detailmap
