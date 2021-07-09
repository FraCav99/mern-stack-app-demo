import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';
import PostForm from './components/PostForm';
import EditForm from './components/EditForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdate, setIsUpdate] = useState(true);
  const [currentPost, setCurrentPost] = useState();
  const url = 'https://mern-app-stack-post.herokuapp.com';

  useEffect(() => {
    if (!isUpdate) return;
    fetchPosts();
    setIsUpdate(false);
  }, [isUpdate]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(url);
      setPosts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Post Page</h1>
      {isEdit ? (
        <EditForm
          setIsEdit={setIsEdit}
          setIsUpdate={setIsUpdate}
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          url={url}
        />
      ) : (
        <PostForm url={url} setIsUpdate={setIsUpdate} />
      )}
      <div className={isEdit ? 'hidden' : 'posts-container'}>
        {posts.length > 0 ? (
          posts.map(post => (
            <Post
              title={post.title}
              content={post.content}
              id={post._id}
              setIsUpdate={setIsUpdate}
              setCurrentPost={setCurrentPost}
              setIsEdit={setIsEdit}
              key={post._id}
              url={url}
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
