import Icon from "../../shared/icon/Icon";
import { ReactComponent as OptionIcon } from "../../../assets/icons/option-button.svg";
import "./style.scss";
import { chatCardOptions } from "./Constants";
import ChatCard from "./ChatCard";
import { useContext, useEffect, useState } from "react";
import { ReactComponent as PlayIcon } from "../../../assets/icons/paly-icon.svg";
import ChatQNA from "./ChatQNA";
import { menuOptions } from "./Constants";
import OptionMenu from "../../shared/optionMenu/OptionMenu";
import { ApplicationCtx } from "../../../contexts/ApplicationCtx";

const ChatHome = () => {
  const [chatInput, setChatInput] = useState<string>("");
  const [isOptionMenuClosed, setIsOptionMenuClosed] = useState(true);
  const { isSideNavOpen, setIsSideNavOpen } = useContext(ApplicationCtx);

  useEffect(() => {
    setIsSideNavOpen(true);
  }, []);

  return (
    <>
      <div className="chat-con">
        <div className="chat-subnav-con">
          <div className="h2-white">Trading Strategy</div>
          <div className="chat-option-icon-con">
            <OptionIcon
              onClick={() => {
                setIsOptionMenuClosed(!isOptionMenuClosed);
              }}
            />
          </div>
        </div>
        <div className="chat-contenet-con">
          <div className="chat-top-con">
            <div className="h1-white">Welcome to CG AI</div>
            <div className="h1-subtext mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur
            </div>
            <div className="chat-button-con mt-40">
              <div className="primary-btn">
                <div className="btn-text">Safe</div>
              </div>
              <div className="secondary-btn">
                <div className="btn-text">Balanced</div>
              </div>
              <div className="secondary-btn">
                <div className="btn-text">Aggresive</div>
              </div>
            </div>
          </div>
          <div className="chat-qna-con">
            <ChatQNA />
          </div>
          <div className="chat-bottom-con">
            <div className="chat-bottom-card-con">
              {chatCardOptions.map((cardOption: any, index: number) => (
                <ChatCard
                  title={cardOption.title}
                  subtitle={cardOption.subtitle}
                  key={index}
                />
              ))}
            </div>
            <div className="chat-input-con mt-32">
              <label>
                <input type="text" value={chatInput} />
              </label>
              <PlayIcon />
            </div>
          </div>
        </div>
        {!isOptionMenuClosed && (
          <div className="normal-menu-con">
            <OptionMenu menuOptions={menuOptions} />
          </div>
        )}
      </div>
    </>
  );
};
export default ChatHome;
