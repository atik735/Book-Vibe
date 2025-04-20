import React, { Suspense, useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

    // fetch with useEffect

     const [allBooks,setAllBooks] = useState([])
     useEffect(() =>{
       fetch("booksData.json").then(res => res.json())
         .then(data => setAllBooks(data))
    },[])

    // fetch with promise 

    // const booksPromise = fetch("booksData.json").then(res => res.json())


    return (
        <div className='my-20'>
            <h2 className='text-center text-3xl font-semibold mb-5'>Books</h2>

                {/* fetch with promise  */}
                {/* <Suspense fallback={<h1>Loading.....</h1>}>
                <Book booksPromise={booksPromise}></Book>
                </Suspense> */}


                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-14 items-center place-self-center'>
                    {
                        allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>

        </div>
    );
};

export default Books;