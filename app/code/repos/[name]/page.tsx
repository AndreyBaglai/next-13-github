import React from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";

const RepoPage = ({ params }: any) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Repo name={params.name} />
    </div>
  );
};

export default RepoPage;
