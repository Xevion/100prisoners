import {classNames, getColor, range} from "@/utils/helpers";
import BoxGraphic from "@/components/BoxGraphic";
import Xarrow from "react-xarrows";

import Chance from "chance";
import {useMemo, useState} from "react";

const chance = new Chance();


const smartShuffle = (n: number[]): number[] => {
    let shuffled: number[] | null = null;
    while (shuffled == null || shuffled.some((v, i) => v == i + 1)) {
        shuffled = chance.shuffle(n)
    }
    return shuffled;
}

const BoxTable = () => {
    const [count, setCount] = useState<number>(16);
    const {sources, boxes, boxesBySource} = useMemo(() => {
        const sources: number[] = range(1, count);
        const destinations: number[] = smartShuffle(sources);
        const boxes: [number, number][] = sources.map((e, i) => [e, destinations[i] as number]);
        const boxesBySource: Record<number, number> = Object.fromEntries(boxes);
        return {sources, destinations, boxes, boxesBySource};
    }, [count])

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

    const columns = Math.ceil(Math.sqrt(boxes.length));
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="grid gap-x-4 gap-y-1 max-w-full"
                 style={{gridTemplateColumns: `repeat(${Math.max(3, columns)}, minmax(0, 1fr))`}}>
                {boxes.map(([source, destination]) =>
                    <div key={source}
                         className={classNames("col-span-1 aspect-square", isFiltered && filteredBoxes[source] ? "opacity-10 pointer-events-none" : "")}
                         onClick={() => toggleLines(source)} onMouseEnter={() => showLine(source)}
                         onMouseLeave={() => hideLine(source)}>
                        <div
                            className="box flex items-center justify-center aspect-square relative">
                            <div
                                className="text flex items-center justify-center w-full h-full text-[150%] absolute pt-[30%] cursor-pointer">{destination}</div>
                            <BoxGraphic id={source.toString()}
                                        className="w-full transition-all cursor-pointer relative z-30">
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
        </div>
    );
}

export default BoxTable;