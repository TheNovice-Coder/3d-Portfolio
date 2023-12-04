import React from "react";
import { Tilt } from "react-tilt"; //tilt the cards that we will use
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// below is the implementation of tilt cards
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[10px] rounded-[200px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[200px] py-5 px-12 min-h-[250px]
          flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h2 className="text-center">{title}</h2>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    // below is regular react fragment
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm B.tech 3rd Year student from Graphic era Hill
        University,Dehradun,Uttrakhand.I have my interests in web development
        and coding practices. I am a fast learner and can adapt to new
        environments easily. I can work together to bring in creative ideas to
        life. I have a good leadership quality. Below are my area of interests
        on which i will sharpen my skills in future.
      </motion.p>

      {/* div for cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About , "about")
