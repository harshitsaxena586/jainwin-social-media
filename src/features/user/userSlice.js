import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gql } from "graphql-request";

export const fetchUser = createAsyncThunk(
  "fetch user public profile ",
  async ({ userId, networkCall }) => {
    const query = gql`
      query ($userId: ID!) {
        user(userId: $userId) {
          userName
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
    },
    [followUser.fulfilled]: (state, action) => {
      state.user.followers.push({ id: action.payload });
      state.isUserFollowedByClient = true;
    },
  },
});

export default userSlice.reducer;
