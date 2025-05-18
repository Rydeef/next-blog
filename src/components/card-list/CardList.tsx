import React from "react";
import Pagination from "../pagination/Pagination";
import { Card } from "./Card";

const CardList = () => {
  return (
    <div className="flex-5">
      <h1>Recent posts</h1>
      <div className="my-8">
        <Card />
      </div>
      <div className="my-8">
        <Card />
      </div>
      <div className="my-8">
        <Card />
      </div>
      <div className="my-8">
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
