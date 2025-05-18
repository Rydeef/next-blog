import { Button } from "@/shared/button/Button";
import React from "react";

const Pagination = () => {
  return <div className="flex justify-between">
    <Button>Previous</Button>
    <Button>Next</Button>
  </div>;
};

export default Pagination;
