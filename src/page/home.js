import React, { useState } from 'react';
import Header from '../components/header/header';
import Sidebar from '../components/s/sidebar';
import PostForm from '../components/Post/post';
import './home.css';
import Price from '../components/Price/Price';
import New from '../components/News/New';
const Home = () => {
 
  return (
    <div className="home">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <PostForm />
          <New />
        </main>
        <div className="sidebarRi">
          <Price />
        </div>
      </div>
    </div>
  );
};

export default Home;