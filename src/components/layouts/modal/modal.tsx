import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'
import Metamask from "../../../assets/icons/image_3.svg";
import TrustWallet from "../../../assets/icons/image_4.svg";
import CloseCross from "../../../assets/icons/close-cross.svg";
import { modalContentTypes } from './constants';


interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {

  const [contentType, setContentType] = useState<any>(modalContentTypes.walletHome);
  const navigate = useNavigate();
  const handleConnectToMetamaskClicked = () => {
    navigate('/walletconnected');
  }

  return (
    <div className="modal">
      {/* Modal content */}
      {contentType === modalContentTypes.walletHome ? <>
        <div className="modal-content">
          <div className="connect-con">
            Connect Wallet
            <div className="close-button"> <img src={CloseCross} onClick={onClose} /></div>
          </div>
          <div className="wallet"onClick={handleConnectToMetamaskClicked}><div className="logo"><img src={Metamask} /></div><div className="text"><p>Metamask</p></div></div>
          <div className="wallet" onClick={() => setContentType(modalContentTypes.walletNotDetected)}><div className="logo"><img src={TrustWallet} /></div><div className="text"><p>Trust Wallet</p></div></div>
          <div className="others">Others, coming soon</div>

        </div>
      </> : <>
        <div className="modal-content">
          <div className="wallet-not-detected">
            <div className="heading">Trust Wallet Not Detected</div>
            <img src={TrustWallet} className="trust-wallet-logo"></img>
            <button className="button-63" onClick={handleConnectToMetamaskClicked}>Connect to MetaMask</button>
          </div>
        </div>
      </>}

    </div>
  );
};

export default Modal;
