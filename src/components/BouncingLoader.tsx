import React from "react";
import {motion} from "framer-motion";

const BouncingLoader = () => {
  return ( <div className="flex justify-center items-center h-screen ">
    {[...Array(3)].map((_, index) => (
      <motion.div
        key={index}
        className="w-6 h-6 bg-blue-500 rounded-full m-2"
        animate={{
          y: [0, -15, 0],}}

        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: index * 0.2 }}
      />
    ))}
    </div>
  )
};

export default BouncingLoader;
