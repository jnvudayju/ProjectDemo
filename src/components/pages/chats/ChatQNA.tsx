import "./style.scss";
import { ReactComponent as LikeIcon } from "../../../assets/icons/like-icon.svg";
import { ReactComponent as DisLikeIcon } from "../../../assets/icons/dislike-icon.svg";
import { ReactComponent as CopyIcon } from "../../../assets/icons/copy-icon.svg";
import { ReactComponent as RefreshIcon } from "../../../assets/icons/refresh-icon.svg";
import { ReactComponent as CGAIIcon } from "../../../assets/icons/cg-ai-icon.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user-icon.svg";
import { useContext, useEffect, useState } from "react";
import ConfirmationModal from "../../shared/confirmatioModal/ConfirmationModal";
import { ApplicationCtx } from "../../../contexts/ApplicationCtx";

const ChatQNA = ({ question, answer }: { question: any; answer: any }) => {
  const [completedTyping, setCompletedTyping] = useState(false);
  const [displayResponse, setDisplayResponse] = useState("");
  const [showLoading, setShowLoading] = useState(true);
  const { showStopResponding, setShowStopResponding } =
    useContext(ApplicationCtx);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      loadAnswer();
    }, 4000);
  }, []);

  const loadAnswer = () => {
    if (answer.length === 0) {
      setShowStopResponding(false);
      return;
    }
    setShowStopResponding(true);
    setCompletedTyping(false);

    let i = 0;

    const intervalId = setInterval(() => {
      setDisplayResponse(answer.slice(0, i));
      i++;
      if (i > answer.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);
      }
    }, 40);

    return () => {
      clearInterval(intervalId);
    };
  };

  useEffect(() => {
    if (displayResponse.length === answer.length) {
      setShowStopResponding(false);
    }
  }, [displayResponse]);

  return (
    <>
      <div className="qna-section">
        {question && (
          <div className="user-details">
            <div className="cg-logo">
              <UserIcon />
            </div>
            <div className="question-section">
              <div className="user-name">RIYA</div>
              <br />
              <div className="question">
                <div className="h3-white-light">{question}</div>
              </div>
            </div>
          </div>
        )}
        {answer && (
          <div className="answer-main-con">
            <div className="answer-con">
              <div className="cg-answers">
                <div className="cg-logo">
                  <CGAIIcon />
                </div>
                <div className="answer-section">
                  <div className="user-name">CG AI</div>
                  <br />
                  <div className="answer">
                    {!showLoading && (
                      <div className="h3-white-light">{displayResponse}</div>
                    )}
                    {showLoading && <div className="loading">...</div>}
                  </div>
                  {completedTyping && (
                    <>
                      <div className="h3-white mt-32">Sources:</div> <br />
                      <div className="links">
                        <a href="#">Learners.net</a> &nbsp;
                        <a href="#">Tradingview.com</a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {completedTyping && (
              <>
                <div className="like-dislike-con">
                  <div className="left-icon-con">
                    <LikeIcon />
                  </div>
                  <div className="right-icon-con">
                    <DisLikeIcon />
                  </div>
                </div>
                <div className="chatQna-button-con">
                  <div className="icon-button-con">
                    <div className="h3-white">Copy</div>
                    <CopyIcon />
                  </div>
                  <div className="icon-button-con">
                    <div className="h3-white">Regenerate</div>
                    <RefreshIcon />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default ChatQNA;
