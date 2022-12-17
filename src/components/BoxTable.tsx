import {range} from "../utils/helpers";
import BoxGraphic from "./BoxGraphic";
import Xarrow from "react-xarrows";

import Chance from "chance";
import {useState} from "react";

const chance = new Chance();
const sources = range(1, 100);
const destinations = chance.shuffle(sources);
const boxes: [number, number][] = sources.map((e, i) => [e, destinations[i] as number])

const BoxTable = () => {
    const [line, setLine] = useState<[string, string] | null>(null);

    const showLine = (from: number, to: number) => {
        setLine([from.toString(), to.toString()]);
    }

    const hideLine = () => {
        setLine(null);
    }

    const columns = Math.ceil(Math.sqrt(boxes.length));
    return (
        <>
            {line != null ? <Xarrow color={"red"} start={line[0]} end={line[1]} zIndex={50}/> : null}
            <div className="grid w-full space-y-2"
                 style={{gridTemplateColumns: `repeat(${Math.max(3, columns)}, minmax(0, 1fr))`}}>
                {boxes.map(([source, destination]) =>
                    <div key={source} className="col-span-1 px-2" onMouseEnter={() => showLine(source, destination)}
                         onMouseLeave={hideLine}>
                        <div
                            className="box flex items-center justify-center aspect-square relative">
                            <div className="text absolute pt-[30%] cursor-pointer">{destination}</div>
                            <BoxGraphic id={source.toString()} className="transition-all cursor-pointer relative z-30">
                                {source}
                            </BoxGraphic>

                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BoxTable;