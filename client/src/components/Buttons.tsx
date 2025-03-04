import React from 'react';
import { ArrowRight } from 'lucide-react';

const Buttons = () => {
  return (
    <div>

    </div>
  );
};

export default Buttons;

export const PrimaryButton = ({ title = "Button" }) => {
  return (
    <button className=' bg-black rounded-lg cursor-pointer'>
      <div className=' flex border-2 rounded-lg p-3 font-montserrat font-bold z-10 bg-cream -translate-y-1 hover:translate-y-0 transition-all'>
        {title}
      </div>
    </button>
  )
}

export const FormButton = ({ title = "Button" }) => {
  return (
    <button className=' bg-black rounded-lg cursor-pointer mt-4' type='submit'>
      <div className=' flex justify-center border-2 rounded-lg p-3 font-montserrat font-bold bg-pop-green -translate-y-1 hover:translate-y-0 transition-all'>
        {title}
      </div>
    </button>
  )
}

export const ActionButton = ({ title = "Button" }) => {
  return (
    <button className=' bg-black rounded-lg cursor-pointer'>
      <div className=' flex border-2 rounded-lg p-3 font-montserrat font-bold z-10 bg-pop-green -translate-y-1 hover:translate-y-0 transition-all'>
        {title}
        <span className=' pl-1'>
          <ArrowRight />
        </span>
      </div>

    </button>
  )
}

export const LogoBButton = ({ title = "Button", Icon = ArrowRight }) => {
  return (
    <button className=' bg-black rounded-lg cursor-pointer mt-4' type='submit'>
      <div className=' flex flex-row gap-2 justify-center border-2 rounded-lg p-3 font-montserrat font-bold bg-cream -translate-y-1 hover:translate-y-0 transition-all'>
        <span>
          <Icon />
        </span>
        {title}
      </div>
    </button>
  )
}
