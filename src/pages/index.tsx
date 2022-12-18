import {type NextPage} from "next";
import Head from "next/head";
import BoxTable from "@/components/BoxTable";
import NoSSR from "react-no-ssr";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>100prisoners.com</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="flex w-full flex-col items-center bg-white">
                <div className="mt-8 px-3 max-w-screen-md w-[90%]">
                    <h1 className="text-3xl font-rokkitt text-zinc-800 sm:text-5xl mb-2">100Prisoners.com</h1>
                    <div className="prose lg:prose-xl">
                        <p>
                            This website is dedicated to exploring the intriguing 100 prisoners problem, a mathematical
                            challenge that seems astronomically impossible at first, yet can leverage mathematics to
                            raise the chances one hundred octillion.
                        </p>
                        <p>
                            This thought experiment presents a scenario in which a group of 100 prisoners are tasked
                            with finding their own numbered slip among a collection of 100 boxes, each containing a
                            random permutation of the numbers 1 through 100.
                        </p>
                        <ul>
                            <li>
                                Each prisoner is allowed to open 50 boxes.
                            </li>
                            <li>
                                Each prisoner must find their own number within a box, or they fail.
                            </li>
                            <li>
                                All prisoners must be successful - if even one fails, they all lose.
                            </li>
                            <li>
                                Prisoners cannot mark, relay or in any way communicate with each other.
                            </li>
                        </ul>
                        <p>
                            Given the premise, the lack of options, and the incredibly tiny odds, one would presume
                            this challenge to be impossible - but it turns out there is a strategy that guarantees a
                            <b> 31%</b> chance of success!
                        </p>
                    </div>
                    <div className="pt-7 pb-8">
                        <NoSSR>
                            <BoxTable/>
                        </NoSSR>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="grid py-1 grid-cols-1 gap-x-1 whitespace-nowrap divide-x-2">
                            <div className="col-span-1 p-2">
                                Created by <Link href={"https://xevion.dev"} about="_blank">
                                <span className="font-bold">
                                    Ryan Walters
                                </span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
