"use client";

import "./style.scss";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

export default function Home() {
  const [id, setId] = useState("");
  const [userid, setUserid] = useState("");
  const [cateforyid, setCateforyid] = useState("");
  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const HandleChange_UserId = (event: ChangeEvent<HTMLInputElement>) => {
    setUserid(event.target.value);
  };
  const HandleChange_CategoryId = (event: ChangeEvent<HTMLInputElement>) => {
    setCateforyid(event.target.value);
  };
  return (
    <>
      <Link href={"/about"}>go AboutPage</Link>
      <Link href={"/account"}>go accountPage</Link>

      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          value={id}
          onChange={HandleChange}
          placeholder="Id"
        />
        <Link href={`/blog/${id}`} prefetch={false}>
          go BlogPage
        </Link>
        <input
          type="text"
          value={userid}
          onChange={HandleChange_UserId}
          placeholder="UserId"
        />
        <input
          type="text"
          value={cateforyid}
          onChange={HandleChange_CategoryId}
          placeholder="Category Id"
        />
        <Link href={`/blog/${id}/${userid}/${cateforyid}`} prefetch={false}>
          go BlogCategoryPage
        </Link>
      </div>
    </>
  );
}
