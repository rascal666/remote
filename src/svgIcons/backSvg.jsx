import React from 'react';

function BackSvg({ size = 22, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 22 22"
            {...props}
        >
            <g fill="none" stroke="currentColor" strokeWidth="2"> {/* <-- Здесь currentColor */}
                <rect width="22" height="22" rx="5" stroke="none"/>
                <rect x="1" y="1" width="20" height="20" rx="4" fill="none"/>
            </g>
            <path
                d="M-6907.484,5244l-3.516,3.515,3.516,3.516"
                transform="translate(6919.614 -5236.453)"
                fill="none"
                stroke="currentColor" // <-- И здесь currentColor
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}

export default BackSvg;
