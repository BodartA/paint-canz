import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Vault } from 'lucide-react';

interface Vault {
  name: string
}

const NewVault = () => {

  const [vault, setVault] = useState<Vault>({ name: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:3000/api/vault", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vault)
      })

      if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData?.message || 'Request failed with status ' + res.status;
        throw new Error(errorMessage);
      }

      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=' flex flex-col w-screen min-h-screen'>
      <Navbar />
      <div className=' flex flex-col p-4 items-center font-montserrat gap-4'>
        <h1 className=' text-5xl font-extrabold text-center'>First of all<br />create a new Vault.</h1>
        <div className=' bg-black rounded-lg'>
          <form className=' flex flex-col p-4 bg-cream rounded-lg border-2 gap-2 -translate-y-1' onSubmit={handleSubmit}>
            <label className=' font-bold'>Name</label>
            <input className='border-b-[1px] focus:outline-none'
              placeholder='Red House Drawers'
              id='name'
              name='name'
              type='text'
              value={vault?.name}
              onChange={(e) => setVault({ ...vault, name: e.target.value })}
            >
            </input>
            <button className=' bg-black rounded-lg cursor-pointer mt-4' type='submit'>
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