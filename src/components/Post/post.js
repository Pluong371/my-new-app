import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import './post.css';

const PostForm = ({ onPostSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      content: inputValue,
      name: "test",
      timestamp: new Date().toLocaleString()
    };

    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

      if (response.ok) {
        console.log("Đăng bài thành công:", newPost);
        onPostSubmit(newPost); // Call the callback function
      } else {
        console.error("Lỗi khi đăng bài:", response.statusText);
      }
    } catch (error) {
      console.error("Lỗi khi đăng bài:", error);
    }

    setInputValue(""); // Clear the input after posting
  };

  return (
    <div className="form_container">
      <div className="avatar_1">
        <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
      </div>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Nhập nội dung bài viết..."
            className="post-input"
          />
          <button type="submit" className="post-button">
            Đăng lên
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;