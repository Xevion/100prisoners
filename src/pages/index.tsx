import {type NextPage} from "next";
import Head from "next/head";
import BoxTable from "../components/BoxTable";
import NoSSR from "react-no-ssr";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>100prisoners.com</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="flex min-h-screen flex-col items-center bg-white">
                <div className="mt-8 px-3 max-w-[50rem] w-[80%] space-y-3">
                    <h1 className="text-4xl mb-2">100Prisoners.com</h1>
                    <div>
                        This website is dedicated to exploring the intriguing 100 prisoners problem, a mathematical
                        challenge that seems astronomically impossible at first, yet can leverage mathematics to raise
                        the chances one hundred octillion.
                        <br/>
                        <br/>
                        This thought experiment presents a scenario in which a group of 100 prisoners are tasked with
                        finding their own numbered slip among a collection of 100 boxes, each containing a random
                        permutation of the numbers 1 through 100. The prisoners are allowed to open 50 boxes each in an
                        attempt to find their own number, and all of the prisoners must be successful in order to be set
                        free. This problem raises questions about strategy and probability in search of a solution.
                    </div>
                    <NoSSR>
                        <BoxTable/>
                    </NoSSR>
                </div>
            </main>
        </>
    );
};

export default Home;
