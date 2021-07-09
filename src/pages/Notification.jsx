import React from "react";
import Notifications from "../features/notification/Notifications";

export default function Notification() {
  return (
    <div className=" justify-center items-center h-full my-6">
      <h1 className="text-6xl font-primary font-semibold text-center mb-10">
        Notifcations
      </h1>

      <Notifications />
    </div>
  );
}
