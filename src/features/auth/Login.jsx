import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

const guestCredentials = {
  userName: "guestUser",
  password: "@guestUser1",
};

export default function Login() {
  const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const guestLoginHandler = () => {
    onSubmit(guestCredentials);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validation),
  });

  const onSubmit = async (credentials) => {
    console.log(credentials);
    try {
      const response = await axios.post(
        "https://socialmediaapollo.shreydd.repl.co/users",
        {
          credentials,
        }
      );
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("userName", response.data.userName);
      toast.success(
        <h1 className="text-lg font-primary font-medium">Welcome Back ! </h1>
      );
      window.location.reload();
    } catch (error) {
      if (error.response.status === 404) {
        toast.error(
          <h1 className="text-lg font-primary font-medium">
            Username Not Found
          </h1>
        );
      } else if (error.response.status === 401) {
        toast.error(
          <h1 className="text-lg font-primary font-medium">
            Incorrect Password
          </h1>
        );
      }
    }
  };

  return (
    <div className="my-10 min-w-full shadow-2xl rounded-md md:p-10 ">
      <h2 className="text-5xl my-3 text-gray-900 text-center font-primary font-bold ">
        Login
      </h2>
      <form
        className="flex flex-col mx-4 gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("userName")}
          placeholder=" enter Username"
          name="userName"
          class="text-lg shadow ring-accent mt-4 outline-none focus:ring-2 focus:ring-offset-accent p-2 rounded-md"
        />
        {errors.userName && (
          <p className="form-error">{errors.userName.message}</p>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder=" enter password"
          class="text-lg shadow ring-accent outline-none focus:ring-2 focus:ring-offset-accent p-2 rounded-md"
        />
        {errors.password && (
          <p className="form-error">{errors.password.message}</p>
        )}
        <button className="btn-indigo" type="submit">
          Login
        </button>
      </form>
      <div className="mt-6 px-4 text-center text-lg font-secondary">
        <button
          title="Logs you in with a guest profile"
          className="text-2xl  min-w-full text-accent border-accent border-2 px-4 py-2  rounded-lg font-secondary font-semibold"
          onClick={guestLoginHandler}
        >
          Guest Login
        </button>{" "}
      </div>
    </div>
  );
}
