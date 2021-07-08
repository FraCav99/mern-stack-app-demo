import React from 'react';
import axios from 'axios';
import '../Form.css';

const Form = ({ closeEdit, currentPost, setCurrentPost, url }) => {
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

      closeEdit();
      setCurrentPost();
    } catch (error) {
      console.log(error.message);
    }
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
        <button type="submit">Edit Post!</button>
        <button id="close-edit" onClick={closeEdit}>
          Dismiss
        </button>
      </form>
    </div>
  );
};

export default Form;
