import Chance from "chance";

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

export const range = (start: number, stop: number, step = 1) =>
    Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step);

export function classNames(...classes: (string | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export function sum(a: number, b: number): number {
    return a + b;
}

export function getColor(seed: number) {
    const chance = Chance(seed);
    return chance.pickone(colors);
}