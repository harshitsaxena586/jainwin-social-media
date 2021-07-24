import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { useNetwork } from "../../NetworkContext";
import { fetchposts, updateLikes } from "./postSlice";

export default function Posts({ userId }) {
  const { networkCall, Loading } = useNetwork();

  let { posts, status } = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();

  if (userId) {
    posts = posts.filter((post) => post.postedBy.id == userId);
  }

  // need to pass network call from here because thunk doesnt take context
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchposts(networkCall));
    }
  }, [dispatch, status]);

  return (
    <div>
      <Loading />
      {posts.map(({ id, public_id, postedBy, caption, likes, title }) => (
        <Post
          key={id}
          public_id={public_id}
          id={id}
          postedBy={postedBy}
          caption={caption}
          likes={likes}
          title={title}
          dispatch={dispatch}
          updateLikes={updateLikes}
          networkCall={networkCall}
        />
      ))}
    </div>
  );
}
