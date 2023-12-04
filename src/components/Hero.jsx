// file that styles the introduction section with 3d model of a desktop

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
      <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
               max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            {/* circle with line (near introduction) */}
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            {/* line from the circle */}
            <div className="w-1 sm:h-80 h-40 violet-gradient" />

          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> 
            {/* above classname makes the size of text larger */}
              Hi, I'm <span className="text-[#915eff] ">Uma</span> 
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a beginner web developer
           and <br /> learner from Bihar , India.
            </p>
          </div>
        </div>
        {/* Exited the div's so that the 3d image can be visible */}
        <ComputersCanvas/>
      </section>
  )
}

export default Hero