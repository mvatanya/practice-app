import React from 'react';
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({ item }) => {
  return(
    <Link className="Card-Link" to={`/practices/${item.practiceTopic}`}>
    <div className="Card col mb-4">
      <div className="card h-100">
        <div className="Card-Header card-header">
        {item.name}
        </div>
        <div className="card-body">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
    
  </Link>
  )
}

export default Card;