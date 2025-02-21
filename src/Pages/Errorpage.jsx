import React from 'react';
import error from "../assets/error.jpg"
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='flex items-center p-4'>
            <Link to="/" className='bg-teal-500 rounded-md text-white p-2'> 🏡Back to Home</Link>
            <img src={error} alt="" className='w-1/2 mx-auto' />
        </div>
    );
};

export default Errorpage;