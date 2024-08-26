import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Price.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Price = () => {
  const [quantity, setQuantity] = useState(1012.12);
  const [isVisibleTomxu, setIsVisibleTomxu] = useState(true);
  const [isVisiblePTomxu, setIsVisiblePTomxu] = useState(true);

  return (
    <div className="Price_Form">
      <div className="price-item">
        <h3>TOMXU</h3>
        <div className="quantity-container">
          <span>{isVisibleTomxu ? quantity : "****"}</span>
          <button
            className="eye-button"
            onClick={() => setIsVisibleTomxu(!isVisibleTomxu)}
          >
            <FontAwesomeIcon icon={isVisibleTomxu ? faEyeSlash : faEye} />
          </button>
        </div>
      </div>
      <div className="price-item">
        <h3>pTOMXU (chi tiết)</h3>
        <div className="quantity-container">
          <span>{isVisiblePTomxu ? quantity : "****"}</span>
          <button
            className="eye-button"
            onClick={() => setIsVisiblePTomxu(!isVisiblePTomxu)}
          >
            <FontAwesomeIcon icon={isVisiblePTomxu ? faEyeSlash : faEye} />
          </button>
        </div>
      </div>
      <div className="Trans">
        <button>chuyển</button>
        <button>nhận</button>
      </div>
      <div className="Bons">
        <button>Lịch sử giao dịch</button>
        <button>Trao đổi Tomxu</button>
      </div>
    </div>
  );
};

export default Price;