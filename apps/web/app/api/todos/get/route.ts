// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { Todo, db, todos } from "@lauwersoo/database";
import type { NextApiResponse } from "next"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function GET(req: NextRequest, res: NextApiResponse): NextResponse | Response {
  if (req.method !== "GET") {
    res.status(403).end({
      message: "Only supports GET method!",
    })
  }

  // Fetching tasks from ‘todos’ table
  try {
    // const result = await db.select().from(todos).limit(2).all();

    // return NextResponse.json(result);
    return NextResponse.json({})
  } catch (err) {
    // Handle query error
    console.error(err)
    return NextResponse.error()
    // res.status(500).end("Internal Server Error");
  }
}

export const fetchCache = "force-no-store"
