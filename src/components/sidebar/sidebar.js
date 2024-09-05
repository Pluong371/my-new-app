import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import house from "../../pic/House_02.png";
import dic from "../../pic/discover.png";
import user_2 from "../../pic/profile-2user.png";
import store from "../../pic/shopping-cart.png";
import map from "../../pic/Point On Map.png";
import SidebarButton from "./sidebar_button";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <SidebarButton content={"Trang chủ"} icon={house} path={"/home"} />
        <SidebarButton content={"Khám Phá"} icon={dic} path={"/test"} />
        <SidebarButton content={"Nhóm của tôi"} icon={house} path={"/test"} />
        <SidebarButton content={"Cẳ Hàng"} icon={dic} path={"/test"} />
        <SidebarButton content={"Bản đồ"} icon={house} path={"/test"} />
        <SidebarButton content={"Tìm kiếm"} icon={dic} path={"/test"} />
        <SidebarButton content={"Mạng lưới"} icon={house} path={"/test"} />
        <SidebarButton content={"Quỹ đồng chia"} icon={dic} path={"/test"} />
        <SidebarButton content={"Trang cá nhân"} icon={house} path={"/test"} />
        <SidebarButton content={"Tài liệu SP"} icon={dic} path={"/test"} />
        <SidebarButton content={"Link mời khách"} icon={dic} path={"/test"} />
      </ul>
      <div class="ButtonSidebar_Container">
        <button class="ButtonSidebar">Đăng bài</button>
      </div>
    </div>
  );
};

export default Sidebar;
