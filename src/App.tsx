import React from "react";
import BouncingLoader from './components/BouncingLoader';
import Gestures from "./components/Gestures";
import { motion } from "framer-motion";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedGallery from "./components/AnimatedGallery";
function App() {
  return (
  <div>
      {/* <BouncingLoader /> */}
      {/* <Gestures /> */}
      
      {/* <motion.div className="box" >

      </motion.div> */}
      {/* <AnimatedCard /> */}
          <AnimatedGallery />
  </div>

  )
  

}

export default App;

