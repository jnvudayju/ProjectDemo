import "./style.scss";
import React, {useState} from 'react';
import Modal from "../../layouts/modal/modal";
import { ReactComponent as CheckIcon } from '../../../assets/icons/check-circle.svg';

const Landing = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () =>{
        setModalOpen(true);
    }
    const closeModal = () =>{
        setModalOpen(false);
    };

    return (
        <>
            <div className="container">
                <div className="landing-content">


                    <h1>Unlock the full power of Cryptograd AI</h1>
                    <p className="text">something Beyond Human Limits</p>
                    <table>
                        <tr>
                            <td><CheckIcon /></td><td><p>Turn ideas into Decision with AI</p></td>
                        </tr>
                        <tr>
                            <td><CheckIcon /></td><td><p>Access Data Driven </p></td>
                        </tr>
                        <tr>
                            <td><CheckIcon /></td><td><p>Expert Curated Crypto Knowledge</p></td>
                        </tr>
                    </table>
                    <p className="try-text">Try 7 days for free, Then $24.99/Month</p>
                    <div className="wallet-con">
                        <div className="connect-wallet">Connect Wallet</div>
                        <div className="recommended">Recommended</div>
                    </div>
                    <div className="confirm-button">
                    <button className="button-63" onClick={openModal}>Confirm</button>

                    </div>
                </div>
            </div>
            {isModalOpen && <Modal onClose={closeModal}/>};
        </>
    );
}
export default Landing;