const postService = require('../services/postService');

const createPost = async (req, res) => {
  const post = await postService.createPost({ ...req.body, author: req.user.id });
  res.status(201).json(post);
};

const getPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};

module.exports = { createPost, getPosts };
