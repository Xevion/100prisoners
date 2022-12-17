import {type NextPage} from "next";
import Head from "next/head";
import BoxGraphic from "../components/BoxGraphic";
import Chance from "chance";
import {range} from "../utils/helpers";

const chance = new Chance();

const Home: NextPage = () => {
    const sources = range(0, 100);
    const destinations = chance.shuffle(sources);
    const boxes = sources.map((e, i) => [e, destinations[i]])

    return (
        <>
            <Head>
                <title>100prisoners.com</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="flex min-h-screen flex-col items-center bg-white">
                <div className="mt-8 px-3 w-[50rem] space-y-3">
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
                    <div className="grid grid-cols-10 w-full space-y-2">
                        {boxes.map(([source, destination]) =>
                            <div className="col-span-1 px-2">
                                <div key={source} className="box aspect-square relative">
                                    <span className="absolute left-6 top-8 cursor-pointer">{destination}</span>
                                    <BoxGraphic className="transition-all cursor-pointer relative z-30">
                                        {source + 1}
                                    </BoxGraphic>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
