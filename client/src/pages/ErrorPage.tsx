import React from 'react';
import messy from '../assets/messy.png'
import Navbar from '../components/Navbar';
const ErrorPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-screen'>
      <div className='flex flex-1 flex-col items-center justify-center p-2'>
        <h1 className=' flex justify-center p-4 font-extrabold font-montserrat text-6xl text-center'>Oooops !</h1>
        <h2 className=' flex justify-center p-4 font-extrabold font-montserrat text-3xl text-center'>It seems you're lost</h2>
        <img src={messy} alt='messy' className='size-fit'></img>
      </div>

    </div>
  );
};

export default ErrorPage;