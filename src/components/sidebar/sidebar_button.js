import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const SidebarButton = ({ content, icon, path }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  const handleNavigation = () => {
    navigate(path);
  };

  return (
    <li
      onClick={handleNavigation}
      className={`sidebarButton_li ${isActive ? "active" : ""}`}
    >
        <img src={icon} alt="" />
     
      {content}
    </li>
  );
};

export default SidebarButton;