import React, { useState } from 'react';
import axios from 'axios';
import '../Form.css';

const Form = ({ url, setIsUpdate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleHandler = ev => {
    setTitle(ev.target.value);
  };

  const contentHandler = ev => {
    setContent(ev.target.value);
  };

  const addNewPost = async ev => {
    ev.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    try {
      const newPost = {
        title: title.trim(),
        content: content.trim(),
      };

      await axios.post(url, newPost);
      setTitle('');
      setContent('');
      setIsUpdate(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form post-form">
      <form onSubmit={addNewPost}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Post title"
          value={title}
          onChange={titleHandler}
        />
        <textarea
          id="content"
          name="content"
          placeholder="Your content here..."
          value={content}
          onChange={contentHandler}
        />
        <button type="submit">Add Post!</button>
      </form>
    </div>
  );
};

export default Form;
