import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

import { Course } from "@/app/types";

import coursesData from "./data.json";

export async function GET(request: NextApiRequest) {
  return NextResponse.json(coursesData);
}

export async function POST(request: any) {
  const { title, description, level, link } = await request.json(coursesData);

  const newCourse: Course = {
    title,
    description,
    level,
    link,
    id: uuidv4(),
  };

  coursesData.push(newCourse);

  return NextResponse.json(coursesData);
}
