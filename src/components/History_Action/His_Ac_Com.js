import React from "react";
import "./His_Ac.css";
import { faBold } from "@fortawesome/free-solid-svg-icons";

const His_Ac_Com = ({ icon, name, content, time }) => {
  return (
    <li className="His_Acti">
      <div className="icon_his">
        <img src={icon} alt="" />
      </div>
      <div>
        <p className="content_his">
          <span className="his_name">{name}</span> {content}
        </p>
        <div className="Time_His">
          <span>{time}</span>
        </div>
      </div>
    </li>
  );
};
export default His_Ac_Com;
