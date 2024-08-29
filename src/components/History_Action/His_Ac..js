import React from "react";
import "./His_Ac.css";

const His_Ac = () => {
  return (
    <div>
      <h1>Hoạt động mới nhất</h1>
      <div className="history">
        <div className="history-item">
          <div className="history-item__content">
            <p className="history-item__content__text">
              <span className="history-item__content__text__name">Nguyễn Văn A</span> đã tham gia nhóm <span className="history-item__content__text__group">Nhóm 1</span>
            </p>
          </div>
          <div className="history-item__time">1 giờ trước</div>
        </div>
       
      </div>
    </div>
  );
};
export default His_Ac;
