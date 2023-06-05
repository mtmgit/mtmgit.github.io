import React, {useState} from "react";
import "./Projects.css";
import Accordion from '../accordion/Accordion';
import KanbanBoard from "../../containers/kanbanboard/KanbanBoard";
import {DownOutlined, UpOutlined} from "@ant-design/icons"


function Projects() {

  const [showForm1, setShowForm1] = useState(false);
  const handleButtonClick1 = () => {
    setShowForm1(!showForm1);
  };

  const [showForm2, setShowForm2] = useState(false);
  const handleButtonClick2 = () => {
    setShowForm2(!showForm2);
  };

  const [showForm3, setShowForm3] = useState(false);
  const handleButtonClick3 = () => {
    setShowForm3(!showForm3);
  };

  const [showForm4, setShowForm4] = useState(false);
  const handleButtonClick4 = () => {
    setShowForm4(!showForm4);
  };

  const [showForm5, setShowForm5] = useState(false);
  const handleButtonClick5 = () => {
    setShowForm5(!showForm5);
  };

  return(
    <div className={"textWrapperHorizontalProjects"}>
      <h1 style={{marginBottom: "1rem"}}>IntelliAssets LLC Projects</h1>
      <div className={"userForm"}>
        <button className="btn-label" onClick={handleButtonClick1} style={showForm1? {borderRight: "solid", borderLeft: "solid", borderBottom: "solid", borderColor: "mediumblue"} : {} }>
          <h5 className="btn-title">
            Project 1 - Asset Identification
            {!showForm1 && (
              <DownOutlined/>
            )}
            {showForm1 && (
              <UpOutlined/>
            )}
          </h5>
        </button>
        {showForm1 && (
          <KanbanBoard></KanbanBoard>
        )}

        <button className="btn-label" onClick={handleButtonClick2} style={showForm2? {borderRight: "solid", borderLeft: "solid", borderBottom: "solid", borderColor: "mediumblue"} : {} }>
          <h5 className="btn-title">
            Project 2 - Asset Organization
            {!showForm2 && (
              <DownOutlined/>
            )}
            {showForm2 && (
              <UpOutlined/>
            )}
          </h5>
        </button>
        {showForm2 && (
          <KanbanBoard></KanbanBoard>
        )}

        <button className="btn-label" onClick={handleButtonClick3} style={showForm3? {borderRight: "solid", borderLeft: "solid", borderBottom: "solid", borderColor: "mediumblue"} : {} }>
          <h5 className="btn-title">
            Project 3 - Asset Storage
            {!showForm3 && (
              <DownOutlined/>
            )}
            {showForm3 && (
              <UpOutlined/>
            )}
          </h5>
        </button>
        {showForm3 && (
          <KanbanBoard></KanbanBoard>
        )}

        <button className="btn-label" onClick={handleButtonClick4} style={showForm4? {borderRight: "solid", borderLeft: "solid", borderBottom: "solid", borderColor: "mediumblue"} : {} }>
          <h5 className="btn-title">
            Project 4 - Asset Versioning
            {!showForm4 && (
              <DownOutlined/>
            )}
            {showForm4 && (
              <UpOutlined/>
            )}
          </h5>
        </button>
        {showForm4 && (
          <KanbanBoard></KanbanBoard>
        )}


        <button className="btn-label" onClick={handleButtonClick5} style={showForm5? {borderRight: "solid", borderLeft: "solid", borderBottom: "solid", borderColor: "mediumblue"} : {} }>
          <h5 className="btn-title">
            Project 5 - Asset Maintenance and Archiving
            {!showForm5 && (
              <DownOutlined/>
            )}
            {showForm5 && (
              <UpOutlined/>
            )}
          </h5>
        </button>
        {showForm5 && (
          <KanbanBoard></KanbanBoard>
        )}
      </div>
    </div>
  );
}

export default Projects;