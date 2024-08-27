import React from "react";
import "./Attend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Attend = () => {
  return (
    <div className="Attend_container">
      <div className="Attend">
        <h1 className="attend-header">
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>Điểm danh nhận TOMXU</span>
        </h1>
        <button>Nhận Ngay 3 TOMXU</button>
      </div>
    </div>
  );
};
export default Attend;
