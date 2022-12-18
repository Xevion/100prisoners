import React from "react";
import {classNames} from "@/utils/helpers";

interface BoxGraphicProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

const A = [190, 0];
const B = [345, 90];
const C = [345, 275];
const D = [175, 350];
const E = [10, 255];
const F = [10, 70];
const Z = [175, 155];

const BoxGraphic = ({id, children, className}: BoxGraphicProps) => {
    return <svg id={id} className={classNames(className, "box-graphic")} viewBox="0 0 370 370"
                xmlns="http://www.w3.org/2000/svg">
        <g shapeRendering="auto">
            <path className="left" d={`M ${F} L ${Z} L ${D} L ${E} L ${F} Z`}/>
            <path className="right" d={`M ${D} L ${C} L ${B} L ${Z} L ${D} Z`}/>
            <path className="top" d={`M ${F} L ${A} L ${B} L ${Z} Z`}/>
            {/* Matrix applies isometric transform, rotate for adjustment, translate to place on top of box */}
            <text className="text"
                  transform="matrix(0.9, -0.45, 0.9, 0.45, 0, 0) rotate(10) translate(45, 210)"
                  fontSize='90'
                  fontWeight={700}
                  textAnchor="middle">
                {children}
            </text>
        </g>
    </svg>
}

export default BoxGraphic;