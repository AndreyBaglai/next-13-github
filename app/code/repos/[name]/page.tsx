import React, { Suspense } from "react";
import Link from "next/link";

// components
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({ params }: any) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>

      <Suspense fallback="Loading repo...">
        <Repo name={params.name} />
      </Suspense>

      <Suspense fallback="Loading directories...">
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
