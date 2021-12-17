import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import {useRouter} from 'next/router'
function PaginationButtons() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
    return (
        <div className="flex px-10 py-12 items-center justify-center space-x-20">
           {startIndex >=10 &&(
               <Link href={`/search?query=${router.query.query}&start=${startIndex - 10}`}>
                   <div className="flex items-center cursor-pointer hover:underline space-x-2">
                       <ChevronLeftIcon className="h-5" />
                       <p>Previous</p>
                   </div>
               </Link>
           )} 

           <Link href={`/search?query=${router.query.query}&start=${startIndex +10}`}>
               <div className="flex items-center cursor-pointer hover:underline space-x-2">
                  
                   <p>Next</p> <ChevronRightIcon className="h-5" />
               </div>
           </Link>
        </div>
    )
}

export default PaginationButtons
