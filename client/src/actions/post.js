import { setAlert } from "./alert";

import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./types";

import ApiService from "../services/ApiService";

// Get posts

export const getPosts = () => async dispatch => {
  try {
    const res = await ApiService.getPosts();

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add like

export const addLike = id => async dispatch => {
  try {
    const res = await ApiService.addLike(id);

    dispatch({
      type: UPDATE_LIKES,
      payload: {
        id,
        likes: res.data
      }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove like

export const removeLike = id => async dispatch => {
  try {
    const res = await ApiService.removeLike(id);

    dispatch({
      type: UPDATE_LIKES,
      payload: {
        id,
        likes: res.data
      }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete post

export const deletePost = id => async dispatch => {
  try {
    await ApiService.deletePost(id);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post

export const addPost = formData => async dispatch => {
  try {
    const res = await ApiService.addPost(formData);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert("Post Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post

export const getPost = id => async dispatch => {
  try {
    const res = await ApiService.getPost(id);

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment

export const addComment = (postId, formData) => async dispatch => {
  try {
    const res = await ApiService.addComment(postId, formData);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete comment

export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await ApiService.deleteComment(postId, commentId);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert("Comment removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
