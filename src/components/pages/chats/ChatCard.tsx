const ChatCard = ({ title, subtitle }: { title: any; subtitle: any }) => {
  return (
    <>
      <div className="chat-card-con">
        <div className="h2-white">{title}</div>
        <div className="h2-subtext mt-8">{subtitle}</div>
      </div>
    </>
  );
};

export default ChatCard;
