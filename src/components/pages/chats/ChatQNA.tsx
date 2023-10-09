import "./style.scss";
import ConfirmationModal from "../../shared/confirmatioModal/ConfirmationModal";
import { useState } from "react";


const ChatQNA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () =>{
        setIsModalOpen(false)
    };
    
    
    return (<>
        <button onClick={openModal}>Delete</button>
        {isModalOpen && <ConfirmationModal />}
        <div className="qna-section">
            <div className="user-details">
                <div className="profile-pic"></div>
                    <div className="question-section">
                        <div className="user-name">RIYA</div>
                        <br/>
                        <div className="question">
                            Can you help me analyze the chart at: <a href="#" className="links">www.tradingview.com</a><br/>
                            Also share few tips on trading tool!
                        </div>
                    </div>
            </div>
            <div className="answer-main-con">
            <div className="answer-con">
                <div className="cg-answers">
                    <div className="cg-logo"></div>
                    <div className="answer-section">
                        <div className="cg-name">CG AI</div>
                        <br/>
                        <div className="answer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur ipsam optio aspernatur consequuntur voluptatem tempore repudiandae architecto mollitia unde, doloribus dignissimos repellat animi quos magnam ducimus fugit obcaecati esse!
                        </div>
                        Sources:<br></br>
                        <div className="links">
                            <a href="#">Learners.net</a> &nbsp;
                            <a href="#">Tradingview.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="like-dislike">
                    <div className="like-dislike-logo">
                        Like &nbsp; Dislike
                    </div>
                </div>
            </div>
        </div>
                      
    </>);
};
export default ChatQNA;