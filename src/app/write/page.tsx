"use client";

import React, { useContext, useEffect, useState } from "react";
import "react-quill-new/dist/quill.bubble.css";

import dynamic from "next/dynamic";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import classNames from "classnames";
import { Input } from "@/shared/input/Input";
import { Select } from "@/shared/select/Select";
import Image from "next/image";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Button } from "@/shared/button/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebase";

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
  const { status } = useSession();
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("style");
  const [file, setFile] = useState<File | null>(null);
  const [, setUploadStatus] = useState<number>();
  const [media, setMedia] = useState("");

  const handleChangeCatSlug = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCatSlug(e.target.value);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target.files?.length) {
      return;
    }
    setFile(e?.target.files[0]);
  };

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      if (!file) return;

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setUploadStatus(progress);
        },
        () => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setFile(null);
          });
        }
      );
    };

    upload();
  }, [file]);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.id}`);
    }
  };

  if (status === "unauthenticated") {
    router.push("/");
  }

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
        <Button className="self-end" onClick={handleSubmit}>
          Publish
        </Button>
      </div>
      <div className="mt-4">
        <div className="space-x-4 mt-1">
          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
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
