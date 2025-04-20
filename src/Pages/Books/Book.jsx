import React, { use, useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';


const Book = (/*{booksPromise}*/ {book}) => {

    // fetch with promise 
    // const books = use(booksPromise);
    // console.log(books);
  // ------------------------------

  // console.log(book);
  const {bookName,bookId,author,image,totalPages,review,category,tags,rating}=book;
    
    return (
<Link to={`/bookDetails/${bookId}`}>
<div>
            <div className="card transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl rounded-xl cursor-pointer bg-base-100 w-96 shadow-sm p-5">
  <figure className='bg-[#F3F3F3] p-10'>
    <img className='w-32 h-40'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className="card-actions ">
    {
      tags.map((tag,index) =><div key={index} className="badge bg-[#23BE0A0D] text-[#23BE0A]">{tag}</div>)
    }
    </div>

    <h2 className="card-title">
        {bookName}
    </h2>
    <p className='text-gray-600'>By : {author}</p>
    <p className='text-gray-600'>pages: {totalPages}</p>

    <div className='border-dashed border-t py-2 border-gray-300 text-base flex items-center justify-between'>
    <span>
        {category}
    </span>
    <span className='flex items-center gap-2'>{rating}<FaRegStar /></span>
    </div>
  </div>
</div>
        </div>
</Link>
    );
};

export default Book;