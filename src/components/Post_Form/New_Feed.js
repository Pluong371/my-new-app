import React, { useState, useEffect } from "react";
import PostForm from "../Post/post";
import News from "../News/New";

const New_Feed = () => {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Lỗi khi tải bài viết:", error);
      }
    };

    fetchPosts();
  }, [flag]);

  const handleForYou = () => {
    setActiveTab("1");
  };

  const handleMyGroup = () => {
    setActiveTab("2");
  };

  const handleNews = () => {
    setActiveTab("3");
  };

  const handlePostSubmit = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setFlag(!flag);
    console.log("newPost", newPost);
  };

  return (
    <div className="New_Feed">
      <PostForm onPostSubmit={handlePostSubmit} />
      <div className="filter">aaa</div>
      <div className="container_New">
        <div className="row">
          <div
            className={`col ${activeTab == "1" ? "col-choose" : ""}`}
            onClick={handleForYou}
          >
            Dành cho bạn
          </div>
          <div
            className={`col ${activeTab == "2" ? "col-choose" : ""}`}
            onClick={handleMyGroup}
          >
            Nhóm của tôi
          </div>
          <div
            className={`col ${activeTab == "3" ? "col-choose" : ""}`}
            onClick={handleNews}
          >
            Tin tức
          </div>
        </div>
        {activeTab === "1" && <News posts={posts} />}
        {activeTab === "2" && <div className="blank">a</div>}
        {activeTab === "3" && <div className="blank">b</div>}
      </div>
    </div>
  );
};
export default New_Feed;
