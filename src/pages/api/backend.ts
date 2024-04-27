import type { NextApiRequest, NextApiResponse } from 'next'
import {join} from 'path';
const fs = require("fs");
const { exec } = require('node:child_process');


const {run}=require('./gemini.ts');
const {generateRandomString}=require('./randomstr.ts')
type ResponseData = {
  message: string
}
 
const URL = "";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

const data = req.body;
  const URL = data;   // this url is reflecting url og user input image. later using this url covert it into text using gemini api
    const path=`./pages/api/${generateRandomString(8)}.png`
    saveBase64Image(URL,path);

    // Function to save base64 image to file
	function saveBase64Image(URL, image) {
	 	 // Remove the data:image/jpeg;base64 prefix
	 	 const base64Data = URL.replace(/^data:image\/\w+;base64,/, '');
	 	 // Create a buffer from the base64 string
	 	 const imageBuffer = Buffer.from(base64Data, 'base64');
	
	 	 // Write the buffer to a file
	 	 fs.writeFileSync(image, imageBuffer);
	}
	await run(path).then(function(result){
		exec(`rm -r ${path}`,(err,output)=>{
			if(err){
				console.log("Couldn't delete file",err);
				return
			}
			console.log("Cleaned file")
		})
		res.status(200).json({
			json:result
		})
	});


}
