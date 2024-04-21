"use client"
import React, { useState } from 'react';
export default function Pages(){
	const [file, setFile] = React.useState();
	const src = "";

	const handleFileChange = (e) => {
		    if (e.target.files) {
		      setFile(e.target.files[0]);
			  const src = URL.createObjectURL(e.target.files[0])
			  console.log(src)
			  console.log(file)
			  
		    }
		};

	const handlesubmit= async (e)=>{
		e.preventDefault();
		try{
			const formData = new FormData(e.currentTarget);
			formData.append('codeimg',src);
			console.log(src)
			const response = await fetch('/api/backend',{
			 headers: {
                            "Content-Type": "Content-Type: multipart/form-data; boundary=---WebKitFormBoundary7MA4YWxkTrZu0gW",
                        },
			 method:'POST',
			 body: formData,
			});
		if (response.ok) {
    			    const result = await response.json();
    			    console.log(result);
    			  } else {
    			    console.error('Failed to submit form');
    			  }
		}catch(error){
		  	console.error('Error submitting form:', error);
		}
	};
   return (
      <form action="" method="post" className="w-full max-w-sm ml-80" onSubmit={handlesubmit}>
         <div className="flex items-center border-b border-teal-500 py-2">
            <input name="codeimg" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="file" placeholder="Add code img" aria-label="codeimg" onChange={handleFileChange} accept="image/*"/>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Submit</button>
         </div>
      </form>
   );
}

