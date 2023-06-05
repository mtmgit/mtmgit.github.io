import React, {useRef, useState} from 'react';
import "../assets/Assets.css"
import DropFileInput from "../Dragndrop/DropFileInput";
import "../Dragndrop/assets/Dragndrop.css"
import "./Experts.css"
import automotive1 from "../../img/experts/automotive1.jpg"
import automotive2 from "../../img/experts/automotive2.jpg"
import automotive3 from "../../img/experts/automotive3.jpg"
import construction1 from "../../img/experts/construction1.jpg"
import construction2 from "../../img/experts/construction2.jpg"
import construction3 from "../../img/experts/construction3.jpg"
import electric1 from "../../img/experts/electric1.jpg"
import electric3 from "../../img/experts/electric3.jpg"
import Item2 from "../item/Item2";


function Experts() {

  const [at, setAt] = useState("");

  const handleInputChange = (event) => {
    setAt(event.target.value);
  };

  const handleClick = () => {
    alert('Expert Added to List!');
    setAt("")
  };

  return(
    <div style={{display: "flex", flexDirection: "column", alignItems:"center", marginTop:"4rem"}}>
      <h1 style={{marginBottom: "1rem"}}>IntelliAssets LLC Experts</h1>
      <div className="assets-wrapper">
        <div className="grid-container">
          <Item2 src={automotive1} alt="Jane Doe"/>
          <Item2 src={automotive2} alt="John Doe"/>
          <Item2 src={automotive3} alt="Jane Doe"/>
          <Item2 src={construction1} alt="John Doe"/>
          <Item2 src={construction2} alt="Jane Doe"/>
          <Item2 src={construction3} alt="John Doe"/>
          <Item2 src={electric1} alt="John Doe"/>
          <Item2 src={electric3} alt="Jane Doe"/>
        </div>

        <div className="experts-class">
          <p style={{marginBottom: 0}}>Add Expert to my List: </p>
          <input style={{border: "2px solid #cccccc"}} type="text" placeholder="@JohnDoe123" value={at} onChange={handleInputChange}/>
          <button style={{backgroundColor: "#1890ff", color: "white", borderRadius: "0.5rem", border: "none"}} onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Experts;