import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/solid";
import Headeroption from "./Headeroption";


function Headeroptions() {
    return (
        <div className="w-full flex text-gray-500 text-sm lg:text-base border-b justify-between sm:justify-evenly p-4">
            <div className="flex space-x-4">
                <Headeroption Icon={SearchIcon} title="All" selected/>
                <Headeroption Icon={PhotographIcon} title="Images"/>
                <Headeroption Icon={PlayIcon} title="Videos"/>
                <Headeroption Icon={NewspaperIcon} title="News"/>
                <Headeroption Icon={MapIcon} title="Maps"/>
                <Headeroption Icon={DotsVerticalIcon} title="More"/>
            </div>

            <div className="flex items-center space-x-3">
                <p className="link">Setting</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default Headeroptions

// lg:justify-start lg:space-x-36 lg:pl-52