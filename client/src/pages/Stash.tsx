import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import StashCards, { CreateVaultCard } from '../components/StashCards';

interface Stash {
  name: string,
}


const Stash = () => {

  const [stash, setStash] = useState<Stash[]>([])

  useEffect(() => {

    const fetchData = async () => {
      try {

      } catch (error) {

      }
    }
    fetchData()
  }, [])

  return (
    <div className='flex flex-col min-h-screen w-screen'>
      <Navbar />
      <h1 className=' flex justify-center p-4 font-extrabold font-montserrat text-5xl text-center'>Welcome to your stash !<br /> Let's see what's in there.</h1>
      <div className=' flex flex-row p-4 gap-4 justify-center flex-grow'>
        <Link><StashCards /></Link>
        <Link to='/newvault'><CreateVaultCard /></Link>
      </div>
    </div >
  );
};

export default Stash;