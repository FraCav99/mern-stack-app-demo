import React from 'react';

const Post = ({ title, content, id }) => {
  return (
    <div className="post" id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button id="delete-btn">Delete</button>
      <button id="edit-btn">Edit</button>
    </div>
  );
};

export default Post;
