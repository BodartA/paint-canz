import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import StashCards, { CreateVaultCard } from '../components/StashCards';

interface Stash {
  _id: string,
  name: string,
  paints: { name: string, brand: string, ref: string }[]
}


const Stash = () => {

  const [stash, setStash] = useState<Stash[]>([])

  useEffect(() => {

    const fetchStashData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/vault')
        const data = await res.json()

        setStash(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchStashData()
  }, [])

  return (
    <div className='flex flex-col min-h-screen w-screen'>
      <Navbar />
      <h1 className=' flex justify-center p-4 font-extrabold font-montserrat text-5xl text-center'>Welcome to your stash !<br /> Let's see what's in there.</h1>
      <div className=' flex flex-row flex-wrap p-4 gap-4 justify-center'>
        {
          stash.map((vault, index) => (
            <Link key={index} to={`/vault/${vault._id}`}>
              <StashCards index={index} name={vault.name} totalPaints={vault.paints.length} />
            </Link>
          ))
        }

        <Link to='/newvault'><CreateVaultCard /></Link>
      </div>
    </div >
  );
};

export default Stash;