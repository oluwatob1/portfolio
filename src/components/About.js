import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import Image3 from '../assets/graph.png';
import Image4 from '../assets/2.JPG'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section bg-white' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='hidden lg:flex flex-1 bg-about2 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div> */}
          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[350px] rounded-xl'>
            <img src={Image4} alt='' className='animate-profile-animate mx-auto md:w-full rounded-xl'  />
          </motion.div>
          <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1'>
            <h2 className='h2 text-red'>About me</h2>
            <h3 className='h3 mb-4 text-slate-900'>I'm a Front-end Developer with over 2 years of experience.</h3>
            <p className='mb-6 text-slate-900'>I am a front-end developer based in Nigeria focused on creating creating interactive web applications to cater for your everyday needs.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className='font-primary text-smtracking-[2px] text-slate-900'>Years of <br /> Experience</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView ? <CountUp start={0} end={15} duration={3} /> : null}+
                </div>
                <div className='font-primary text-smtracking-[2px] text-slate-900'>Projects <br /> Completed</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView ? <CountUp start={0} end={12} duration={3} /> : null}+
                </div>
                <div className='font-primary text-smtracking-[2px] text-slate-900'>Satisfied <br /> Clients</div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <a href="#contact"><button className='btn btn-lg'>Contact me</button></a>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
