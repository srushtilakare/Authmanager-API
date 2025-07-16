const Post = require('../models/Post');

const createPost = async (data) => {
  const post = new Post(data);
  return await post.save();
};

const getAllPosts = async () => {
  return await Post.find().populate('author', 'name email');
};

module.exports = {
  createPost,
  getAllPosts
};
