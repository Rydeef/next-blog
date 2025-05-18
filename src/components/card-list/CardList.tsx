import React from "react";
import Pagination from "../pagination/Pagination";

const CardList = () => {
  return (
    <div className="flex-5">
      <h1>Recent posts</h1>
      <Pagination />
    </div>
  );
};

export default CardList;
