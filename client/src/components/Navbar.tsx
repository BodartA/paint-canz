import React from 'react';
import { Link } from 'react-router';
import { ActionButton, PrimaryButton } from './Buttons';
import logo from '../assets/GWPaintPot.png'

const Navbar = () => {
  return (
    <header className=' sticky top-0 h-[110px] font-montserrat bg-sweet-purple border-b-[2px] border-dotted flex flex-row items-center p-4 justify-between'>
      <Link to='/' className=' flex flex-row items-center gap-2 font-montserrat tracking-wide'>
        <img src={logo} alt='logo' className=' size-[56px] object-contain'></img>
        <h1 className=' font-montserrat font-extrabold italic tracking-tight text-4xl'>Paint Canz</h1>
      </Link>
      <nav className=' flex flex-row gap-4 font-montserrat font-medium text-lg'>
        {/* <a className='hover:underline'><Link to='/'>Home</Link></a>
        <a className='hover:underline'><Link to='/'>Pricing</Link></a>
        <a className='hover:underline'><Link to='/'>About</Link></a> */}
      </nav>
      <div className=' flex flex-row gap-2'>
        <PrimaryButton title='Sign Up' />
        <Link to='/stash'><ActionButton title='Let&apos;s List' /></Link>
      </div>
    </header>
  );
};

export default Navbar;