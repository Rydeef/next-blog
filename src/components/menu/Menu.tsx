import React from "react";
import { Popular } from "./Popular";
import { Categories } from "./Categories";
import { EditorsPick } from "./EditorsPick";

const Menu = () => {
  return (
    <div className="flex-2 ml-4 w-full">
      <h3 className="text-sm text-gray-400">{"What's hot"}</h3>
      <h2 className="font-bold">Most popular</h2>
      <Popular />

      <h3 className="text-sm text-gray-400">Discover by topic</h3>
      <h2 className="font-bold">Categories</h2>
      <Categories />

      <h3 className="text-sm text-gray-400">Choosen by the editor</h3>
      <h2 className="font-bold">Editors pick</h2>
      <EditorsPick />
    </div>
  );
};

export default Menu;
