import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return(
    <section className='bg-main lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-x1 uppercase text-red font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 text-slate-900'>Let's work <br /> together!</h2>
            </div>
          </motion.div>

          <motion.form variants={fadeIn('left', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start'>
            <input type="text" className="bg-transparent border-b py-1 outline-none w-full placeholde:text-third focus:border-third transition-all" placeholder='Your Name' />
            <input type="text" className="bg-transparent border-b py-1 outline-none w-full placeholde:text-third focus:border-third transition-all" placeholder='Your Email' />
            <textarea className="bg-transparent border-b py-6 outline-none w-full placeholde:text-third focus:border-third transition-all resize-none" placeholder='Your Message'></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
