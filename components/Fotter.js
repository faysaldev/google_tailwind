import {GlobeIcon} from '@heroicons/react/solid'
function Fotter() {



    return (
        <footer className="absolute bottom-1 grid w-full divide-y-[1px] tex-sm">
            <div className="px-8 py-3">
                <p>Bangladesh</p>
            </div>

            <div className="gap-y-4 grid grid-cols-1">
                <div className="flex items-center md:justify-center">
                    <GlobeIcon className="h-5 text-green-700" />
                    <p>Carbon neutral since 2021</p>
                </div>

                <div className="flex justify-center space-x-8 whitespace-nowrap">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Works</p>
                </div>

                <div className="flex justify-center space-x-8">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Setting</p>
                </div>
            </div>
        </footer>
    )
}

export default Fotter
