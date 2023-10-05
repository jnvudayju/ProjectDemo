import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./Routes";
import Navbar from "./components/layouts/navbar/Navbar";
import Landing from "./components/pages/landing/Landing";
import Sidepanel from "./components/layouts/sidepanel/Sidepanel";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <div className="nav-con">
        <Navbar />
      </div>
      <div className="main-con">
        <div className="sidepanel-con">
          <Sidepanel />
        </div>
        <div className="page-view-con">
          <BrowserRouter>
            <Routes>
              {routes.map(({ path, component }, index) => (
                <Route path={path} element={component} key={index} />
              ))}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
