import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNetwork } from "../../NetworkContext";
import { fetchUser, followUser } from "./userSlice";
import Avatar from "boring-avatars";
import Posts from "../posts/Posts";
import { useParams } from "react-router-dom";

export default function User() {
  const { networkCall, Loading } = useNetwork();
  let { userId } = useParams();
  let { user, status, isUserFollowedByClient } = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUser({ userId, networkCall }));
    }
  }, [dispatch, status, userId]);
  const { userName, followers, following, posts } = user;
  if (userId !== user.id && status === "fullfilled") {
    status = "idle";
    dispatch(fetchUser({ userId, networkCall }));
  }
  return (
    <div>
      <Loading />
      {status === "fullfilled" && (
        <div>
          <div className="profile-banner rounded-lg h-40 w-92 relative ">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform">
              <Avatar
                size={100}
                name={userName}
                variant="beam"
                colors={["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]}
              />
            </div>
          </div>
          <h1 className="text-center mt-10 font-primary text-2xl font-medium">
            @{userName}
          </h1>

          <div className="flex justify-center gap-x-16 font-primary mb-6 mt-6">
            <div className="flex flex-col items-center ">
              <h1 className="font-secondary text-lg font-semibold text-gray-600">
                Followers
              </h1>
              <h2 className="text-2xl">{followers.length}</h2>
            </div>
            <div className="flex flex-col items-center ">
              <h1 className="font-secondary text-lg font-semibold text-gray-600">
                Posts
              </h1>
              <h2 className="text-2xl">{posts.length}</h2>
            </div>
            <div className="flex flex-col items-center ">
              <h1 className="font-secondary text-lg font-semibold text-gray-600">
                Following
              </h1>
              <h2 className="text-2xl">{following.length}</h2>
            </div>
          </div>
          <div className="flex mb-10">
            <button
              onClick={() => dispatch(followUser({ userId, networkCall }))}
              className="btn-indigo m-auto"
            >
              {isUserFollowedByClient ? "Following" : "Follow"}
            </button>
          </div>

          <Posts userId={userId} />
        </div>
      )}
    </div>
  );
}
