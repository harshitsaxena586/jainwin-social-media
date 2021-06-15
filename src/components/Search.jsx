import React from "react";

export default function Search() {
  return (
    <div className="hidden md:block">
      <div class="outline w-3/4 my-6 border-2 focus-within:border-accent rounded-2xl">
        <input
          type="text"
          name="title"
          placeholder="Search Coming shortly  "
          class="block p-4 text-lg appearance-none focus:outline-none bg-transparent"
        />
      </div>
    </div>
  );
}
