import React from 'react';
// components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import Header from './components/Header';
// import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
// import Navb from './components/Navb';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-slate-800 w-screen'>
      {/* <Navb /> */}
      <Navbar />
      {/* <Header /> */}
      <Banner />
      {/* <Nav /> */}
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
      <Footer />
    </div>
  );
};

export default App;


// bg-white

// text-slate-900

// text-red-600