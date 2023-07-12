import logo from './logo.svg';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Account from "./components/account/Account";
import Assets from "./components/assets/Assets";
import Experts from "./components/experts/Experts";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import Projects from "./components/projects/Projects";
import KanbanBoard from "./containers/kanbanboard/KanbanBoard";
import Login from "./components/login/Login";
import {HomeFilled, SettingFilled, DropboxSquareFilled, SmileFilled, ProjectFilled, UserOutlined, TeamOutlined, SolutionOutlined, ToolOutlined} from "@ant-design/icons";
import NotFound from "./components/notfound/NotFound";


function App() {

  const navigate = useNavigate();

  const navigateLanding = () => {
    navigate('/landing');
  };

  const navigateAssets = () => {
    navigate('/assets');
  };

  const navigateExperts = () => {
    navigate('/experts');
  };

  const navigateProjects = () => {
    navigate('/projects');
  };

  const navigateAccount = () => {
    navigate('/account');
  };

  const navigateHome = () => {
    navigate('/home');
  };


  return (
    <div className="App">
      <div className={"bottomnavWrapper"}>
        <center>
          <div className="bottomnav">
            <button type="button" className="btn btn-link" onClick={navigateHome}><div style={{display: "flex", flexDirection: "column"}}><HomeFilled /><p className="nav-labels" >Home</p></div></button>
            <button type="button" className="btn btn-link" onClick={navigateAssets}><div style={{display: "flex", flexDirection: "column"}}><ToolOutlined /><p className="nav-labels" >Assets</p></div></button>
            <button type="button" className="btn btn-link" onClick={navigateExperts}><div style={{display: "flex", flexDirection: "column"}}><SolutionOutlined /><p className="nav-labels" >Experts</p></div></button>
            <button type="button" className="btn btn-link" onClick={navigateProjects}><div style={{display: "flex", flexDirection: "column"}}><ProjectFilled /><p className="nav-labels" >Projects</p></div></button>
            <button type="button" className="btn btn-link" onClick={navigateAccount}><div style={{display: "flex", flexDirection: "column"}}><UserOutlined /><p className="nav-labels" >Me</p></div></button>
          </div>
        </center>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/assets" element={<Assets/>} />
        <Route path="/experts" element={<Experts/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/login" element={<NotFound />} />
        <Route path="/settings" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
