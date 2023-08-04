import Link from "next/link";
import React from "react";

const fetchRepoContents = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/AndreyBaglai/${name}/contents`
  );
  const contents = await response.json();
  return contents;
};

const RepoDirs = async ({ name }: any) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content: any) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
