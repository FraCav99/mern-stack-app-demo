import React from 'react';
import '../Form.css';

const Form = ({ addNewPost }) => {
  return (
    <div className="form post-form">
      <form onSubmit={ev => addNewPost(ev)}>
        <input type="text" id="title" name="title" placeholder="Post title" />
        <textarea
          id="content"
          name="content"
          placeholder="Your content here..."
        />
        <button type="submit">Add Post!</button>
      </form>
    </div>
  );
};

export default Form;
