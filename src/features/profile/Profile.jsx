import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNetwork } from "../../NetworkContext";
import { fetchProfile } from "./profileSlice";
import Avatar from "boring-avatars";
import Posts from "../posts/Posts";
import { Link } from "react-router-dom";
export default function Profile() {
  const { networkCall, Loading } = useNetwork();
  const { profile, status } = useSelector((state) => {
    return state.profile;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProfile(networkCall));
    }
  }, [dispatch, status]);

  const { id, name, userName, followers, following, posts } = profile;
  return (
    <div>
      <Loading />
      {status === "fullfilled" && (
        <div>
          <div className="profile-banner rounded-lg h-40 w-92 relative ">
            <div className="absolute border-4 border-white rounded-full -bottom-10 left-1/2 -translate-x-1/2 transform">
              <Avatar
                size={100}
                name={userName}
                variant="beam"
                colors={["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]}
              />
            </div>
          </div>
          <h1 className="text-center mt-12 font-primary text-gray-800 text-4xl  font-semibold md:text-6xl">
            {name}
          </h1>
          <h1 className="text-center mt-1.5 font-secondary text-xl text-indigo-500 font-semibold md:text-2xl">
            @{userName}
          </h1>

          <div className="flex justify-center gap-x-16 font-primary mb-12 mt-6">
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
          <div className="fixed bottom-20 right-4 md:hidden">
            <Link to="/settings">
              <button className="bg-white shadow-md w-14 h-14 flex justify-center items-center rounded-full ">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                    stroke="#0C0310"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7823 5.6046C17.8592 2.57614 22.1422 2.57614 23.219 5.60459C23.8973 7.51175 26.0758 8.41412 27.904 7.54514C30.8068 6.16522 33.8353 9.19367 32.4555 12.0966C31.5865 13.9248 32.4888 16.1033 34.396 16.7816C37.4245 17.8584 37.4245 22.1414 34.396 23.2183C32.4888 23.8966 31.5865 26.0751 32.4555 27.9033C33.8353 30.8061 30.8068 33.8346 27.904 32.4548C26.0758 31.5858 23.8973 32.4881 23.219 34.3953C22.1422 37.4238 17.8592 37.4238 16.7823 34.3953C16.104 32.4881 13.9255 31.5858 12.0974 32.4548C9.1944 33.8346 6.16595 30.8061 7.54587 27.9033C8.41485 26.0751 7.51249 23.8966 5.60532 23.2183C2.57687 22.1414 2.57687 17.8584 5.60534 16.7816C7.51249 16.1033 8.41485 13.9248 7.54587 12.0966C6.16595 9.19367 9.1944 6.16522 12.0974 7.54514C13.9255 8.41412 16.104 7.51175 16.7823 5.6046Z"
                    stroke="#0C0310"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <Posts userId={id} />
        </div>
      )}
    </div>
  );
}
