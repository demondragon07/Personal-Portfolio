import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'



const Experties = () => {
  return (
    <section className={css.wrapper}>
        <a className="anchor" id="experties"></a>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>


            {/* left side */}
            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i)=> {
                        return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className={css.exp} key={i}>
                            <div style={{background: exp.bg}} className="flexCenter">
                                <exp.icon size={25} color="white"/>
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects} Projects</span>
                            </div>
                        </motion.div>
                    })
                }
            </div>


            {/* right */}
            <motion.div
            variants={textVariant(0.5)}
            className={css.rightSide}>
                
                <span className='primaryText'>About me </span>
                <h2 ><span style={{color:'red'}}>Who i am</span></h2>
                     
                {WhatDoIHelp.map((paragraph, i)=> <span className='secondaryText' key={i}>{paragraph}</span>)}


                <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <div className="buttons">
                            <button style={{padding:'9px 14px',borderRadius:'22px', color:'white',
                            backgroundColor:'Red',fontWeight:'bold',fontSize:' 21px',
                            margin:'0 3px',cursor:'pointer' }}>
                                 <a href="https://drive.google.com/file/d/10YdfWPsfWPCN33lKQ2tHYgYctECYC92m/view?usp=sharing">DOWNLOAD CV</a></button>
                        </div>     
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                    <div className="buttons">
                            <button style={{padding:'9px 14px',borderRadius:'22px', color:'white',
                            backgroundColor:'Red',fontWeight:'bold',fontSize:' 21px',
                            margin:'0 3px',cursor:'pointer' }}>
                                 <a href="https://www.linkedin.com/in/vibhu-kumar-938a9a218/">CONTACT ME</a></button>
                        </div>     
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experties