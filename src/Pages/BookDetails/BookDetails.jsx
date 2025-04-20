import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";
import { ToastContainer, toast } from 'react-toastify';


const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const booksId = parseInt(id);

  const data = useLoaderData();
  // console.log(data);

  const singleBook = data.find((book) => book.bookId === booksId);
  // console.log(singleBook);
  const {
    bookName,
    bookId,
    author,
    totalPages,
    yearOfPublishing,
    publisher,
    image,
    review,
    category,
    tags,
    rating,
  } = singleBook;


  const handleMarkAsRead = id =>{

    toast("Wow so easy!");

    addToStoredDB(id)

  }

  return (
    <div className="card card-side bg-base-100 shadow-sm m-10 space-x-10">
      <figure className="bg-gray-200 p-10">
        <img className="w-[425px] h-[564px]" src={image} alt="Book" />
      </figure>
      <div className="card-body w-1/2">
        <div className="space-y-3 ">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>

          <div className="border-y flex gap-5 p-1">
            <p>{category}</p>
          </div>
        </div>
        <div className="mb-5">
          <p className="leading-6">
            <span className="font-bold">Review:</span> {review}
          </p>
        </div>

        <div className="card-actions border-b pb-6">
          <h4 className="font-bold">Tag :</h4>
          {tags.map((tag, index) => (
            <div key={index} className="badge bg-[#23BE0A0D] text-[#23BE0A]">
              {tag}
            </div>
          ))}
        </div>

        <div className="flex gap-10 pt-5">
          <div className="space-y-4">
            <h4>Number of Pages: </h4>
            <h4>Publisher: </h4>
            <h4>Year of Publishing: </h4>
            <h4>Rating: </h4>
          </div>
          <div className="font-bold space-y-4">
            <h4>{totalPages}</h4>
            <h4>{publisher}</h4>
            <h4>{yearOfPublishing}</h4>
            <h4>{rating}</h4>
          </div>
        </div>

        <div className="space-x-3 pt-8">
          <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline">Mark As Read</button>
          <button className="btn btn-active btn-info text-white">
          <ToastContainer />
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
