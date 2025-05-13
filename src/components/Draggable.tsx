import React from "react";
import { motion } from "framer-motion";
import { useMotionValue,useTransform } from "framer-motion";

const Draggable = () => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const backgroundColor = useTransform(x, [-100, 100], ["#ff0000", "#00ff00"]);
  return (

      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        style={{ x, y, backgroundColor }}
        className="w-[10rem] h-[10rem] rounded-lg flex items-center justify-center text-white font-bold"
      >
        <span>
          Drag
      </span>
      </motion.div>

  )
};

export default Draggable;
