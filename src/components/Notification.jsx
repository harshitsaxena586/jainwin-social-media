import React from "react";
import { Link } from "react-router-dom";

export default function Notification({ data }) {
  const { id, refUserId, type, content, isRead } = data;
  return (
    <Link to={`/u/${refUserId}`}>
      <div className="text-xl border-2 m-3 p-4 rounded-lg border-accent cursor-pointer font-medium font-secondary">
        {content}
      </div>
    </Link>
  );
}
