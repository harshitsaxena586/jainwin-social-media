import React, { useState } from "react";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import { motion } from "framer-motion";

export default function Landing() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const [action, setAction] = useState(null);
  return (
    <div className="bg-gray-50 flex w-full flex-wrap md:flex-nowrap	min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2 }}
        variants={variants}
        className=" self-center max-w-6xl m-4 md:m-16 "
      >
        <h1 className="font-primary font-bold text-6xl 2xl:text-7xl capitalize  ">
          Welcome to The biggest Community of{" "}
          <span className="text-accent">PC Hardware</span> enthusiasts
        </h1>
        <p className=" mt-4  text-xl md:text-2xl max-w-3xl capitalize font-primary font-medium ">
          From Beginners sharing their first build Experience to Serious Liquid
          Nitrogen Overclockers and Tons of RGB builds and Custom loops{" "}
        </p>
        <h2
          onClick={() => setAction("login")}
          className="mt-8 cursor-pointer text-accent font-bold text-3xl"
        >
          Join Now ▶{" "}
        </h2>
      </motion.div>

      <div className=" self-center  w-4/6 m-4 md:m-10 ">
        <div>
          {action === "login" && (
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              variants={variants}
            >
              <Login />
            </motion.div>
          )}
          {action === "signup" && (
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              variants={variants}
            >
              <Signup />
            </motion.div>
          )}
          {action && (
            <h1
              onClick={() => setAction(action === "login" ? "signup" : "login")}
              className="text-center text-xl cursor-pointer font-medium text-accent"
            >
              Or {action === "login" ? "Sign Up" : "Login"} Instead
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
