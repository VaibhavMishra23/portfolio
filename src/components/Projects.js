import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import Certificate from './Certificate'
import './Projects.css'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import PopPage from './PopPage';
import viewCV from '../assets/viewCV.png'
function Projects(props){
    const [show,setShow] = useState(false);
    const [showCV, setShowCV] = useState(false);
    const [showCertificate,setShowCertificate] = useState(false);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.from('#group-projects', {
            y: -300,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#project-type",
                scroller: "body",
                start: "top 90%"
            },
        });
    
        gsap.from('#individual-projects', {
            x: 300,
            opacity: 0,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: "#project-type",
                scroller: "body",
                start: "top 90%"
            },
        });
    
        gsap.from('#certification', {
            x: -300,
            opacity: 0,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: "#project-type",
                scroller: "body",
                start: "top 90%",
            },
        });
    
        gsap.from("#title-project", {
            scale: 1.1,
            duration: 2,
            yoyo: true,
            repeat: -1,
            scrollTrigger: {
                trigger: "#title-project",
                scroller: "body",
                start: "top 90%"
            },
        });
    
        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    });
    
    const handleShowIndividual = ()=>{
        setShow((prev)=>{
            return !prev;
        })
    }
    const handleCV = ()=>{
        setShowCV((prev)=>{
            return !prev;
        })
    }
    const handleCertification = ()=>{
        setShowCertificate((prev)=>{
            return !prev;
        })
    }
    return (
        <div  style={{backgroundColor: props.theme=='light'?'white':'#042743',minHeight: "524px"}}>
        <div id='project-container'>
            <div id='title-project' style={{color: props.theme=='light'?'black':'white'}}>Projects</div>
            <div id='project-type'>
                <div id='individual-projects' onClick={handleShowIndividual}>
                    <div id='logo-individual'><BsPerson /></div>
                    <div id='individual-content'>
                        <h4 id='individual-heading'>Projects</h4>
                        <p id='individual-inside-content'>4+ Projects</p>
                    </div>
                </div>
                <div id='group-projects' onClick={handleCV}>
                    <div id='logo-group'><BsFileEarmarkText />
                    </div>
                    <div id='group-content'>
                        <h4 id='group-heading'>For More Details</h4>
                        <p id='group-inside-content'>View CV</p>
                    </div>
                </div>
                <div id='certification' onClick={handleCertification}>
                    <div id='logo-certification'><BsAward />

                    </div>
                    <div id='certification-content'>
                        <h4 id='certification-heading'>Certifications</h4>
                        <p id='certification-inside-content'>5+ Certifications</p>
                    </div>
                </div>
            </div>
        </div>
        {show && <PopPage setShow={setShow} show={show} theme={props.theme}/>}
        {
        showCV &&
        <div id='parentViewCV'>
        <img src={viewCV} alt="Loading.." id='viewCV' onClick={handleCV}/>
        </div>
        }
        {showCertificate && <Certificate setShowCertificate={setShowCertificate}/>}
        </div>
    )
}
export default Projects;