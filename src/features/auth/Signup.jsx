import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function Signup() {
  const validation = Yup.object().shape({
    userName: Yup.string()
      .required("Username is required")
      .matches(
        /^([A-z0-9!@#$%^&*().,<>{}[\]<>?_=+\-|;:\'\"\/])*[^\s]\1*$/,
        "Username should not have spaces "
      ),
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validation),
  });
  console.log(errors);
  const onSubmit = async (credentials) => {
    try {
      const response = await axios.post(
        "https://socialMediaApollo.harshitsaxena58.repl.co/users/s",
        {
          credentials,
        }
      );
      toast.success(
        <h1 className="text-md font-primary font-medium">
          Signed Successful Please Login
        </h1>
      );
    } catch (error) {
      if (error && error.response.status === 403) {
        toast.error(
          <h1 className="text-md font-primary font-medium">
            Uh oh... Username already Taken{" "}
          </h1>
        );
      } else {
        toast.error(
          <h1 className="text-md font-primary font-medium">
            Looks Like Thanos Broke Ours Servers{" "}
          </h1>
        );
      }
    }
  };

  return (
    <div className="my-10 min-w-full shadow-2xl rounded-md  pb-16 md:p-10">
      <h2 className="text-5xl my-3 text-gray-900 text-center font-primary font-bold">
        Sign Up
      </h2>
      <form
        className="flex flex-col mx-4 gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          {...register("name")}
          placeholder="Name"
          class="text-lg shadow ring-accent outline-none focus:ring-2 focus:ring-offset-red-600 p-2 rounded-md"
        />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
        <input
          type="text"
          {...register("userName")}
          placeholder=" Username"
          class="text-lg shadow ring-accent  outline-none focus:ring-2 focus:ring-offset-red-600 p-2 rounded-md"
        />
        {errors.userName && (
          <p className="form-error">{errors.userName.message}</p>
        )}

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          class="text-lg shadow ring-accent  outline-none focus:ring-2 focus:ring-offset-red-600 p-2 rounded-md"
        />
        {errors.password && (
          <p className="form-error">{errors.password.message}</p>
        )}
        <button className="btn-indigo" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
