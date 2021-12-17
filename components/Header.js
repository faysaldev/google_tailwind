import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import {useRef} from 'react'
import Avatar from "./Avatar";
import Headeroptions from "./Headeroptions";

function Header() {

    const router = useRouter();

    const inputRef = useRef(null);

    const SearchHandler=(e)=>{
        e.preventDefault();
         const Term = inputRef.current.value;
        if(!Term) return;

        router.replace(`/search?query=${Term}`)
    }
    return (
        <header className="sticky top-0 bg-white sm:px-6 sm:py-4 p-2">
          <div className="flex items-center justify-between">
          <Link href="/">
               <Image className="cursor-pointer" src="/logo.png" width={300} height={100} />
            </Link>

            <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow">
                <input type="text" ref={inputRef} className="focus:outline-none flex-grow w-full" defaultValue={router.query.query} placeholder="Search in Google"/>
                
                <XIcon className="h-5 mr-3 cursor-pointer text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all duration-100" onClick={()=> ( inputRef.current.value="")} />

                <MicrophoneIcon className="h-5 mr-3 text-blue-500 border-l-2 pl-4 border-gray-300 hidden sm:inline-flex cursor-pointer"/>

                <SearchIcon className="h-5 text-blue-500 transform hover:scale-110 transition-all duration-100 cursor-pointer hidden sm:inline-flex"/>
                <button onClick={SearchHandler} type="submit" hidden> google</button>

            </form>

            <Avatar className="ml-auto" src="IMG_20200304_214448.JPG" />
          </div>

          <Headeroptions />

        </header>
    )
}

export default Header
