import { writeFile } from 'fs/promises'
import { join } from 'path'
const {run}=require('../pages/api/gemini.ts')



export default function ServerUploadPage() {



  async function upload(data: FormData) {
    'use server'


    const file: File | null = data.get('file') as unknown as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join(process.cwd(), 'app', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)
    run().then(function(result){
    	console.log(result)
    });

    return { success: true }
  }
   return (
      <form className="w-full max-w-sm ml-80" action={upload}>
         <div className="flex items-center border-b border-teal-500 py-2">
            <input  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  placeholder="Add code img" type="file" name="file" accept="image/*"/>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" value="Upload" type="submit">Submit</button>
         </div>
      </form>
   );
}
