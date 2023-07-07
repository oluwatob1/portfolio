import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img1 from '../assets/hh.jpg';
import Img2 from '../assets/gg.jpg';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return(
    <section className='section bg-white' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className="h2 leading-tight text-red">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16 text-slate-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum quasi accusamus odit maxime. Sint.
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            <div className='group relative overflow-hidden border-2 border-black/50 rounded-x1'>
              <div className='group-hover:bg-black/70 h-60 absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className="text-gradient">School Management System</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-black/50 rounded-x1'>
                <div className='group-hover:bg-black/70 h-96 absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className="text-gradient">School Website</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Project Title</span>
                </div>
              </div>

              <div className='group relative overflow-hidden border-2 border-black/50 rounded-x1'>
              <div className='group-hover:bg-black/70 h-60 absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className="text-gradient">Photography</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  ); 
};

export default Work;
