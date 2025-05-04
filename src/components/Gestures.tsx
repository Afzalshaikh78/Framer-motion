import React from "react";
import { motion } from "framer-motion";

const Gestures = () => {
  return <div>
    <motion.div className="box" whileHover={{
      scale: 1.2,
      rotate: 99,
      transition: { duration: 2 },


     

    }}
    
    whileTap={{scale:0.3}}/>

    {/* <motion.div className="box" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8,rotate:-180 }} 
    transition={{type:'spring',stiffness:300} }/>
    
      <h1>Gestures</h1> */}
  </div>;
};

export default Gestures;
