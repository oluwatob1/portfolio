/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Image from '../assets/avatar.svg';
import Image2 from '../assets/3-removebg-preview.png';
import Image3 from '../assets/graph.png';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[67vh] lg:min-h-[88vh] flex items-center bg-white' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            {/* <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>AYOMIDE<span> </span></motion.h1> */}
            {/* <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div> */}
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}  className='lg:p-3 p-1 lg:mt-4 mt-1 lg:mb-8 mb-2 lg:text-[36px] text-[36px] font-secondary font-semibold max-w-lg mx-auto lg:mx-0 text-slate-700 leading-10'>Hi, i am Ayomide Olanrewaju. I am a <br class='lg:hidden md:hidden' /> <TypeAnimation sequence={[
                'Front-end Developer',
                2000,
                'React Developer',
                2000,
                'Data Analyst',
                2000,
              ]}
                speed={50}
                className='text-red lg:text-[30px]'
                wrapper='span'
                repeat={Infinity}
              />.</motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href="#service"><button className='btn btn-lg'>Contact Me</button></a>
              <a href="#work" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] text-slate-900 gap-x-6 max-w-max mx-auto lg:mx-0'>
              {/* <a href="#">
                <FaYoutube />
              </a> */}
              <a href="https://github.com/oluwatob1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ayolanre">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.7)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[5182px]'>
            <img src={Image3} alt='' className='animate-profile-animate mx-auto w-2/3 md:w-full' width='700px' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
