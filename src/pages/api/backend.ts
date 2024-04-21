import type { NextApiRequest, NextApiResponse } from 'next';
import path from "path";
import {writeFile} from "fs/promises"
import { NextResponse } from 'next/server';
import fs from "fs";
 
type ResponseData = {
  message: string
}

export const config = {
  api: {
    bodyParser: false,
  },
  runtime: 'edge',
};


export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const formData = req.formData();
  const file = formData.get("file");

  if(!file) {
    return NextResponse.json({error: "No files recived."}, {status:400});
  }

  const filename = file.name;
  

// server ko image lai folder ma save garne

  // try
  // {
  //   await writeFile(
  //     path.join(process.cwd(),"/src/pages" + filename));
  //     return NextResponse.json({Message: "Success", status: 201});
  // }
  // catch (error){
  //   console.log("Error occured", error);
  //   return NextResponse.json({Message:"failed", status:500})

  // }


}