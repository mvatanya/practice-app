import React from "react";
import Book from '../Book/Book'
import { BooksData } from '../../data/BooksData/BooksData'

import './BooksCollection.css'

const BooksCollections = () => {
  let allData = BooksData;

  return (
    <div className="books-container">
      <div className="row">
      {allData.map(book =><Book data={book} />)}
      </div>
    </div>
  );
}

export default BooksCollections;
