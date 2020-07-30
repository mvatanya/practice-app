import React from 'react'
import './Book.css'

const Book = ({ data: {id, title, image, price} }) => {
  console.log(image)
  return (
    <div className='col-9 mx-auto col-md-6 col-lg-4 my-3'>
      <div className='card-book'>
        {/* <img>{image}</img> */}
        <div className='img-container'>
        <img src={image}/>
        </div>
        <div className='description'>
          <div id='title'>{title}</div>
          <div>ราคา {price} บาท</div>
        </div>
      </div>
    </div>
  )
}

export default Book
