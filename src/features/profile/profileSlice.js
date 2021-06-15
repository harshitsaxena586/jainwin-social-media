import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gql } from "graphql-request";

export const fetchProfile = createAsyncThunk(
  "fetch Client private profile ",
  async (networkCall) => {
    const query = gql`
      {
        profile {
          id
          name
          userName
          following {
            userName
            id
          }
          followers {
            userName
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
    const data = await networkCall(query);
    return data;
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    status: "idle",
    profile: {},
  },
  reducer: {},
  extraReducers: {
    [fetchProfile.fulfilled]: (state, action) => {
      state.profile = action.payload.profile;
      state.status = "fullfilled";
    },
  },
});

export const { likeButtonPressed } = profileSlice.actions;
export default profileSlice.reducer;
