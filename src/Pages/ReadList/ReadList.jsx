import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Books/Book';


const ReadList = () => {

    const data =useLoaderData();

    const [readBook,setReadBook] = useState([])
    const [sort,setSort]=useState("")

    useEffect(() =>{
        const storedBookData = getStoredBook()
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
        
        const myReadList = data.filter(book =>ConvertedStoredBooks.includes(book.bookId) )

        setReadBook(myReadList);
        
    },[])
    
const handleSort = (type)=>{

    setSort(type)
    if (type==="pages") {
        
        const sortedByPage =[...readBook].sort((a,b)=>a.totalPages-b.totalPages)
        setReadBook(sortedByPage)
    }

    if(type === "ratings"){
        const sortedByRatings =[...readBook].sort((a,b)=>a.ratings-b.ratings )
        setReadBook(sortedByRatings)
    }

}

    return (
        <div>
            <div className='bg-gray-200 p-5 rounded-2xl my-5'>
                <h1 className='text-3xl font-bold text-center'>Books</h1>
            </div>



            <details className="dropdown place-self-center ">
  <summary className="btn m-1">Sort By : {sort && sort}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
    <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
  </ul>
</details>


  <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

            <p className='inline-block'>Book I Read </p> <p className='inline'>
         {
                readBook.length
            }</p>

    <TabPanel className='mt-4'>
      {
        readBook.map(book => <div key={book.bookId} className='my-5 flex gap-5'>
            <div>
            <img className='w-40' src={book.image} alt="" />
            </div>
            <div>
                <h3>name {book.bookName}</h3>
                <p> publisher :{book.publisher}</p>
                <p>publish year{book.yearOfPublishing}</p>
                <p>totalPages {book.totalPages}</p>
                <p>rating {book.rating}</p>
            </div>
        </div>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Wishlist</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ReadList;