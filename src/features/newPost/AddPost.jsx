import React, { useState } from "react";
import { useNetwork } from "../../NetworkContext";
import { useForm } from "react-hook-form";
import { gql } from "graphql-request";
import toast from "react-hot-toast";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
export default function AddPost() {
  const { networkCall } = useNetwork();
  const navigate = useNavigate();
  const [previewSource, setPreviewSource] = useState("");
  const validation = Yup.object().shape({
    caption: Yup.string().required("Caption is required"),
  });
  const userName = localStorage.getItem("userName");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validation),
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const watchImage = watch("image");

  if (watchImage === undefined) {
  }
  if (watchImage !== undefined) {
    if (watchImage.length !== 0) {
      previewFile(watchImage[0]);
    }
  }

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.image[0]);
    formData.append("upload_preset", "jainwinSocial");
    const query = gql`
      mutation ($title: String!, $caption: String!, $public_id: String) {
        addPost(title: $title, caption: $caption, public_id: $public_id)
      }
    `;

    if (data.image.length === 0) {
      const variables = {
        title: data.title,
        caption: data.caption,
      };

      const response = await networkCall(query, true, variables);
      toast.success(
        <h1 className="text-md font-primary font-medium">
          Posted successfully 🚀
        </h1>
      );

      navigate("/");
    }

    const cloudinaryRes = await axios.post(
      "https://api.cloudinary.com/v1_1/harshitsaxena/image/upload",
      formData
    );

    const variables = {
      title: data.title,
      caption: data.caption,
      public_id: cloudinaryRes.data.public_id,
    };

    const response = await networkCall(query, true, variables);
    toast.success(
      <h1 className="text-md font-primary font-medium">
        Posted successfully 🚀
      </h1>
    );

    navigate("/");
  };

  return (
    <div className=" p-6 max-w-2xl mx-auto rounded-lg justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="max-w-xl mx-auto rounded-lg shadow-2xl flex flex-col overflow-hidden p-6 space-y-8"
      >
        <h1 className="text-xl font-primary font-medium text-accent text-center">
          @{userName}
        </h1>
        <div class="outline relative border-2 focus-within:border-accent rounded-md">
          <input
            {...register("title")}
            type="text"
            name="title"
            placeholder="Some catchy title "
            class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
          />
        </div>
        {errors.title && <p className="form-error">{errors.title.message}</p>}

        <div class="outline rounded-lg relative border-2 focus-within:border-accent">
          <textarea
            {...register("caption")}
            name="caption"
            placeholder="Share something intresting"
            class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
          />
        </div>
        {errors.caption && (
          <p className="form-error">{errors.caption.message}</p>
        )}

        <label class="border-4 border-accent mx-auto w-24 h-24 px-4 py-2 flex justify-center items-center rounded-full">
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 8.33325V24.9999"
                stroke="#0C0310"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M31.6673 33.3333H8.33398"
                stroke="#0C0310"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M11.666 15.0002L18.8208 7.84534C19.4717 7.19446 20.527 7.19446 21.1778 7.84534L28.3327 15.0002"
                stroke="#0C0310"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <input
            type="file"
            name="file"
            className="hidden"
            {...register("image")}
          />
        </label>
        {previewSource && <img src={previewSource} alt="chosen" />}
        <button className="btn-indigo">Post</button>
      </form>
    </div>
  );
}
