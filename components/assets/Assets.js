import React, {useRef, useState} from 'react';
import "./Assets.css"
import DropFileInput from "../Dragndrop/DropFileInput";
import "../Dragndrop/assets/Dragndrop.css"
import accompressor from "../../img/carparts/accompressor.jpg"
import alternator from "../../img/carparts/alternator.jpg"
import breakcaliper from "../../img/carparts/breakcaliper.jpg"
import catalyticconverter from "../../img/carparts/catalyticconverter.jpg"
import cylinderhead from "../../img/carparts/cylinderhead.jpg"
import exhaustmanifold from "../../img/carparts/exhaustmanifold.jpg"
import ignitioncoil from "../../img/carparts/ignitioncoil.jpg"
import startermotor from "../../img/carparts/startermotor.jpg"




import Item from "../item/Item";


function Assets() {
  const onFileChange = (files) => {
    console.log(files);
  }

  return(
    <div style={{display: "flex", flexDirection: "column", alignItems:"center", marginTop:"4rem"}}>
      <h1 style={{marginBottom: "1rem"}}>IntelliAssets LLC Assets</h1>
      <div className="assets-wrapper">
        <div className="grid-container">
          <Item src={accompressor} alt="AC Compressor"/>
          <Item src={alternator} alt="Alternator"/>
          <Item src={breakcaliper} alt="Break Caliper"/>
          <Item src={catalyticconverter} alt="Catalytic Converter"/>
          <Item src={cylinderhead} alt="Cylinderhead"/>
          <Item src={exhaustmanifold} alt="Exhaust Manifold"/>
          <Item src={ignitioncoil} alt="Ignition Coil"/>
          <Item src={startermotor} alt="Starter Motor"/>
        </div>

        <div className="PostShareWrapper">
          <DropFileInput
            onFileChange={(files) => onFileChange(files)} />
        </div>
      </div>
    </div>
  );
}

export default Assets;