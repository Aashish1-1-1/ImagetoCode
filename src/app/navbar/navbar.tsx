
import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {


    return(
    <div className="z-10 flex flex-row justify-between fixed top-0 items-center p-2 w-screen bg-black">
        <Link href={"/"}>
            <Image src={"/logo.png"}  width={120} height={120} alt="logo" className="ml-2" ></Image>

        </Link>
        <div className="z-10 flex space-x-2 mr-10 mt-2   cursor-pointer border-b-2 hover:border-teal-500"> 
       <Link href={"/about" 
       } className="text-white">About</Link>  

        </div>
    </div>



    )

}
