import PaginationButtons from "./PaginationButtons"

function SearchResult({ results }) {
    return (
        <div className="md:ml-20 lg:pl-52 px-4">
            <p className="text-gray-500 text-base mb-5 mt-3">About {results.searchInformation.formattedTotalResults} results({results.searchInformation.formattedSearchTime} seconds)</p>

            {results.items?.map((results) =>(
                <div key={results.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={results.link} className="text-sm">
                            {results.formattedUrl}
                        </a>
                        <a href={results.link}>
                            <h2 className="truncate text-xl text-blue-500 font-medium group-hover:underline">{results.title}</h2>
                        </a>
                    </div>
                    <p className="line-clamp-3">{results.snippet}</p>
                </div>
            ))}


            <PaginationButtons />
        </div>
    )
}

export default SearchResult

// sm:pl-[5%] md:pl[10%] lg:pl-52className="mx-auto w-full px-3"