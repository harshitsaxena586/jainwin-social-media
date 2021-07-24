import { gql } from "graphql-request";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNetwork } from "../NetworkContext";
import Avatar from "boring-avatars";

export default function Search() {
  const { networkCall } = useNetwork();
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const onFocus = () => setFocused(true);
  const onBlur = () =>
    setTimeout(() => {
      setFocused(false);
    }, 250);

  const fetchUsers = async () => {
    const query = gql`
      {
        users {
          id
          userName
          name
        }
      }
    `;
    const response = await networkCall(query);
    setData(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function SearchResults() {
    return data.users.map(({ userName, name, id }, idx) => {
      if (userName.toLowerCase().includes(query.toLowerCase())) {
        return (
          <Link to={`/u/${id}`}>
            <div
              key={idx}
              className="text-xl flex gap-4 font-primary mb-4 "
              onClick={() => setFocused(true)}
            >
              <Avatar
                size={40}
                name={userName}
                variant="beam"
                colors={["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]}
              />
              <div className="">
                <h1>@{userName}</h1>
                <h2>{name}</h2>
              </div>
            </div>
          </Link>
        );
      }
    });
  }

  return (
    <div className="hidden md:block">
      <div class="outline w-3/4 my-6 border-2 focus-within:border-accent rounded-2xl">
        <input
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Search...  "
          class="block p-4 text-lg appearance-none focus:outline-none bg-transparent"
        />
      </div>
      {focused && (
        <div className="shadow-md p-4 rounded-md ">
          <SearchResults />
        </div>
      )}
    </div>
  );
}
