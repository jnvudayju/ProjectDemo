import { sidepanelMenuOptions } from "./constants";
import "./style.scss";

const Sidepanel = () => {
  return (
    <>
      <div className="sidepanel-container">
        {sidepanelMenuOptions.map((menu: any) => (
          <div className="menu-con">
            <div className="menu-icon-con">{menu.icon}</div>
            <div className="h2-white">{menu.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidepanel;
