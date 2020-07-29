import React from 'react';
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({ item }) => {
  return(
    <Link class="Card-Link" to={`/practices/${item.practiceTopic}`}>
    <div class="Card col mb-4">
      <div class="card h-100">
        <div class="Card-Header card-header">
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