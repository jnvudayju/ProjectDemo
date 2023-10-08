import "./style.scss";
import Tick from "../../../assets/icons/Tick-3.svg";
const WalletConnect = () => {
    return (<>
        <div className="connected-content"><img src={Tick} alt="Tick Mark" />
            <div className="text">Your MetaMask Wallet is connected</div>
            <div className="subtext">The full power of CG AI has been unlocked</div>
        </div>
    </>);
}
export default WalletConnect;