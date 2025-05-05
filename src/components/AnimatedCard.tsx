import React from "react";
import { motion } from "framer-motion";
const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileDrag={{ scale: 1.05, rotate: 5 }}
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.95, rotate: 5 }}
      transition={{type: "spring", stiffness: 300, damping: 20}}

      
      
      className="max-w-sm bg-white rounded-lg shadow overflow-hidden cursor-pointer">
      <img className="w-full h-52 object-cover object-center "
        src="https://images.unsplash.com/photo-1745953130006-357aa055eee7?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="card"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">Animated Card</h2>
        <p className="text-gray-700 text-base mb-4">
          This is a simple card component with an image and some text.
        </p>
        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer duration-300">
          Click Me
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
