import React from 'react';
// import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'Web Design',
    description: 'We are responsible for designing and building the interface, navigation and aesthetic of websites for businesses and clients making use of CMS programs.',
    link: 'Learn more',
  },
  {
    name: 'Web Development',
    description: 'We are responsible for the design and development of web applications making user have a great interface and experience.',
    link: 'Learn more',
  },
  {
    name: 'Data Analysis',
    description: 'We are responsible for collecting, cleaning, and interpreting data sets in order to answer a question or solve a problem using excel and power Bi as a tool',
    link: 'Learn more',
  },
]

const Services = () => {
  return(
    <section className='section bg-white' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lihten mb-12 lg:mb-0'> */}
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 mix-blend-lihten mb-12 lg:mb-0'>
            <h2 className="h2 text-red mb-6">What i do.</h2>
            <h3 className='h3 max-w-[455px] mb-16 text-slate-900'>I'm a Freelance Front-end Developer with over 3 years of experience.</h3>
            <Link to="work"><button className="btn btn-sm">See my work</button></Link>
            
          </motion.div>

          <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1'>
            <div>
              {services.map((service, index) => {
                const {name, description} = service;
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
