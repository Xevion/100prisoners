import {type NextPage} from "next";
import Head from "next/head";
import BoxTable from "@/components/BoxTable";
import NoSSR from "react-no-ssr";
import Page from "@/components/Page";
import BoxLoop from "@/components/BoxLoop";
import {useBreakpointValue} from "@/utils/helpers";
import {GoogleAnalytics} from "nextjs-google-analytics";

const Home: NextPage = () => {
    const boxCount = useBreakpointValue("md", 5, 3);

    return (
        <>
            <Head>
                <title>100prisoners.com</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Page>
                <div className="prose dark:prose-invert lg:prose-xl">
                    <p>
                        This website is dedicated to exploring the intriguing 100 prisoners problem, a mathematical
                        challenge that seems astronomically impossible at first, yet can leverage mathematics to
                        raise the chances one hundred octillion.
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="text-zinc-500 dark:text-zinc-400 mb-4 text-base text-center">
                            <p className="!mt-0">
                                Hover to see part of the loop. <br/>
                                Click to hide boxes outside the loop and see more of the loop.
                            </p>
                        </div>
                        <NoSSR>
                            <BoxTable/>
                        </NoSSR>
                    </div>
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
                            Prisoners cannot mark boxes, relay information or in any way communicate with each other.
                        </li>
                    </ul>
                    <p>
                        Given the premise, the lack of options, and the incredibly tiny odds, one would presume
                        this challenge to be impossible - but it turns out there is a strategy that guarantees a
                        <b> 31%</b> chance of success!
                    </p>
                    <div>
                        Here&apos;s how it works: <br/>
                        <ol>
                            <li>
                                Go to the box with your number labeled on top of it. Open it.
                            </li>
                            <li>
                                If the number inside is not your slip, then go to the box with the number you just
                                found.
                            </li>
                            <li>
                                Repeat until you find your number.
                            </li>
                        </ol>
                        Due to an interesting mathematical quirk of some (assumed) properties of the game,
                        the boxes have an interesting structure to their existence.
                    </div>
                    <div className="pt-8 pb-14 sm:pb-0 md:pb-14">
                        <NoSSR>
                            <BoxLoop count={boxCount}/>
                        </NoSSR>
                    </div>
                    <p>
                        No matter what number of configuration of boxes is given, a loop, a sequence of numbers that
                        will
                        return to the first one you picked, will exist.
                        <br/>
                        Given that there are only 100 boxes, you won&apos;t find a loop that goes on forever,
                        and you won&apos;t find a box without a number under it (one that goes nowhere).
                        <br/>
                    </p>
                    <p>
                        Essentially, by following the boxes, it is certain that you will find your slip.
                    </p>

                </div>

            </Page>
        </>
    );
};

export default Home;
