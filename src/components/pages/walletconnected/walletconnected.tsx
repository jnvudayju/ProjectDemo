import "./style.scss";
import Tick from "../../../assets/icons/Tick-3.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WalletConnect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/chats");
    }, 4000);
  }, []);
  return (
    <>
      <div className="connected-content">
        <img src={Tick} alt="Tick Mark" />
        <div className="text">Your MetaMask Wallet is connected</div>
        <div className="subtext">The full power of CG AI has been unlocked</div>
      </div>
    </>
  );
};
export default WalletConnect;
