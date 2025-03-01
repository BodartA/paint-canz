import React from 'react';

interface InputFieldProps {
  title: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
}

const Forms = () => {
  return (
    <div>

    </div>
  );
};

export default Forms;

export const PasswordForm: React.FC<InputFieldProps> = ({ title, value, onChange }) => {
  return (
    <>
      <label className=' font-bold text-sm uppercase'>{title}</label>
      <input className='border-b-[1px] focus:outline-none'
        id={title}
        name={title}
        value={value}
        type='password'
        onChange={onChange}
      >
      </input>
    </>
  )
}

export const TextForm: React.FC<InputFieldProps> = ({ title, placeholder, value, onChange }) => {
  return (
    <>
      <label className=' font-bold text-sm uppercase'>{title}</label>
      <input className='border-b-[1px] focus:outline-none'
        placeholder={placeholder}
        id={title}
        name={title}
        value={value}
        type='text'
        onChange={onChange}
      >
      </input>
    </>
  )
}