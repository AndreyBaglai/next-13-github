import { NextApiRequest } from "next";
import courses from "./data.json";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  return NextResponse.json(courses);
}
