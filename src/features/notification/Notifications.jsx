import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNetwork } from "../../NetworkContext";
import { fetchNotifications, clearAll } from "./notificationSlice";
import Notification from "../../components/Notification";
import toast from "react-hot-toast";
export default function Notifications() {
  const { networkCall, Loading } = useNetwork();
  const { notifications, status } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNotifications(networkCall));
    }
  }, [dispatch, status]);

  const clearAllNotification = () => {
    dispatch(clearAll(networkCall));
  };

  const refreshHandler = () => {
    toast.success(
      <h1 className="text-lg font-primary font-medium">
        Refreshed Notifications
      </h1>
    );
    dispatch(fetchNotifications(networkCall));
  };
  return (
    <div>
      {status === "fullfilled" ? (
        <div>
          <div className="flex gap-4 justify-center mb-4">
            <button
              onClick={() => refreshHandler()}
              className="px-4 py-3 rounded-lg text-2xl font-primary   
 border-2 text-black border-indigo-600 active:bg-green-500 "
            >
              Refresh
            </button>
            <button
              onClick={() => clearAllNotification()}
              className="btn-indigo rounded-2xl"
            >
              Clear All
            </button>
          </div>
          {notifications.map((notification) => {
            if (!notification) {
              return <div>No Notifications</div>;
            }
            return <Notification data={notification} />;
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
