import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  return new NextResponse("Hello Next.js!");
}
