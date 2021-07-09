import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "graphql-request";
export const fetchNotifications = createAsyncThunk(
  "notification/fetchNotfications",
  async (networkCall) => {
    const query = gql`
      {
        profile {
          notifications {
            id
            refUserId
            type
            content
            isRead
          }
        }
      }
    `;
    const result = await networkCall(query);
    return result;
  }
);

export const clearAll = createAsyncThunk(
  "notifications/clearAll",
  async (networkCall) => {
    const query = gql`
      mutation {
        removeNotification
      }
    `;

    const result = await networkCall(query);
    return result;
  }
);
export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [],
    status: "idle",
  },
  reducer: {},
  extraReducers: {
    [fetchNotifications.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.notifications = action.payload.profile.notifications;
    },
    [clearAll.fulfilled]: (state, action) => {
      state.notifications = [];
    },
  },
});

export default notificationSlice;
