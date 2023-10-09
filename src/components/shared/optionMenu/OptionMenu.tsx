import "./style.scss";

const OptionMenu = ({ menuOptions }: { menuOptions: any[] }) => {
  return (
    <>
      <div className="option-menu-con">
        {menuOptions.map((option: any) => (
          <div className="menu-title-con">
            <div className="h3-white">{option.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OptionMenu;
