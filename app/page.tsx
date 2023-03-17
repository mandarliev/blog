import React from "react";
import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

function HomePage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div className=" border-slate-200 p-4 rounded-md shadow-md bg-white m-4">
      <Link href={`/posts/${slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline">{slug}</h2>
      </Link>
    </div>
  ));
  return <div>{postPreviews}</div>;
}

export default HomePage;
