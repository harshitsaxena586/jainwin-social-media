import React from "react";
import toast from "react-hot-toast";
export default function Settings() {
  const logoutHandler = () => {
    localStorage.clear();
    return (
      toast.success(
        <h1 className="text-md font-primary font-medium">
          Successfully logged out 👋
        </h1>
      ),
      window.location.reload()
    );
  };
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-xl font-primary font-medium text-center">
        Didnt Like the Stay, no worries You can ...
      </h1>
      <div className="mt-4">
        <button className="btn-indigo" onClick={() => logoutHandler()}>
          Logout
        </button>
      </div>
    </div>
  );
}
