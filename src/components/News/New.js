import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import "./New.css";
import ResponsiveMedia from "../../reponsiveMedia";
const New = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Data or posts are undefined");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes);
    const [comments, setComments] = useState(post.comments);
    const [shares, setShares] = useState(post.shares);


    const handleLike = () => {
      const newLikes = likes + 1;
      setLikes(newLikes);
      console.log("newLikes", newLikes);
      updateDataJson(post.id, "likes", newLikes);
    };

    const handleComment = () => {
      const newComments = comments + 1;
      setComments(newComments);
      updateDataJson(post.id, "comments", newComments);
    };

    const handleShare = () => {
      const newShares = shares + 1;
      setShares(newShares);
      updateDataJson(post.id, "shares", newShares);
    };
   

    return (
      <div key={post.id} className="post">
        <div className="profile">
          <div className="avatar">
            <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
          </div>
          <div className="profile-info">
            <div className="name">{post.name}</div>
            <div className="role">{post.role}</div>
            <div className="time">{post.time}</div>
          </div>
        </div>
        <div className="post-content">
          <p className="content">{post.content}</p>
          <iframe
            src={post.media_url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
          {/* <ResponsiveMedia src={post.media} type={post.media_type} /> */}
        </div>

        <div className="actions">
          <button onClick={handleLike}>👍 Thích ({likes})</button>
          <button onClick={handleComment}>💬 Trả lời ({comments})</button>
          <button onClick={handleShare}>🔗 Chia sẻ ({shares})</button>
        </div>
        <div className="comments">
          {Array.isArray(post.commentsList) &&
            post.commentsList.map((comment) => (
              <div className="comment" key={comment.id}>
                <div className="comment-name">{comment.name}</div>
                <div className="comment-text">{comment.comment}</div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
const updateDataJson = async (postId, field, value) => {
  try {
    const response = await fetch("http://localhost:3001/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(value);
    const data = await response.json();

    if (Array.isArray(data)) {
      // Directly check if data is an array
      const postIndex = data.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        data[postIndex][field] = value;

        const updateResponse = await fetch(
          `http://localhost:3001/posts/${postId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data[postIndex]), // Update the specific post
          }
        );

        if (!updateResponse.ok) {
          throw new Error("Failed to update data");
        }
      } else {
        console.error("Post not found");
      }
    } else {
      console.error("Data is not an array");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default New;
