import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { gql } from "graphql-request";

export const fetchUser = createAsyncThunk(
  "fetch user public profile ",
  async ({ userId, networkCall }) => {
    const query = gql`
      query ($userId: ID!) {
        user(userId: $userId) {
          userName
          id
          following {
            userName
            id
          }
          followers {
            userName
            id
          }
          posts {
            title
            caption
            likes {
              userName
            }
          }
        }
      }
    `;
    const variables = {
      userId: userId,
    };
    const data = await networkCall(query, false, variables);
    return data;
  }
);

export const followUser = createAsyncThunk(
  "follow users",
  async ({ userId, networkCall }) => {
    const query = gql`
      mutation ($userId: ID!) {
        follow(toFollow: $userId)
      }
    `;

    const variables = {
      userId: userId,
    };
    const data = await networkCall(query, true, variables);
    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    user: {},
    isUserFollowedByClient: false,
  },
  reducer: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.status = "fullfilled";
      const { followers } = action.payload.user;
      const client = localStorage.getItem("userId");
      const isUserFollowedByClient = followers.find(({ id }) => id === client);
      if (isUserFollowedByClient) {
        state.isUserFollowedByClient = true;
      }
    },
    [followUser.fulfilled]: (state, action) => {
      const { followers } = current(state.user);
      const client = localStorage.getItem("userId");
      const isUserFollowedByClient = followers.find(({ id }) => id === client);
      console.log(isUserFollowedByClient);
      if (isUserFollowedByClient) {
        const updadtedFolllowers = followers.filter(({ id }) => id != client);
        state.user.followers = updadtedFolllowers;
        state.isUserFollowedByClient = false;
      } else if (!isUserFollowedByClient) {
        state.user.followers.push({ id: client });
        state.isUserFollowedByClient = true;
      }
    },
  },
});

export default userSlice.reducer;
