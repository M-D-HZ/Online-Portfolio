import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../style.js";
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion.js";
import {sectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-250px w-full">
        <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div options={
                {max:45, scale:1, speed:450}}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex
                justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Welcome to my online portfolio! I'm Anass Hamzaoui, a computer science student with a passion for innovation and problem-solving. I'm not just eager to improve and learn—I thrive on it. Constantly seeking new challenges to apply my skills and knowledge, I'm committed to making a significant impact in the ever-evolving field of technology. With a keen eye for detail and a knack for creative solutions, I'm driven by a desire for continuous growth. Explore my projects and achievements to discover my dedication to excellence and my potential to shape the future of tech.
          <br className="sm:block hidden"/>
          If you want to contact me you can do so by sending me an email at <span className="text-[#915eff]"> Othman-hamzaoui@hotmail.com</span> as listed at the bottom of this page.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(About, "about")