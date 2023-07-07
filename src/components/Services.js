import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';

const services = [
  {
    name: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic voluptatem itaque architecto, doloribus ut! Ea nostrum illum doloremque fugiat.',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic voluptatem itaque architecto, doloribus ut! Ea nostrum illum doloremque fugiat.',
    link: 'Learn more',
  },
  {
    name: 'Photography',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic voluptatem itaque architecto, doloribus ut! Ea nostrum illum doloremque fugiat.',
    link: 'Learn more',
  },
]

const Services = () => {
  return(
    <section className='section bg-main' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lihten mb-12 lg:mb-0'> */}
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 mix-blend-lihten mb-12 lg:mb-0'>
            <h2 className="h2 text-red mb-6">What i do.</h2>
            <h3 className='h3 max-w-[455px] mb-16 text-slate-900'>I'm a Freelance Front-end Developer with over 2 years of experience.</h3>
            <a href="#work"><button className="btn btn-sm">See my work</button></a>
            
          </motion.div>

          <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1'>
            <div>
              {services.map((service, index) => {
                const {name, description, link} = service;
                return(
                  <div className='border-b border-red/50 h-[146px] mb-[38px] flex' key={index}>
                    <div className='/* max-w-[476px] */'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 text-slate-900'> {name} </h4>
                      <p className='font-secondary leading-tight text-slate-900'>{description}</p>
                    </div>
                    {/* <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className='text-red text-md'>{link}</a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
