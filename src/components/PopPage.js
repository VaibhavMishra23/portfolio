import React from 'react';
import './PopPage.css';
import data from './ProjectDetails.json'
import { HiMiniXMark } from "react-icons/hi2";

function PopPage(props) {
    const handleClose = ()=>{
        props.setShow(prev=>{
            return !prev
        })
    }
  return (
    <div className='pro-popup-container'>
    <div className="popup-container" style={{backgroundColor: props.theme=="light"?"hsl(0, 0%, 98%)":"#042743"}}>
      {props.show && data.map((ele,index)=>{
        return <div className="popup-content" key={index} style={{ color: props.theme=='light'?"#333":"silver"}}>
        <h2 className="popup-title" style={{ color: props.theme=='light'?"black":"white"}}>{ele.name}</h2>
        <p className="popup-description">
          {ele.description}
        </p>
        <h6 className="popup-tech">Technology: {ele.technology}</h6>
        <h6 className="popup-device">Run on: {ele.portable}</h6>
        <a href={ele.link} style={{textDecoration:"none", color:"black"}}>
        <button className="popup-button">Visit</button></a>
        <div id='cut-list' onClick={handleClose}><HiMiniXMark /></div>
      </div>
      })}
    </div>
    </div>
  );
}

export default PopPage;
