import React from 'react'
import { BsDownload } from "react-icons/bs";
import gsap from 'gsap'
import './About.css'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import resumePDF from '../assets/vaibhavMishraResume.pdf';

function About(props) {
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('#about-heading',{
            y:-40,
            duration:3,
            yoyo: true,
            yoyoEase: true,
            repeat: -1,
            opacity:0,
            scrollTrigger:{
                trigger: "#about-sub-container",
                scroller: "body",
                start: "top 80%"
            }
        })
        gsap.from('#about-me',{
            x:-250,
            duration: 1,
            opacity:0,
            scrollTrigger:{
                trigger: "#about-sub-block",
                scroller: "body",
                start: "top 80%"
            }
        })
        gsap.from('#about-skills',{
            x:250,
            duration: 1,
            opacity: 0,
            scrollTrigger:{
                trigger: "#about-sub-block",
                scroller: "body",
                start: "top 80%"
            }
        })
    })
  return (
    <>
    <div id='about-container' style={{backgroundColor: props.theme=='light'?'white':'#042743'}}>
        <div id='about-sub-container'>
            <div id='about-heading' style={{color: props.theme=='light'?'black':'white'}}>About Me</div>
            <div id='about-sub-block'>
                <div id='about-me'>
                    <h3>My Introduction</h3>
                    <p>I am a passionate and enthusiastic student, currently honing my skills in programming and web development. With expertise in C++, Python, HTML, CSS, JavaScript, React, Express, SQL, and NoSQL (MongoDB), I am eager to apply my knowledge in a real-world setting.</p>
                    <a  href={resumePDF} download="Vaibhav_Mishra_Resume.pdf" style={{textDecoration: "none"}}> 
                    <div id='parent-download-3'>
                    <div id='download-3'>
                      <div>Download CV&nbsp;</div>
                      <div id='font-download'><BsDownload />
                      </div>
                  </div>
                    </div>
                    </a>
                </div>
                <div id='about-skills'>
                    <div id='parent-language'>
                        <h4 style={{color: props.theme=='light'?'rgb(83, 83, 83)':'white'}}>Languages</h4>
                       <ul>
                        <li className="languages" id='cpp'>C++</li>
                        <li className="languages" id='javascript'>JavaScript</li>
                        <li className="languages" id='python'>Python</li>
                        <li className="languages" id='html5'>HTML5</li>
                        <li className="languages" id='css3'>CSS3</li>
                       </ul>
                    </div>
                    <div id='parent-backend'>
                        <h4 style={{color: props.theme=='light'?'rgb(83, 83, 83)':'white'}}>Backend</h4>
                        <ul>
                            <li className="backend" id='node'>Js(Node.js)</li>
                            <li className="backend" id='flask'>Flask</li>
                        </ul>
                    </div>
                    <div id='parent-database'>
                        <h4 style={{color: props.theme=='light'?'rgb(83, 83, 83)':'white'}}>Database</h4>
                        <ul>
                            <li className="database" id='sql'>SQL</li>
                            <li className="database" id='nosql'>NoSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
