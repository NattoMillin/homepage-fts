"use client";

import "./style.scss";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

export default function Home() {
  const [id, setId] = useState("");
  const HandleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  return (
    <>
      <Link href={"/about"}>go AboutPage</Link>
      <Link href={"/account"}>go accountPage</Link>

      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          value={id}
          onChange={HandleClick}
          placeholder="Type something..."
        />
        <Link href={`/blog/${id}`}>go accountPage</Link>
      </div>
    </>
  );
}
