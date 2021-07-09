import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../counter/counterSlice";
import { postSlice } from "../features/posts/postSlice";
import { profileSlice } from "../features/profile/profileSlice";
import { userSlice } from "../features/user/userSlice";
import { notificationSlice } from "../features/notification/notificationSlice";
export const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    profile: profileSlice.reducer,
    user: userSlice.reducer,
    notification: notificationSlice.reducer,
  },
});
