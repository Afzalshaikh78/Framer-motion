import React from "react";
import BouncingLoader from './components/BouncingLoader';
import Gestures from "./components/Gestures";
import { motion } from "framer-motion";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedGallery from "./components/AnimatedGallery";
import Draggable from "./components/Draggable";
import BouncingBall from "./components/BouncingBall";
function App() {
  return (
  <div className="flex flex-col items-center justify-center h-screen"> 
      {/* <BouncingLoader /> */}
      {/* <Gestures /> */}
      
      {/* <motion.div className="box" >

      </motion.div> */}
      {/* <AnimatedCard /> */}
      {/* <AnimatedGallery /> */}
      
      {/* <Draggable/> */}
      <BouncingBall/>
  </div>

  )
  

}

export default App;

