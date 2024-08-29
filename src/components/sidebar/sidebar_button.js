import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const SidebarButton = ({ content, icon, path }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(path);
  };
  return (
    <li onClick={handleNavigation}>
      <img src={icon} alt="" />
      {content}
    </li>
  );
};

export default SidebarButton;
