import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FormButton, LogoBButton } from '../components/Buttons';
import { Link } from 'react-router';
import { Chrome, Github } from 'lucide-react';
import { PasswordForm, TextForm } from '../components/Forms';

interface User {
  email: string,
  name: string,
  password: string
}

const SignUpPage = () => {

  const [user, setUser] = useState<User>({ email: "", name: "", password: "" })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user.email || !user.name || !user.password) {
      setError("Empty field(s)")
      return
    }
    setError("")

    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
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
    <div className=' flex flex-col min-h-screen w-screen'>
      <Navbar />

      <div className=' flex flex-1 flex-col items-center justify-center font-montserrat gap-4'>
        <div className=' bg-black rounded-lg'>

          <div className='flex flex-col border-2 border-black w-[400px] bg-cream rounded-lg p-4 gap-4 -translate-y-1'>

            <h1 className=' font-bold text-2xl uppercase text-center'>Sign Up</h1>

            <form className=' flex flex-col gap-2' onSubmit={handleSubmit}>

              <TextForm title='email' placeholder='makari@gorkandmork.com' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
              <TextForm title='name' placeholder='Makari' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
              <PasswordForm title='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
              {/* <PasswordForm title='confirm password' /> */}

              <FormButton title='Sign Up' />

            </form>

            <div className=' flex flex-row gap-1 text-sm'>
              <p>Already have an account ?</p>
              <p className=' font-semibold'><Link to='/login'>Login</Link></p>
            </div>

            <div className=' flex flex-row items-center gap-2'>
              <span className=' flex-1 h-0.5 bg-black'></span>
              <p className=' uppercase font-semibold'>Or</p>
              <span className=' flex-1 h-0.5 bg-black'></span>
            </div>

            <div className=' flex flex-col'>
              <LogoBButton title='Google' Icon={Chrome} />
              <LogoBButton title='Github' Icon={Github} />
            </div>

          </div>

        </div>
        {error && (
          <div>
            <aside className=' italic text-red-500 font-semibold'>We need more details ...</aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;