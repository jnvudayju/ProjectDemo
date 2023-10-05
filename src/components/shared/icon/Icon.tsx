import "./style.scss";

const Icon = (path: any) => {
  return (
    <>
      <div className="icon-con">
        <img src={path} />
      </div>
    </>
  );
};

export default Icon;
