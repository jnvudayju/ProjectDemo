import "./style.scss";
import React from "react";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    navigate('/landing');
  };
  return (<>
    <div className="frame">
      <div className="content">
        <div className="first">
          <h1>Welcome </h1>
        </div>
        <div className="second">
          <h1>Welcome to CryptogradAI</h1>
          <h5>Empowering the crypto community with expert-curated crypto knowledge</h5>
          <button className="button-63" onClick={handleGetStartedClick}>Get Started</button>

        </div>
      </div>

    </div>
  </>);
};

export default Home;
