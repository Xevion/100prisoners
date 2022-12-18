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
            <main className="flex w-full flex-col items-center bg-white">
                <div className="mt-8 px-3 max-w-screen-md w-[90%]">
                    <h1 className="text-3xl sm:text-5xl mb-2">100Prisoners.com</h1>
                    <div className="prose lg:prose-xl">
                        <p>
                            This website is dedicated to exploring the intriguing 100 prisoners problem, a mathematical
                        challenge that seems astronomically impossible at first, yet can leverage mathematics to raise
                        the chances one hundred octillion.
                        <br/>
                        <br/>
                        This thought experiment presents a scenario in which a group of 100 prisoners are tasked with
                        finding their own numbered slip among a collection of 100 boxes, each containing a random
                        permutation of the numbers 1 through 100.
                        </p>
                        <p>
                            The prisoners are allowed to open 50 boxes each in an
                        attempt to find their own number, and all of the prisoners must be successful in order to be set
                        free. This problem raises questions about strategy and probability in search of a solution.
                    </div>
                    <div className="pt-5">

                        <NoSSR>
                            <BoxTable/>
                        </NoSSR>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
