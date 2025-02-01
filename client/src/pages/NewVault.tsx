import React from 'react';
import Navbar from '../components/Navbar';

const NewVault = () => {
  return (
    <div className=' flex flex-col w-screen min-h-screen'>
      <Navbar />
      <div className=' flex flex-col p-4 items-center font-montserrat gap-4'>
        <h1 className=' text-5xl font-extrabold text-center'>Create a new Vault <br /> and start adding your paints in it.</h1>
        <div className=' bg-black rounded-lg'>
          <form className=' flex flex-col p-4 bg-cream rounded-lg border-2 gap-2 -translate-y-1'>
            <label className=' font-bold'>Name</label>
            <input className='border-b-[1px] focus:outline-none'
              placeholder='Red House Drawers'
            >
            </input>
            <button className=' bg-black rounded-lg cursor-pointer mt-4'>
              <div className=' flex justify-center border-2 rounded-lg p-3 font-montserrat font-bold bg-cream -translate-y-1 hover:translate-y-0 transition-all'>
                Create
              </div>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default NewVault;