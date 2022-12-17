import {range} from "../utils/helpers";
import BoxGraphic from "./BoxGraphic";

import Chance from "chance";

const chance = new Chance();
const sources = range(0, 100 - 1);
const destinations = chance.shuffle(sources);
const boxes: [number, number][] = sources.map((e, i) => [e, destinations[i] as number])

const BoxTable = () => {
    return (
        <div className="grid grid-cols-10 w-full space-y-2">
            {boxes.map(([source, destination]) =>
                <div key={source} className="col-span-1 px-2">
                    <div className="box aspect-square relative">
                        <span className="absolute left-6 top-8 cursor-pointer">{destination}</span>
                        <BoxGraphic className="transition-all cursor-pointer relative z-30">
                            {source + 1}
                        </BoxGraphic>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BoxTable;