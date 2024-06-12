import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img1 from '../assets/hh.jpg';
import Img2 from '../assets/gg.jpg';
import Img3 from '../assets/New Project.jpg';
import Img4 from '../assets/todo.png';
import Img5 from '../assets/debo.png';

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
              <p className="max-w-sm mb-4 text-slate-900">
                You can find some of the latest works
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            <a href="https://pathfindercollege.netlify.app/">
              <div className='group relative overflow-hidden border-2 border-black/50 rounded-x1'>
                <div className='group-hover:bg-black/70 h-60 absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
                {/* <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className="text-gradient">School Management System</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Project Title</span>
                </div> */}
              </div>
            </a>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-10'>
          <a href="https://nhschoolsystem.netlify.app/">
            <div className='group relative overflow-hidden border-2 border-black/50 rounded-x1'>
                  <div className='group-hover:bg-black/70 h-96 absolute z-40 transition-all duration-300'></div>
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
                  {/* <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className="text-gradient">School Website</span>
                  </div>
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Project Title</span>
                  </div> */}
              </div>
            </a>
            
            <a href="https://banjoduduyemi.netlify.app/">
              <div className='group relative overflow-hidden border-2 border-black/50 rounded-x1'>
                <div className='group-hover:bg-black/70 h-60 absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
                {/* <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className="text-gradient">Finance</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Banjoduduyemi Website</span>
                </div> */}
              </div>
            </a>

            
          </motion.div>
          <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-10'>
          <a href="https://hezdebschools.com/">
            <div className='group relative overflow-hidden border-2 border-black/50 rounded-x1'>
                  <div className='group-hover:bg-black/70 h-96 absolute z-40 transition-all duration-300'></div>
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt="" />
                  {/* <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className="text-gradient">School Website</span>
                  </div>
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Project Title</span>
                  </div> */}
              </div>
            </a>
            
            <a href="https://adebodolapo.netlify.app/">
              <div className='group relative overflow-hidden border-2 border-black/50 rounded-x1'>
                <div className='group-hover:bg-black/70 h-60 absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={Img5} alt="" />
                {/* <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className="text-gradient">Finance</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Banjoduduyemi Website</span>
                </div> */}
              </div>
            </a>

            
          </motion.div>
        </div>
      </div>
    </section>
  ); 
};

export default Work;
