import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import {useTypewriter,Cursor} from "react-simple-typewriter";



const Hero = () => {
    const [typeEffect]=useTypewriter({
      words:['Designer','ML enthusiast','Developer','Photographer'],
      loop:{},
      typeSpeed:150,
      deleteSpeed:40
    })

  return (
    

    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Vibhu Kumar
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
          <h2>
          And I'm a 
          <span style={{fontweight:'bold',color:'Red',marginLeft:'5px'}}>{typeEffect}</span>
          <span style={{fontweight:'bold',color:'Red'}}>|</span>
          </h2>
    
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./personvk.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:vibhukumar01singh@gmail.com">
         vibhukumar01singh@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">Full Stack</div>
            <div className="secondaryText">
              <div>Web</div>
              <div>Developer</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>DEGREE</span>
            <span> Bachelor of Technology</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
