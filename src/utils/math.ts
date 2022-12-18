import {range, sum} from "@/utils/helpers";

export function failureProbability(boxCount: number, attempts: number): number {
    const upperRange = boxCount - attempts;
    return range(attempts + 1, attempts + upperRange).map(n => 1.0 / n).reduce(sum);
}

export function successProbability(boxCount: number, attempts: number) {
    return 1.0 - failureProbability(boxCount, attempts);
}