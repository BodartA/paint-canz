import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router';
import { FormButton, LogoBButton } from '../components/Buttons';
import { Chrome, Github } from 'lucide-react';
import { PasswordForm, TextForm } from '../components/Forms';

const LoginPage = () => {
  return (
    <div className=' flex flex-col min-h-screen w-screen'>
      <Navbar />

      <div className=' flex flex-1 flex-col items-center justify-center font-montserrat'>
        <div className=' bg-black rounded-lg'>

          <div className='flex flex-col border-2 border-black w-[400px] bg-cream rounded-lg p-4 gap-4 -translate-y-1'>

            <h1 className=' font-bold text-2xl uppercase text-center'>Login</h1>

            <form className=' flex flex-col gap-2'>
              <TextForm title='email' placeholder='makari@gorkandmork.com' />
              <PasswordForm title='password' />
              <FormButton title='Login' />

            </form>

            <div className=' flex flex-row gap-1 text-sm'>
              <p>Don't have an account yet ?</p>
              <p className=' font-semibold'><Link to='/signup'>Sign Up</Link></p>
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
      </div>
    </div>
  );
};

export default LoginPage;