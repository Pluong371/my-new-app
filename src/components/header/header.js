import React from "react";
// import '../header/header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import thư viện FontAwesomeIcon
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import logo from "../../pic/Logo.png";
import brain from "../../pic/Group 427320770.png";
import bell from "../../pic/Group 9089.png";
import mail from "../../pic/Group 9306.png";
import avatar from "../../pic/Avatars.png";
import search from "../../pic/Search.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search">
        <img src={search} alt="" className="icon_search" />
        <div className="placeholder">Tìm kiếm trên Tomiru</div>
        <input type="text" />
      </div>
      <div className="buttons">
        <div className="button-item-KH">
          <img src={brain}  />
          <p>CSKH</p>
        </div>
        <div className="button-item-mail">
          <img src={mail}  />
          <p>Hòm Thư</p>
        </div>
        <div className="button-item-bell">
          <img src={bell}  />
          <p>Thông Báo</p>
        </div>
      </div>
      <div className="profile_header">
        <div className="avatar">
          <img src={avatar}  />
        </div>
        <div className="infor">
          <div className="nameUser">Nguyễn Văn A</div>
          <div className="role">@NguyenVanA</div>
        </div>
      </div>
      <div className="menu_header">
        <FontAwesomeIcon icon={faEllipsis} size="lg" />
      </div>
    </div>
  );
};

export default Header;
