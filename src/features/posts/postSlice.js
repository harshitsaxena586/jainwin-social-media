import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { gql } from "graphql-request";

export const updateLikes = createAsyncThunk(
  "add likes on server",
  async ({ id, networkCall }) => {
    const clientuserName = localStorage.getItem("userName");
    const query = gql`
      mutation ($postId: ID!, $clientuserName: String!) {
        updateLikes(postId: $postId, clientuserName: $clientuserName)
      }
    `;
    const variables = {
      postId: id,
      clientuserName: clientuserName,
    };
    //here , the second arguement is for client lie
    const data = await networkCall(query, true, variables);
    return data;
  }
);

export const fetchposts = createAsyncThunk(
  "fetch posts from server",
  async (networkCall) => {
    const query = gql`
      {
        posts {
          id
          title
          public_id
          caption
          postedBy {
            userName
            id
          }
          likes {
            id
          }
        }
      }
    `;
    const response = await networkCall(query);
    return response;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    status: "idle",
    posts: [],
    error: null,
  },

  reducers: {},
  extraReducers: {
    [fetchposts.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [updateLikes.fulfilled]: (state, action) => {
      const userId = localStorage.getItem("userId");
      const postToUpdate = state.posts.findIndex(
        (post) => post.id === action.meta.arg.id
      );
      const { likes } = current(state.posts[postToUpdate]);
      const isPostLikedByUserEarlier = likes.find(({ id }) => id === userId);
      if (isPostLikedByUserEarlier) {
        const updatedLikes = likes.filter(({ id }) => id !== userId);
        state.posts[postToUpdate].likes = updatedLikes;
      } else if (!isPostLikedByUserEarlier) {
        state.posts[postToUpdate].likes.push({ id: userId });
      }
    },
  },
});

export const { likeButtonPressed } = postSlice.actions;
export default postSlice.reducer;
