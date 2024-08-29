import React from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import PostForm from "../components/Post/post";
import "./home.css";
import Price from "../components/Price/Price";
import New from "../components/News/New";
import Attend from "../components/At/Attend";
import New_Feed from "../components/Post_Form/New_Feed";
import His_Ac from "../components/History_Action/His_Ac.";

const Home = () => {
  return (
    <div className="home">
      <Header className="header" />
      <div className="content">
        <div className="fixed-sidebar">
          <Sidebar />
        </div>
        <main className="main-content">
          <New_Feed />
        </main>
        <div className="sidebarRi">
          <Price />
          <Attend />
        </div>
      </div>
    </div>
  );
};

export default Home;
