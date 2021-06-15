import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Settings() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    return (
      toast.success(
        <h1 className="text-md font-primary font-medium">
          Successfully logged out 👋
        </h1>
      ),
      navigate("/")
    );
  };
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-xl font-primary font-medium text-center">
        Didnt Liked the Stay, no worries You can ... 
      </h1>
      <div className="mt-4">
        <button className="btn-indigo" onClick={() => logoutHandler()}>
          Logout
        </button>
      </div>
    </div>
  );
}
