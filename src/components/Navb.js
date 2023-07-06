import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { scroller } from 'react-scroll';
import Logo from '../assets/logo.png';

const Navb = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "services"
    },
    {
      id: 4,
      link: "portfolio"
    },
    {
      id: 5,
      link: "contact"
    },
  ];

  const handleScrollTo = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 300,
      offset: -50, // Offset for fixed header, adjust as needed
    });
    setNav(false); // Close the mobile navigation menu after clicking a link
  };

  return (
    <div className='flex justify-between items-center w-full h-24 fixed px-4 z-50 bg-black'>
      <div>
        {/* <h1 className='text-5xl font-signature ml-2'>Adediran</h1> */}
        <a href='#'>
            <img src={Logo} alt='' width='120px' />
        </a>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize hover:scale-105 duration-200'>
            <button className='capitalize' onClick={() => handleScrollTo(link)}>{link}</button>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10  text-gray-800 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 bg-slate-50 left-0 w-full h-screen text-gray-800'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl' onClick={() => handleScrollTo(link)}>
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navb;