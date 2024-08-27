import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/s/sidebar";
import Price from "../../components/Price/Price";
import Attend from "../../components/At/Attend";

import "./test.css";


const test = () => {
  return (
    <div className="home">
      <Header className="header" />
      <div className="content">
        <div className="fixed-sidebar">
          <Sidebar />
        </div>
        <main className="main-content">
         aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </main>
        <div className="sidebarRi">
          <Price />
          <Attend />
        </div>
      </div>
    </div>
  );
};

export default test;
