import React from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddPost from "./features/newPost/AddPost";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Landing from "./pages/Landing";
import Notification from "./pages/Notification";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import User from "./features/user/User";
import Settings from "./pages/Settings";

function App() {
  const isUserLoggedIn = localStorage.getItem("userId");
  return (
    <div className="App ">
      <div className="fixed">
        <Toaster />
      </div>
      {isUserLoggedIn ? (
        <div className="md:grid grid-cols-4 ">
          <Navbar />
          <div className="md:col-span-2 m-4 md:ml-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/land" element={<Landing />} />
              <Route path="/new" element={<AddPost />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/u/:userId" element={<User />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
           
          <Search />
        </div>
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
