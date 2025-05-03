import { h1 } from "motion/react-client";
import React from "react";
import {motion} from "framer-motion";
function App() {
  return (
    <motion.div className="box" animate={{ scale:[1,2,2,3,4,3,2,1] }} transition={{ duration: 10 }}>

    </motion.div>
  )

}

export default App;

