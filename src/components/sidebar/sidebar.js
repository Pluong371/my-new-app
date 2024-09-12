import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

import house from "../../pic/House_02.png";
import dic from "../../pic/discover.png";
import user_2 from "../../pic/profile-2user.png";
import store from "../../pic/shopping-cart.png";
import map from "../../pic/Point On Map.png";
import search from "../../pic/Search.png";
import SidebarButton from "./sidebar_button";
import mainf from "../../pic/Magnifer.png";
import money1 from "../../pic/money (1).png";
import ava1 from "../../pic/UserCircle.png";
import doc from "../../pic/stickynote.png";
import link from "../../pic/Copy.png";
import { FaHouse, FaInvision } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <SidebarButton content={"Trang chủ"} icon={house} path={"/home"} />
        <SidebarButton content={"Khám Phá"} icon={dic} path={"/test"} />
        <SidebarButton content={"Nhóm của tôi"} icon={user_2} path={"/"} />
        <SidebarButton content={"Cửa Hàng"} icon={store} path={"/"} />
        <SidebarButton content={"Bản đồ"} icon={map} path={"/"} />
        <SidebarButton content={"Tìm kiếm"} icon={search} path={"/"} />
        <SidebarButton content={"Mạng lưới"} icon={mainf} path={"/"} />
        <SidebarButton content={"Quỹ đồng chia"} icon={money1} path={"/"} />
        <SidebarButton content={"Trang cá nhân"} icon={ava1} path={"/"} />
        <SidebarButton content={"Tài liệu SP"} icon={doc} path={"/"} />
        <SidebarButton content={"Link mời khách"} icon={link} path={"/"} />
      </ul>
      <div class="ButtonSidebar_Container">
        <button class="ButtonSidebar">Đăng bài</button>
      </div>
    </div>
  );
};

export default Sidebar;