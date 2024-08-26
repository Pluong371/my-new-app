import React from 'react';
import '../header/header.css'; // Import file CSS để style cho header
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import thư viện FontAwesomeIcon
import {
  faEllipsis,
  faBrain,
  faBell,
  faUserAstronaut,
  faTaxi,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://antimatter.vn/wp-content/uploads/2022/04/hinh-meo-khoc-tha-like.jpg"
          alt="Logo"
        />
        <h1>Tomaru</h1>
      </div>
      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon_search" />
        <input type="text" placeholder="Tìm kiếm trên Tomiru" />
      </div>
      <div className="buttons">
        <div className="button-item">
          <FontAwesomeIcon icon={faBrain} size="lg" />
          <p>CSKH</p>
        </div>
        <div className="button-item">
          <FontAwesomeIcon icon={faTaxi} size="lg" />
          <p>Hòm Thư</p>
        </div>
        <div className="button-item">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <p>Thông Báo</p>
        </div>
      </div>
      <div className="profile">
        <div className="avatar">
          <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
        </div>
        <div className="nameUser">
          <div>Nguyễn Văn A</div>
          <div>Admin</div>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faEllipsis} size="lg"/>
      </div>
    </header>
  );
};

export default Header;