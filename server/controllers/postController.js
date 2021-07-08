const Post = require('../models/Post');

exports.get_post = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.create_post = async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });

  try {
    await newPost.save().then(data => res.json(data));
  } catch (err) {
    console.log(`An error occur while saving on DB: ${err}`);
  }
};

exports.get_postindex = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      $set: { title, content },
    });
    res.json(updatedPost);
  } catch (err) {
    res.json(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndRemove(req.params.id);
    res.json(deletedPost);
  } catch (error) {
    res.json(err);
  }
};
