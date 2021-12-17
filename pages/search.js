import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY, CONTEXT_KEY} from '../key'
import SearchResult from '../components/SearchResult'

function Search({ results }) {

    console.log(results)
    const router =useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.query} - Google Results</title>
            </Head>

            <Header />

                <SearchResult results={results}/>
            </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDumyData = false;

    console.log(context.query.query);

    const data =  await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.query}`).then((res)=> res.json()).catch(err => console.log(err));

    return {
        props: {
            results: data
        }
    }
}