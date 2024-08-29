import React, { useState, useEffect } from "react";
import PostForm from "../Post/post";
import News from "../News/New";

const New_Feed = () => {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);

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

  const handlePostSubmit = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setFlag(!flag);
    console.log("newPost", newPost);
  };

  return (
    <div className="New_Feed">
      <PostForm onPostSubmit={handlePostSubmit} />
      <div className="filter">
        aaa
      </div>
      <News posts={posts} />
    </div>
  );
};
export default New_Feed;
