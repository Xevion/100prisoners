import {classNames, range} from "../utils/helpers";
import BoxGraphic from "./BoxGraphic";
import Xarrow from "react-xarrows";

import Chance from "chance";
import {useState} from "react";

const chance = new Chance();
const colors = [
    "#EF4444",
    "#F97316",
    "#F59E0B",
    "#EAB308",
    "#84CC16",
    "#22C55E",
    "#10B981",
    "#14B8A6",
    "#06B6D4",
    "#0EA5E9",
    "#3B82F6",
    "#6366F1",
    "#8B5CF6",
    "#A855F7",
    "#D946EF",
    "#EC4899",
    "#F43F5E",
]

const BoxTable = () => {
    const [sources] = useState<number[]>(range(1, 100));
    const [destinations] = useState<number[]>(chance.shuffle(sources));
    const [boxes] = useState<[number, number][]>(sources.map((e, i) => [e, destinations[i] as number]))
    const [boxesBySource] = useState<Record<number, number>>(Object.fromEntries(boxes));

    const extractLoop = (start: number): number[] => {
        const results: number[] = [];
        results.push(start);

        while (true) {
            const last = results[results.length - 1] as number;
            const next = boxesBySource[last] as number;
            if (next == start) break;
            results.push(next)
        }

        return results;
    }

    const [filteredBoxes, setFilteredBoxes] = useState<Record<number, boolean>>(Object.fromEntries(
        sources.map(n => [n, false])
    ));

    const [enabledLines, setEnabledLines] = useState<Record<number, boolean>>(Object.fromEntries(
        sources.map(n => [n, false])
    ));

    const [isFiltered, setFiltered] = useState(false);

    const toggleLines = (from: number) => {
        hideLine(from);
        const newState = !isFiltered;
        setFiltered(newState);
        showLine(from, newState);

        const loop = Object.fromEntries(extractLoop(from).map(n => [n, false]));
        setFilteredBoxes((prev) => {
            const outsideLoop = Object.fromEntries(Object.entries(prev).map(([n]) => [n, newState]))
            return {...outsideLoop, ...loop};
        })
    }

    const showLine = (from: number, showLess: boolean | null = null) => {
        const loop = Object.fromEntries(extractLoop(from).slice(0, (showLess ?? isFiltered) ? 15 : 3).map(n => [n, true]));
        setEnabledLines((prev) => ({...prev, ...loop}))
    }

    const hideLine = (from: number) => {
        const loop = Object.fromEntries(extractLoop(from).slice(0, isFiltered ? 15 : 3).map(n => [n, false]));
        setEnabledLines((prev) => ({...prev, ...loop}))
    }

    const getColor = (seed: any) => {
        const chance = Chance(seed);
        return chance.pickone(colors);
    }

    const columns = Math.ceil(Math.sqrt(boxes.length));
    return (
        <>
            <div className="grid w-full space-y-2"
                 style={{gridTemplateColumns: `repeat(${Math.max(3, columns)}, minmax(0, 1fr))`}}>
                {boxes.map(([source, destination]) =>
                    <div key={source}
                         className={classNames("col-span-1 px-2", isFiltered && filteredBoxes[source] ? "opacity-0 pointer-events-none" : null)}
                         onClick={() => toggleLines(source)} onMouseEnter={() => showLine(source)}
                         onMouseLeave={() => hideLine(source)}>
                        <div
                            className="box flex items-center justify-center aspect-square relative">
                            <div className="text absolute pt-[30%] cursor-pointer">{destination}</div>
                            <BoxGraphic id={source.toString()} className="transition-all cursor-pointer relative z-30">
                                {source}
                            </BoxGraphic>
                            {enabledLines[source] ?
                                <Xarrow path="smooth" color={getColor(source)} start={source.toString()}
                                        end={destination.toString()}
                                        zIndex={50 + source} divContainerProps={{className: "arrow"}}/> : null}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BoxTable;