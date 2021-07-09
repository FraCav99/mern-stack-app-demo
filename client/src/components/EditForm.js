import React from 'react';
import axios from 'axios';
import '../Form.css';

const Form = ({ setIsEdit, setIsUpdate, currentPost, setCurrentPost, url }) => {
  const { _id, title, content } = currentPost;

  const handleChange = ev => {
    setCurrentPost({ ...currentPost, [ev.target.id]: ev.target.value });
  };

  const editPost = async ev => {
    ev.preventDefault();

    // If edited post title or content are empty
    // stop function execution
    if (title === '' || content === '') return;
    try {
      await axios.patch(`${url}/${_id}`, {
        title,
        content,
      });

      setIsUpdate(true);
      setIsEdit(false);
      setCurrentPost();
    } catch (error) {
      console.log(error.message);
    }
  };

  const closeEdit = () => {
    setIsEdit(false);
    setCurrentPost();
  };

  return (
    <div className="form edit-form" onSubmit={editPost}>
      <form>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="Post title"
          onChange={handleChange}
        />
        <textarea
          id="content"
          name="content"
          placeholder="Your content here..."
          value={content}
          onChange={handleChange}
        />
        <button type="submit" onClick={editPost}>
          Edit Post!
        </button>
        <button id="close-edit" onClick={closeEdit}>
          Dismiss
        </button>
      </form>
    </div>
  );
};

export default Form;
