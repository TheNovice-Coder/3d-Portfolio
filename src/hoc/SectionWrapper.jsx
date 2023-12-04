import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
// hoc stands for higher order component
//this ection wraps up the code entire code for better indent of sections
//on a webpage
const SectionWrapper = (Component,idName) =>
function HOC()
{
    return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            // below code animates the section 
            viewport={{once : false , amount : 0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <Component/>
        </motion.section>

    )
}
export default SectionWrapper