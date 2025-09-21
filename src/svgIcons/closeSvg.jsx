import React from 'react';

function CloseSvg({ size = 22, ...props }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 30"  xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M4.12132 1.99997L30.2843 28.1629M2 27.8786L28.163 1.7157" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>

    );
}

export default CloseSvg;
