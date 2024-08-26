import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Trang chủ</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Khám phá</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Nhóm của tôi</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Cửa hàng</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Bản đồ</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Tìm kiếm</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Mạng lưới</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Quỹ đóng góp</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Trang cá nhân</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Tài liệu SP</li>
        <li><FontAwesomeIcon icon={faClover} className="icon" /> Link mời khách</li>
      </ul>
      <button className="post-button-sidebar">Đăng bài</button>
    </div>
  );
};

export default Sidebar;