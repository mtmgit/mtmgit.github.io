import React, { useState, useRef } from "react";
import ProfileImage from "../../img/intelliassetslogo.jpg";
import "./PostShare.css";
/*
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

 */
import {EnvironmentOutlined, ScheduleOutlined, PlayCircleFilled, ClockCircleFilled, FileImageOutlined} from "@ant-design/icons";


const PostShare = () => {

  const [at, setAt] = useState("");

  const handleInputChange = (event) => {
    setAt(event.target.value);
  };

  const handleClick = () => {
    alert('Shared!');
    setAt("")
  };

  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" value={at} onChange={handleInputChange}/>
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <FileImageOutlined />
            <p>Photo</p>
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <PlayCircleFilled />
            <p>Video</p>
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <EnvironmentOutlined />
            <p>Location</p>
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <ScheduleOutlined />
            <p>Shedule</p>
          </div>
          <button className="button ps-button" onClick={handleClick}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <ClockCircleFilled onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;
