import React from "react";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import "./style.scss";

const SubMenu = () => {
  return (
    <div className="subMenu">
      <div className="listIcon">
        <img src={icon1} alt="icon 1" className="icon" />
        <img src={icon2} alt="icon 2" className="icon" />
        <img src={icon3} alt="icon 3" className="icon" />
        <img src={icon4} alt="icon 4" className="icon" />
      </div>
      <p className="copiryght">Copiryght, SportSee 2022</p>
    </div>
  );
};

export default SubMenu;
