import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../assets/logo.png';
// import Logo2 from '../assets/logo5.png'
import { Link } from 'react-scroll';
import { scroller } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        // setNav(false);
    };

    const handleScrollTo = (id) => {
        scroller.scrollTo(id, {
          smooth: true,
          duration: 300,
          offset: -50, 
        });
        setNav(false); // Close the mobile navigation menu after clicking a link
      };
    
  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
        {/* <h1 className="w-full text-3xl font-bold">Hello</h1> */}
        <Link to='#' alt='logo'>
            <img src={Logo} alt='' width='120px' />
        </Link>
        <ul className="hidden  md:flex">
            <Link  to='home' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className="p-4">Home</li></Link>
            <Link  to='about' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className="p-4">About</li></Link>
            <Link  to='services' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className="p-4">Services</li></Link>
            <Link  to='work' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className="p-4">Portfolio</li></Link>
            <Link  to='contact' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className="p-4">Contact</li></Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
            <Link to='#'>
                <img src={Logo} alt='' width='120px' className='m-4' />
            </Link>
            <Link  to='home' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className='p-4 border-b border-gray-600' onClick={handleScrollTo}>Home</li></Link>
            <Link  to='about' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className='p-4 border-b border-gray-600' onClick={handleScrollTo}>About</li></Link>
            <Link  to='services' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className='p-4 border-b border-gray-600' onClick={handleScrollTo}>Services</li></Link>
            <Link  to='work' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className='p-4 border-b border-gray-600' onClick={handleScrollTo}>Portfolio</li></Link>
            <Link  to='contact' activeClass='active' smooth={true} className='cursor-pointer flex items-center justify-center' ><li className='p-4' onClick={handleScrollTo}>Contact</li></Link>
      </ul>
    </div>
  )
};

export default Navbar;
