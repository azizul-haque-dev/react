import React, { useEffect, useReducer } from "react";

import { useAuth } from "../hooks/useAuth";

import { actions } from "../actions/index";
import PostList from "../components/Post/PostList";
import useAxios from "../hooks/useAxios";
import { initialState, postReducer } from "../reducers/postReducer";

const HomePage = () => {
  const { auth } = useAuth();
  const [state, dispatch] = useReducer(postReducer, initialState);

  const { api } = useAxios();
  console.log(actions);

  useEffect(() => {
    async function fetchPosts() {
      dispatch({ type: actions.posts.DATA_FETCHING });
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.posts.DATA_FETCHED,
            data: response.data
          });
        }
      } catch (err) {
        dispatch({
          type: actions.posts.DATA_FETCH_ERROR,
          error: err.message
        });
      }
    }
    fetchPosts();
  }, []);
  const { posts, loading, error } = state;

  return (
    <>
      {loading && <p className="text-center">Loading posts...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      <PostList posts={posts} />
    </>
  );
};

export default HomePage;
