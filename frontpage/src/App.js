import React from 'react';
import './App.css';
import logo from './logo.png';
import axios from 'axios';
import useEffect from 'react';
import HomePage from './components/homepage.js';
import MovieDisplay from './components/moviedisplay.js';
import { motion } from 'framer-motion';


const slideFadeInVariants = {
  hidden: { x: '-100vw', opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

function App() {
  const motionProps = {
    initial: "hidden",
    animate: "visible",
    variants: slideFadeInVariants,
    transition: { duration: 1.2 }
  };

  return (
    <div className="App">
      <header className="App-header">
        <motion.div {...motionProps}>
          <img src={logo} alt="logo" className="logo" />
        </motion.div>
      </header>

      <div>
        <motion.div {...motionProps}>
          <HomePage />
        </motion.div>
      </div>
      <div>
      <MovieDisplay />
      </div>
    </div>
  );
}


export default App;
