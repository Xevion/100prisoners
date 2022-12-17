import React from "react";

interface BoxGraphicProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

const leftColor = "#ad8d6c";
const rightColor = "#8f704e";
const topColor = "#c9aa8a";
const textColor = "#fff";
let points: Record<string, [number, number]> = {
    A: [370, 100],
    B: [525, 190],
    C: [525, 375],
    D: [355, 450],
    E: [190, 355],
    F: [190, 170],
    Z: [355, 255]
}

const [xOffset, yOffset] = [-180, -100];
points = Object.fromEntries(Object.entries(points).map(([k, p]) => [k, [p[0] + xOffset, p[1] + yOffset]]))
const {A, B, C, D, E, F, Z} = points;

const BoxGraphic = ({id, children, className}: BoxGraphicProps) => {
    return <svg id={id} className={className} viewBox="0 0 370 370" xmlns="http://www.w3.org/2000/svg">
        <g shapeRendering="auto">
            <path id="left" d={`M ${F} L ${Z} L ${D} L ${E} L ${F} Z`} fill={leftColor}/>
            <path id="right" d={`M ${D} L ${C} L ${B} L ${Z} L ${D} Z`} fill={rightColor}/>
            <path id="top" d={`M ${F} L ${A} L ${B} L ${Z} Z`} fill={topColor}/>
            <text transform="matrix(0.8944276,-0.4472128,0.8944265,0.447215,0,0) rotate(10) translate(45, 210)"
                  fontSize='90'
                  fontWeight={700}
                  textAnchor="middle"
                  id="number"
                  fill={textColor}>
                {children}
            </text>
        </g>
    </svg>
}

export default BoxGraphic;