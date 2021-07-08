import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';
import PostForm from './components/PostForm';
import EditForm from './components/EditForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPost, setCurrentPost] = useState();
  const url = 'https://mern-app-stack-post.herokuapp.com';

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(url);
      setPosts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addPost = async ev => {
    ev.preventDefault();
    const title = document.getElementById('title');
    const content = document.getElementById('content');

    if (!title.value.trim() || !content.value.trim()) {
      return;
    }

    try {
      const newPost = {
        title: title.value.trim(),
        content: content.value.trim(),
      };

      await axios.post(url, newPost);
      title.value = '';
      content.value = '';
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletePost = async ev => {
    try {
      await axios.delete(`${url}/${ev.target.closest('.post').id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleEdit = async () => {
    const postsContainer = document.querySelector('.posts-container');
    postsContainer.classList.toggle('hidden');
    setIsEdit(!isEdit);
  };

  const setEditElement = ev => {
    const targetElement = ev.target.closest('.post');
    const titleEl = targetElement.querySelector('h2').textContent;
    const contentEl = targetElement.querySelector('p').textContent;

    setCurrentPost({
      _id: targetElement.id,
      title: titleEl,
      content: contentEl,
    });
  };

  const handlePost = ev => {
    if (ev.target.id === 'delete-btn') {
      deletePost(ev);
    }

    if (ev.target.id === 'edit-btn') {
      toggleEdit();
      setEditElement(ev);
    }
  };

  return (
    <div className="App">
      <h1>Post Page</h1>
      {isEdit ? (
        <EditForm
          closeEdit={toggleEdit}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          url={url}
        />
      ) : (
        <PostForm addNewPost={addPost} />
      )}
      <div className="posts-container" onClick={handlePost}>
        {posts.length > 0 ? (
          posts.map(post => (
            <Post
              title={post.title}
              content={post.content}
              id={post._id}
              key={post._id}
            />
          ))
        ) : (
          <p>No post available!</p>
        )}
      </div>
    </div>
  );
}

export default App;
