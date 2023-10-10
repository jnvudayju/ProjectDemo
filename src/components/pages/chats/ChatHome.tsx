import Icon from "../../shared/icon/Icon";
import { ReactComponent as OptionIcon } from "../../../assets/icons/option-button.svg";
import "./style.scss";
import { chatCardOptions, dummyqnaList } from "./Constants";
import ChatCard from "./ChatCard";
import { useContext, useEffect, useState } from "react";
import { ReactComponent as PlayIcon } from "../../../assets/icons/paly-icon.svg";
import { ReactComponent as StopIcon } from "../../../assets/icons/stop-icon.svg";
import ChatQNA from "./ChatQNA";
import { menuOptions } from "./Constants";
import OptionMenu from "../../shared/optionMenu/OptionMenu";
import { ApplicationCtx } from "../../../contexts/ApplicationCtx";
import ConfirmationModal from "../../shared/confirmatioModal/ConfirmationModal";
import { log } from "console";

const ChatHome = () => {
  const [chatInput, setChatInput] = useState<string>("");
  const [isOptionMenuClosed, setIsOptionMenuClosed] = useState(true);
  const { isSideNavOpen, setIsSideNavOpen } = useContext(ApplicationCtx);
  const [inputActive, setInputActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qnaList, setQnaList] = useState<any[]>(dummyqnaList);
  const [currentQNA, setCurrentQNA] = useState<any[]>([]);
  const [stopResponding, setStopResponding] = useState(false);
  const [currentLink, setCurrentLink] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentQNA([]);
    setIsOptionMenuClosed(true);
  };

  useEffect(() => {
    setIsSideNavOpen(true);
  }, []);

  useEffect(() => {
    if (currentQNA.length) {
      setShowWelcome(false);
    } else {
      setShowWelcome(true);
    }
  }, [currentQNA]);

  const handleSubmit = () => {
    if (chatInput.indexOf("https") !== -1) {
      setCurrentLink(chatInput);
      setCurrentQNA((prevState: any) => {
        return [...prevState, { ques: chatInput, ans: "" }];
      });
    } else {
      setCurrentQNA((prevState: any) => {
        return [...prevState, { ques: chatInput, ans: "" }];
      });
      const listToFind: any[] =
        dummyqnaList.find((x) => x.link === currentLink)?.qna || [];
      const currentAns = listToFind?.find((x) => x.ques === chatInput).ans;

      setTimeout(() => {
        setCurrentQNA((prevState: any) => {
          return [...prevState, { ques: "", ans: currentAns }];
        });
      }, 3000);
    }

    setChatInput("");
    setStopResponding(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-con" onClick={closeModal}>
          <ConfirmationModal />
        </div>
      )}
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
            {showWelcome && (
              <div className="welcome-con">
                <div className="h1-white" style={{ textAlign: "center" }}>
                  Welcome to CG AI
                </div>
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
            )}
            <div className="chat-qna-con">
              {currentQNA.map((qna: any) => (
                <ChatQNA question={qna?.ques} answer={qna?.ans} />
              ))}
            </div>
            {stopResponding && (
              <div className="chat-bottom-card-con mt-40">
                {chatCardOptions.map((cardOption: any, index: number) => (
                  <ChatCard
                    title={cardOption.title}
                    subtitle={cardOption.subtitle}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="chat-bottom-con mt-40">
            {!stopResponding && currentQNA.length && (
              <div
                className="stop-button-con mt-32"
                onClick={() => setStopResponding(true)}
              >
                <StopIcon />
                <div className="h4-white">Stop Responding</div>
              </div>
            )}
            <div
              className="chat-input-con mt-32"
              onClick={() => setInputActive(true)}
            >
              <label style={{ width: "100%" }}>
                {!inputActive && (
                  <div className="h3-gray">Write your prompt here</div>
                )}
                {inputActive && (
                  <input
                    className="chat-input-text"
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                  />
                )}
              </label>
              <PlayIcon style={{ cursor: "pointer" }} onClick={handleSubmit} />
            </div>
          </div>
        </div>
        {!isOptionMenuClosed && (
          <div className="normal-menu-con" onClick={openModal}>
            <OptionMenu menuOptions={menuOptions} />
          </div>
        )}
      </div>
    </>
  );
};
export default ChatHome;
