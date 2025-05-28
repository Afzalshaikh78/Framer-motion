import React from "react";
import { motion } from "framer-motion";

const BouncingBall = () => {
  return (
    <><motion.div
      className="w-17 h-17 bg-yellow-500 rounded-full"
      animate={{ y: [0, -200, 0] }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <div className="w-full h-full flex items-center justify-center">


      </div>



    </motion.div>
      
      
      <motion.div
      className="w-17 h-17 bg-yellow-500 mt-3 rounded-full"
      animate={{ y: [0, -200, 0] }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
        <div className="w-full h-full flex items-center justify-center">
          

        </div>



      </motion.div></>

    
  );
};

export default BouncingBall;
