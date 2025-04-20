import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex items-center justify-around p-12 bg-[#1313130D] rounded-2xl my-8 '>
            <div className='space-y-10 ml-24'>
                <h1 className='text-[#131313] font-bold text-5xl leading-snug'>Books to freshen up <br />your bookshelf</h1>
                <button className='btn text-white bg-[#23BE0A]'>View The List</button>
            </div>
            <div>
                <img className='w-3/5' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;