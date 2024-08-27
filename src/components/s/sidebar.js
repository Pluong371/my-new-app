import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li onClick={() => handleNavigation('/home')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Trang chủ
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Khám phá
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Nhóm của tôi
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Cửa hàng
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Bản đồ
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Tìm kiếm
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Mạng lưới
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Quỹ đóng góp
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Trang cá nhân
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Tài liệu SP
        </li>
        <li onClick={() => handleNavigation('/test')}>
          <FontAwesomeIcon icon={faClover} className="icon" /> Link mời khách
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;