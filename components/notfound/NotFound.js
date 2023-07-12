import React from "react";
import "./NotFound.css";
import {useNavigate} from "react-router-dom";


function NotFound() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/home');
  };

  return(
    <div className={"textWrapperHorizontalNotFound"}>
      <h1>Not Found 	&#x1F50E;</h1>
      <p>404 or Under Construction</p>
      <button style={{backgroundColor: "#1890ff", color: "white", borderRadius: "0.5rem", border: "none", padding: "0.5rem"}} onClick={navigateHome}>Send Me Back!</button>
    </div>
  );
}

export default NotFound;