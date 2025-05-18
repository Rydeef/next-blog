"use client";

import React, { useContext, useState } from "react";
import "react-quill-new/dist/quill.bubble.css";

import dynamic from "next/dynamic";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import classNames from "classnames";
import { Input } from "@/shared/input/Input";
import { Select } from "@/shared/select/Select";
import Image from "next/image";
import { Button } from "@/shared/button/Button";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const OPTIONS_MAPPING = [
  {
    value: "style",
    label: "Style",
  },
  {
    value: "fashion",
    label: "Fashion",
  },
  {
    value: "food",
    label: "Food",
  },
  {
    value: "culture",
    label: "Culture",
  },
  {
    value: "travel",
    label: "Travel",
  },
  {
    value: "coding",
    label: "Coding",
  },
];

const WritePage = () => {
  const { theme } = useContext(ThemeContext);

  const [value, setValue] = useState("");
  const [, setTitle] = useState("");
  const [, setCatSlug] = useState("");

  const handleChangeCatSlug =
    (e: React.ChangeEvent<HTMLSelectElement>) => () => {
      setCatSlug(e.target.value);
    };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => () => {
    setTitle(e.target.value);
  };

  return (
    <div
      className={classNames({
        "h-148": true,
        "text-white": theme === Theme.DARK,
        "text-black": theme === Theme.LIGHT,
      })}
    >
      <div className="flex justify-between">
        <div>
          <Input type="text" placeholder="Title" onChange={handleChangeTitle} />
          <Select
            className="ml-4"
            onChange={handleChangeCatSlug}
            options={OPTIONS_MAPPING}
          />
        </div>
        <Button className="self-end">Publish</Button>
      </div>
      <div className="mt-4">
        <div className="space-x-4 mt-1">
          <input type="file" id="image" style={{ display: "none" }} />
          <Button variant="link">
            <label htmlFor="image" className="cursor-pointer">
              <Image src="/image.svg" alt="" width={16} height={16} />
            </label>
          </Button>
        </div>
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          className={classNames({
            "border-t-1 border-purple-400 mt-4 h-48": true,
            "text-white": theme === Theme.DARK,
            "text-slate-800": theme === Theme.LIGHT,
          })}
          placeholder="Tell your story..."
        />
      </div>
    </div>
  );
};

export default WritePage;
