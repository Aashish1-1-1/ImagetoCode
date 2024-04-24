//import type { NextApiRequest, NextApiResponse } from 'next'
//import {join} from 'path'
//import { writeFile } from 'fs/promises'
//
//type ResponseData = {
//  message: string
//}
// 
//export default function handler(
//  req: NextApiRequest,
//  res: NextApiResponse<ResponseData>
//) {
//	const formData=req.body
//	const image=formData.slice(156,formData.length-63)
//	const path = join(process.cwd(),'pages/api',"")
//	writeFile(path,image)
//  res.status(200).json({ message: 'Image received' })
//}
