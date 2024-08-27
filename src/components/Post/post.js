import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import './post.css';
const PostForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic đăng bài ở đây
    console.log("Đăng bài:", inputValue);
    setInputValue(""); // Xóa nội dung sau khi đăng
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
        <div></div>
      </form>
    </div>
  );
};

export default PostForm;