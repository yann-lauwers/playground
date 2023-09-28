// import { db, todos } from "@lauwersoo/database";

import type { NextApiResponse } from "next"
import type { NextRequest } from "next/server"

export function POST(req: NextRequest, res: NextApiResponse): void {
  if (req.method !== "POST") {
    res.status(403).json({
      message: "Only supports POST method!",
    })
    return
  }

  // const { text } = JSON.parse(req.body);

  // if (!text) {
  //   res.status(400).json({
  //     message: "Fields cannot be empty",
  //   });
  //   return;
  // }

  // Inserting tasks into ‘todos’ table
  try {
    // const todo = await db
    //   .insert(todos)
    //   .values({
    //     id: Math.floor(Math.random() * 1000),
    //     text: text,
    //   })
    //   .returning()
    //   .get();

    // res.status(201).json({ todo });
    res.status(201).json({})
  } catch (err) {
    // Handle query error
    console.error(err)
    res.status(500).send("Internal Server Error")
  }
}
