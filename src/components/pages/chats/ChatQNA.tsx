import "./style.scss";
import { ReactComponent as LikeIcon } from "../../../assets/icons/like-icon.svg";
import { ReactComponent as DisLikeIcon } from "../../../assets/icons/dislike-icon.svg";
import { ReactComponent as CopyIcon } from "../../../assets/icons/copy-icon.svg";
import { ReactComponent as RefreshIcon } from "../../../assets/icons/refresh-icon.svg";
import { useEffect, useState } from "react";
import ConfirmationModal from "../../shared/confirmatioModal/ConfirmationModal";

const ChatQNA = ({ question, answer }: { question: any; answer: any }) => {
  const [completedTyping, setCompletedTyping] = useState(false);
  const [displayResponse, setDisplayResponse] = useState("");
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    if (answer.length === 0) {
      return;
    }

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

    return () => clearInterval(intervalId);
  }, [answer]);

  return (
    <>
      <div className="qna-section">
        {question && (
          <div className="user-details">
            <div className="profile-pic"></div>
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
                <div className="cg-logo"></div>
                <div className="answer-section">
                  <div className="user-name">CG AI</div>
                  <br />
                  <div className="answer">
                    {!showLoading && (
                      <div className="h3-white-light">{displayResponse}</div>
                    )}
                    {showLoading && <div className="loading">Loading...</div>}
                  </div>
                  Sources:<br></br>
                  <div className="links">
                    <a href="#">Learners.net</a> &nbsp;
                    <a href="#">Tradingview.com</a>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        )}
      </div>
    </>
  );
};
export default ChatQNA;
