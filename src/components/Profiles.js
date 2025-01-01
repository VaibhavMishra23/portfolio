import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import profilePic from "../assets/profilePic.jpg"
import { HiDocumentArrowDown } from "react-icons/hi2";
import './Profiles.css'
import resumePDF from '../assets/vaibhavMishraResume.pdf';

function Profiles(props) {
  const [dynamicProfession,setDynamicProfession] = useState('Vaibhav Mishra');
  const attributes = ['Web Developer', 'Gamer','Frontend Developer', 'Vaibhav Mishra','Backend Developer'];
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#intro',{
      x: -300,
      opacity:0,
      duration : 1
    })
    gsap.from('#profilePic',{
      y:-300,
      opacity:0,
      duration: 1
    })
    gsap.from('#blink',{
      opacity:0,
      repeat: -1
    })
  })
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);
  const [i,setI] = useState(0);
  const [wait,setWait] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if(wait>10){
        if (flag) {
          if (dynamicProfession !== "") {
            setDynamicProfession((prev) => prev.slice(0, -1));
          } else {
            setFlag(false);
          }
        } else {
          if (i < attributes[count].length) {
            setDynamicProfession((prev) => prev + attributes[count][i]);
            setI(prev => prev + 1);
          } else {
            setFlag(true);
            setCount((prevCount) => (prevCount + 1) % attributes.length);
            setI(0);
            setWait(0);
          }
        }
      }else{
        setWait(prev => prev+1);
      }
    }, 200);
  
    return () => clearInterval(interval);
  }, [dynamicProfession, count, flag, i, wait]);
  return (
    <>
    <div className='container' style={{backgroundColor: props.theme=='light'?'white':'#042743'}}>
      <div id='sub-container'>
      <div id='intro'>
        <div id='naming'><h5>Vaibhav Mishra</h5></div>
        <div id='short-intro'>
          <span className='dummy-h1' style={{color: props.theme=='light'?'rgb(68, 68, 68)':'white'}}>I'm </span><span className='dummy-h1'id='sub-short-intro'>{dynamicProfession}</span><span id='blink' className='dummy-h1' style={{color: props.theme=='light'?'rgb(68, 68, 68)':'white'}}>|</span>
        </div>
        <p style={{color: props.theme=='light'?'black':'white'}}>I am a Fresher and I am a passionate and enthusiastic student, currently honing my skills in programming and web development.</p>
        <div id='buttons'>
          <button id='hire-me'><a href="#contact" style={{textDecoration:"none",color: "white"}}>Hire Me</a></button>
          <a  href={resumePDF} download="Vaibhav_Mishra_Resume.pdf" style={{textDecoration: "none"}}>
          <button id='download-2'>
          <div>Download CV&nbsp;</div>
          <div id='font-download'><HiDocumentArrowDown /></div>
          </button>
          </a>
        </div>
        <div id='links'>
          <a href="https://github.com/VaibhavMishra23" style={{color: props.theme=='light'?'black':'white'}} target='_blank'><BsGithub /></a>
          <a href="https://www.linkedin.com/in/vaibhav-mishra23/" style={{color: props.theme=='light'?'black':'white'}}><BsLinkedin /></a>
          <a href="https://www.instagram.com/vaibhavmishra_23/" style={{color: props.theme=='light'?'black':'white'}}><BsInstagram /></a>
        </div>
      </div>
      <div id='profilebox'>
        <div id='profilePic'>
          <img src={profilePic} alt="Loading..."/>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Profiles
