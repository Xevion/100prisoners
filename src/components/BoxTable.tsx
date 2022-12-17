import {range} from "../utils/helpers";
import BoxGraphic from "./BoxGraphic";
import Xarrow from "react-xarrows";

import Chance from "chance";
import {useState} from "react";

const chance = new Chance();


const BoxTable = () => {
    const [sources] = useState<number[]>(range(1, 100));
    const [destinations] = useState<number[]>(chance.shuffle(sources));
    const [boxes] = useState<[number, number][]>(sources.map((e, i) => [e, destinations[i] as number]))


    const [enabledLines, setEnabledLines] = useState<Record<number, boolean>>(Object.fromEntries(
        sources.map(n => [n, false])
    ));

    const showLine = (from: number) => {
        setEnabledLines((prev) => ({...prev, [from]: true}))
    }

    const hideLine = (from: number) => {
        setEnabledLines((prev) => ({...prev, [from]: false}))
    }

    const columns = Math.ceil(Math.sqrt(boxes.length));
    return (
        <>
            <div className="grid w-full space-y-2"
                 style={{gridTemplateColumns: `repeat(${Math.max(3, columns)}, minmax(0, 1fr))`}}>
                {boxes.map(([source, destination]) =>
                    <div key={source} className="col-span-1 px-2" onMouseEnter={() => showLine(source)}
                         onMouseLeave={() => hideLine(source)}>
                        <div
                            className="box flex items-center justify-center aspect-square relative">
                            <div className="text absolute pt-[30%] cursor-pointer">{destination}</div>
                            <BoxGraphic id={source.toString()} className="transition-all cursor-pointer relative z-30">
                                {source}
                            </BoxGraphic>
                            {enabledLines[source] ?
                                <Xarrow color={"red"} start={source.toString()} end={destination.toString()}
                                        zIndex={50 + source}/> : null}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BoxTable;