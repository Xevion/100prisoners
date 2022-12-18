export const range = (start: number, stop: number, step = 1) =>
    Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step);

export function classNames(...classes: (string | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export function sum(a: number, b: number): number {
    return a + b;
}