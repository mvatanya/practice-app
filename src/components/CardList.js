import React from 'react';
import Card from './Card';

const CardList = ({ practices }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      {practices.map((practice,idx) => (
        <Card
        item={practice}
        key={idx}
        // idx={idx}
      />
      ))}
    </div>  
  )
}

export default CardList;