"use client"
import React, { useState } from 'react';
import { ColorRing } from "react-loader-spinner";
import CodeBox from './codebox.tsx';

let code:string="";
let optimizedcode:string=""
let language:string=""
export default function Pages(){
	const [urlfile, setFile] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [codebox, setCodebox] = useState(false);
	const [optimizability, setOptimizability] = useState(false);

	const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
		if (e.currentTarget.files && e.currentTarget.files.length > 0) {
			const file = e.currentTarget.files[0];
			const reader = new FileReader();
			reader.onload = () => {
				const fileUrl = reader.result as string;
				setFile(fileUrl); // Store file URL in state
			};
			reader.readAsDataURL(file); // Read file as data URL
		}
	};
	const handlesubmit= async (e)=>{
		setLoading(true)
		e.preventDefault();
		try{
			const response = await fetch('/api/backend',{
				headers: {
					'Accept': 'application/json',
				},
			 method:'POST',
			 body: urlfile,
			});
		if (response.ok) {
    			    const result = await response.json();
			    console.log(result);
			    code=result.json.code_snippet;
			    language=result.json.language;
			    optimizedcode=result.json.optimized_code;
			    setOptimizability(result.json.changes_made);
			    setCodebox(true);
    			  } else {
    			    console.error('Failed to submit form');
    			  }
		}catch(error){
		  	console.error('Error submitting form:', error);
		}
		setLoading(false)
	};
   return ( 
    <>
     {loading?(
     	<div className="w-full h-screen flex justify-center items-center fixed bg-black bg-opacity-80 z-10">
     	     <ColorRing
     	       visible={true}
     	       height="80"
     	       width="80"
     	       ariaLabel="blocks-loading"
     	       wrapperStyle={{}}
     	       wrapperClass="blocks-wrapper"
     	       colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
     	     />
     	   </div>
     ):(
      <div className="main2">
      <form className="w-full max-w-sm ml-80" onSubmit={handlesubmit}>
         <div className="flex items-center border-b border-teal-500 py-2">
            <input name="codeimg" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="file" placeholder="Add code img" aria-label="codeimg" onChange={handleFileChange} accept="image/*"/>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Submit</button>
         </div>
      </form>
      </div>
      )
     }

     {codebox?(
     <div className="header flex">
     <div className="w-1/2 mr-auto bg-gray-100 p-6  rounded-lg shadow-lg">
     <h1 className="text-black">Original code</h1>
     <CodeBox code={code} language={language} showLineNumbers={true}/>
     </div>
     {optimizability?(<div className="w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
     <h1 className="text-black">Optimized code</h1>
     <CodeBox code={optimizedcode} language={language} showLineNumbers={true}/>
     </div>):(<div></div>)}
     </div>):(<p6></p6>)}
   </>
   );
}
