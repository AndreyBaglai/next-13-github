import { NextResponse } from "next/server";

import { Course } from "@/app/types";

import coursesData from "../data.json";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (query) {
    const filteredCourses = coursesData.filter((course: Course) =>
      course.title.toLowerCase().includes(query?.toLocaleLowerCase())
    );

    return NextResponse.json(filteredCourses);
  }

  return NextResponse.json([]);
}
