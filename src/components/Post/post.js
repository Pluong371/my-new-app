import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import './post.css';

const PostForm = ({ onPostSubmit }) => {
  const [inputValue, setInputValue] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
    const handleImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
      }
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
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image-input"
          /> */}
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