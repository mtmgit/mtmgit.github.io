import React from "react";
import "./Account.css";
import {EditFilled, DeleteFilled, SettingFilled, SolutionOutlined} from "@ant-design/icons";
import ProfileImage from "../../img/intelliassetslogo.jpg";
import {useNavigate} from "react-router-dom";

function Account() {

  const navigate = useNavigate();

  const navigateSignOut = () => {
    navigate('/login');
  };

  return(
    <div style={{display: "flex", flexDirection: "column", alignItems:"center", marginTop:"4rem"}}>
      <div className={"textWrapperHorizontalAccount"}>
        <div className="header-zone">
          <h1 style={{marginBottom: "1rem"}}>My Account</h1>
          
        </div>
        <div className="txt-plane">
          <p><b>Name: </b> John Doe </p>
          <p><b>UserID: </b> @JDoe </p>
          <p><b>Company: </b> IntelliAssets LLC </p>
          <p><b>Occupation: </b> Project Manager </p>
          <p><b>Role: </b> Admin </p>
          <p><b>Phone: </b> (123) 456-7890 </p>
          <p><b>Vocational Address: </b> 123 Main St, Los Angeles, CA </p>
          <p><b>Preferred Location: </b> 321 Aurora Ln, Los Angeles, CA </p>
          <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
            <div className="txt-plane-btns">
              <DeleteFilled />
              <EditFilled />
              <SettingFilled />
            </div>
            <button style={{backgroundColor: "#1D5476", color: "white", borderRadius: "0.5rem", border: "none"}} onClick={navigateSignOut}>Sign Out </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Account;