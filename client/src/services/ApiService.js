import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

// Auth

const loadUser = () => {
  return axios.get("/api/auth");
};

const registerUser = body => {
  return axios.post("/api/users", body, config);
};

const loginUser = body => {
  return axios.post("/api/auth", body, config);
};

// Post

const getPosts = () => {
  return axios.get("/api/posts");
};

const getPost = id => {
  return axios.get(`/api/posts/${id}`);
};

const addLike = id => {
  return axios.put(`/api/posts/like/${id}`);
};

const removeLike = id => {
  return axios.put(`/api/posts/unlike/${id}`);
};

const deletePost = id => {
  return axios.delete(`/api/posts/${id}`);
};

const addPost = formData => {
  return axios.post("/api/posts/", formData, config);
};

const addComment = (postId, formData) => {
  return axios.post(`/api/posts/comment/${postId}`, formData, config);
};

const deleteComment = (postId, commentId) => {
  return axios.delete(`/api/posts/comment/${postId}/${commentId}`);
};

export default {
  loadUser,
  registerUser,
  loginUser,
  getPosts,
  addLike,
  removeLike,
  deletePost,
  addPost,
  getPost,
  addComment,
  deleteComment
};
