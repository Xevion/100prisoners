import React, {FunctionComponent, useState} from "react";
import Chance from "chance";
import {getColor, range} from "@/utils/helpers";
import BoxGraphic from "@/components/BoxGraphic";
import Xarrow from "react-xarrows";

interface BoxLoopProps {
    count: number;
}

/**
 * Creates a loop of numbers in the given range & length.
 * @param loopRange An array describing the range of numbers to pick from.
 * @param count The number of items in the loop.
 */
function createLoop(loopRange: [number, number], count: number): { start: number, loop: Record<number, number>, list: number[] } | undefined {
    if (loopRange[0] >= loopRange[1]) return undefined;
    const chance = new Chance();
    const available = chance.pickset(range(loopRange[0], loopRange[1]), Math.min(count, loopRange[1] - loopRange[0]));
    const loop: Record<number, number> = {};

    const list: number[] = [];
    const start = available.pop() as number;
    let current = start;
    list.push(start);
    while (available.length > 0) {
        const next = available.pop() as number;
        loop[current] = next;
        list.push(next);
        current = next;
    }
    loop[current] = start; // Finish the loop

    return {start, loop, list};
}

const BoxLoop: FunctionComponent<BoxLoopProps> = ({count}: BoxLoopProps) => {
    const [{loop, start, list}] = useState(createLoop([1, 100], count)!);

    return <div className="grid grid-cols-5 gap-x-10 pb-5"
                style={{gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`}}>
        {list.map((v, index) => {
            const [sourceKey, destinationKey] = [`x-${v}`, `x-${loop[v]}`];
            const isLast = index == count - 1;

            return (
                <div key={v} className={"col-span-1 aspect-square"}>
                    <div
                        className="box flex items-center justify-center aspect-square relative">
                        <div
                            className="text flex items-center justify-center w-full h-full text-[150%] absolute pt-[30%] cursor-pointer">{loop[v]}</div>
                        <BoxGraphic id={sourceKey}
                                    className="w-full transition-all cursor-pointer relative z-30">
                            {v}
                        </BoxGraphic>
                        {loop[v] ?
                            <Xarrow path="smooth" curveness={1.4} color={getColor(v)}
                                    startAnchor={isLast ? "bottom" : "right"} endAnchor={isLast ? "bottom" : "left"}
                                    showHead={!isLast} headSize={4}
                                    _cpy1Offset={isLast ? 100 : 0}
                                    _cpx1Offset={isLast ? -200 : 0}
                                    start={sourceKey} end={destinationKey.toString()}
                                    zIndex={50 + v} divContainerProps={{className: "arrow"}}/> : null}
                    </div>
                </div>
            );
        })}
    </div>
}

export default BoxLoop;