import {type NextPage} from "next";
import Head from "next/head";
import BoxTable from "@/components/BoxTable";
import NoSSR from "react-no-ssr";
import Page from "@/components/Page";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>100prisoners.com</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Page>
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
            </Page>
        </>
    );
};

export default Home;
