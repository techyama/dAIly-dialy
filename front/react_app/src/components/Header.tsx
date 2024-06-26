import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='bg-blue-500 text-white py-4 fixed w-full top-0'>
      <nav className='container mx-auto flex justify-between items-center px-4 max-w-full'>
        <h1 className='text-2xl font-bold'>dAIly diary</h1>
        <ul className='flex space-x-4'>
            <li><a href='#' className='hover:underline'>Home</a></li>
            <li><a href='#' className='hover:underline'>My Diary</a></li>
            <li><a href='#' className='hover:underline'>Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;