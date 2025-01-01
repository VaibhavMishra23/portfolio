import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { HiDocumentArrowDown } from "react-icons/hi2";
import { BsCircleFill } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { HiMiniHome } from "react-icons/hi2";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { HiMiniTrophy } from "react-icons/hi2";
import moon from '../assets/moon.png'
import sun from '../assets/yellowBall.png'
import './Navbar.css'
import resumePDF from '../assets/vaibhavMishraResume.pdf';

function Navbar(props) {
    console.log(props.theme)
    useGSAP(() => {
        const t1 = gsap.timeline();
        t1.from('#theme',{
            x: -300,
            duration : 1
        })
        t1.from("#logo", {
            duration: 0.5,
            opacity: 0,
            scale: 0.1
        })
        t1.from('.goto', {
            y: -40,
            duration: 0.2,
            stagger: 0.2
        })
        t1.from('#download', {
            opacity: 0,
            duration: 0.7
        })
    })
    const [isSidePageVisible, setSidePageVisible] = useState(false);

    const handleBurger = () => {
        setSidePageVisible(!isSidePageVisible);
        if (!isSidePageVisible) {
            const t2 = gsap.timeline()
            t2.set('#side-page', {
                display: "block"
            })
            t2.to("#side-page", {
                x: 0,
                duration: 0.5,
            })
            t2.from('.res-goto', {
                duration: 1,
                ease: "elastic.out(1,0.3)",
                x: 40,
                stagger: 0.4,
                opacity: 0.3
            })
            document.getElementById('full-blur').classList.add('active');
        } else {
            const t2 = gsap.timeline();
            t2.to("#side-page", {
                x: "100%",
                duration: 0.5,
            });
            t2.set('#side-page', {
                display: "none"
            })
            document.getElementById('full-blur').classList.remove('active');
        }
    };
    const handleChangeTheme = ()=>{
        const t1 = gsap.timeline();
        t1.to("#theme",{
            x:-300,
            duration: 0.5
        })
        props.setTheme((prev)=>{
            return prev=='light'?'black':'light';
        })
    }
    return (
        <>
            <div id='navbar' style={{backgroundColor: props.theme=='light'?'white':'#212529'}}>
                <div id='sub-nav'>
                    <div id='logo' style={{color: props.theme=='light'?'navy':'crimson'}}>
                        Vaibhav Mishra <span id='fullstop'><BsCircleFill /></span>
                    </div>
                    <div id='refer'>
                        <ul>
                            <li className="goto"><a href="#sub-container" style={{color: props.theme=='light'?'black':'white'}}>Home</a></li>
                            <li className="goto"><a href="#about-container" style={{color: props.theme=='light'?'black':'white'}}>About</a></li>
                            <li className="goto"><a href="#project-container" style={{color: props.theme=='light'?'black':'white'}}>Project</a></li>
                            <li className="goto"><a href="#contact" style={{color: props.theme=='light'?'black':'white'}}>Contact</a></li>
                        </ul>
                    </div>
                    <a  href={resumePDF} download="Vaibhav_Mishra_Resume.pdf" style={{textDecoration: "none"}}>
                    <div id='download'>
                        <div>Download CV&nbsp;</div>
                        <div id='font-download'><HiDocumentArrowDown /></div>
                    </div>
                        </a>
                    <div id='hamburger' onClick={handleBurger} style={{color: props.theme=='light'?'black':'white'}}>
                        <HiBars3 />
                    </div>
                    <div id='full-blur'></div>
                    <div id='side-page' style={{backgroundColor: '#e8f5e9'}}>
                        <div id='res-refer'>
                            <ul>
                                <li className="res-goto" onClick={handleBurger}><a href="#sub-container"><HiMiniHome />  Home
                                </a></li>
                                <li className="res-goto" onClick={handleBurger}><a href="#about-container"><HiMiniInformationCircle />&nbsp;About</a></li>
                                <li className="res-goto" onClick={handleBurger}><a href="#project-container"><HiMiniTrophy />&nbsp;Project</a></li>
                                <li className="res-goto" onClick={handleBurger}><a href="#contact"><HiPhone />&nbsp;Contact</a></li>
                                <a  href={resumePDF} download="Vaibhav_Mishra_Resume.pdf" style={{textDecoration: "none"}}>
                                <div id='res-download' className='res-goto'>
                                    <div>Download CV&nbsp;</div>
                                    <div id='font-download'><HiDocumentArrowDown /></div>
                                </div>
                                </a>
                            </ul>
                        </div>
                        <div id='cut' onClick={handleBurger} >  <HiMiniXMark /></div>
                    </div>
                </div>
            </div>
            {props.theme=='light' && <img id='theme' src={sun} alt="LightMode" onClick={handleChangeTheme}/>}
            {props.theme=='black' && <img id='theme' src={moon} alt="DarkMode" onClick={handleChangeTheme}/>}
        </>
    )
}

export default Navbar