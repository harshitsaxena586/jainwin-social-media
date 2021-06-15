import React from "react";
import { Link } from "react-router-dom";
import Avatar from "boring-avatars";
import { Image } from "cloudinary-react";

export default function Post({
  postedBy,
  public_id,
  title,
  caption,
  likes,
  dispatch,
  updateLikes,
  id,
  networkCall,
}) {
  const screen = window.screen.width;

  const clientUserId = localStorage.getItem("userId");
  return (
    <div className="border-2 border-indigo-500 max-w-2xl   my-6 rounded-xl p-4 ">
      <Link
        to={`${
          clientUserId === postedBy.id ? "/profile" : `/u/${postedBy.id}`
        } `}
      >
        <div className="flex  items-center gap-2">
          <Avatar
            size={50}
            name={postedBy.userName}
            variant="beam"
            // colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            colors={["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]}
          />
          <h1 className="text-2xl font-primary font-medium  text-text">
            @{postedBy.userName}
          </h1>
        </div>
      </Link>
      {!public_id && (
        <h1 className="text-2xl m-4  font-primary font-regular">{title}</h1>
      )}
      {public_id && (
        <div className="py-4	">
          <Image
            className=" m-auto"
            radius="10"
            cloud_name="harshitsaxena"
            publicId={public_id}
            width={screen > 1200 ? "600" : "350"}
            loading="lazy"
            crop="scale"
          />
        </div>
      )}
      <p className="text-xl text-text font-secondary  xl:mx-4">{caption}</p>
      <button
        className="px-4 py-2 bg-red-200 m-2 rounded-xl "
        onClick={() => dispatch(updateLikes({ id, networkCall }))}
      >
        <h2>❤️ {likes.length}</h2>
      </button>
    </div>
  );
}
