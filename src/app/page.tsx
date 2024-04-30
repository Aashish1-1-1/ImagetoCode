"use client"
import React, { useState } from 'react';
import { ColorRing } from "react-loader-spinner";
import CodeBox from './codebox';
import Navbar from './navbar/navbar';
import Footer from './navbar/footer';
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
	const handlesubmit= async (e:any)=>{
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
			    code=result.code_snippet;
			    language=result.language;
			    optimizedcode=result.optimized_code;
			    setOptimizability(result.changes_made);
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
     	<div className="w-full h-screen flex justify-center items-center fixed bg-black bg-opacity-80 ">
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
     ):(<div className='flex flex-col justify-center h-auto items-center mb-16 '>

	 <div className="main2 flex flew-row justify-center mt-24 ">
		   
		   <form className="w-full max-w-sm " onSubmit={handlesubmit}>
			  <div className="flex items-center border-b border-teal-500 py-2 ">
				 <input name="codeimg" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none " type="file" placeholder="Add code img" aria-label="codeimg" onChange={handleFileChange} accept="image/*"/>
				 <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Submit</button>
			  </div>
		   </form>
		   
		   
		   </div>
		   <div className=" mt-3 text-xs">
			 *Upload the image file and get the code snippets
		   </div>
	 <div>
	 {codebox?(
	 
		  <div className="flex flex-col items-center lg:flex-row  lg:space-x-5  lg:py-10 ">
	 
		  <div className=" w-full shadow-lg border-red-500 border-b-2 lg:border-b-0 lg:border-r-2 lg:px-5  py-10 lg:py-0">
		  <h1 className="text-white mb-2 font-bold">Original code:</h1>
		  <CodeBox code={code} language={language} showLineNumbers={true}  />
		  </div>
	 
		  {optimizability?(<div className="w-full rounded-lg shadow-lg py-5 lg:py-0">
		  <h1 className=" text-white mb-2">Optimized code:</h1>
		  <CodeBox code={optimizedcode} language={language} showLineNumbers={true}/>
		  </div>):(<div></div>)}
	 
		  </div>
		 
		 ):(<p></p>)}
	 
	 </div>
	 </div>
      )
     } 
   </>
   );
}
