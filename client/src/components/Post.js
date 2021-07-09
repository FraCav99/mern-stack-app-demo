import React from 'react';
import axios from 'axios';

const Post = ({
  title,
  content,
  id,
  url,
  setIsUpdate,
  setIsEdit,
  setCurrentPost,
}) => {
  const deletePost = async id => {
    try {
      await axios.delete(`${url}/${id}`);
      setIsUpdate(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const openEdit = id => {
    setIsEdit(true);
    setCurrentPost({
      _id: id,
      title,
      content,
    });
  };

  return (
    <div className="post" id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button id="delete-btn" onClick={() => deletePost(id)}>
        Delete
      </button>
      <button id="edit-btn" onClick={() => openEdit(id)}>
        Edit
      </button>
    </div>
  );
};

export default Post;
