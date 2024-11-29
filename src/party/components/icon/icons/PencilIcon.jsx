import React from "react";

export const PencilIcon = ({color = "#000", ...svgProps}) => {
	return (
		<svg 
		  width="100%" 
		  height="100%" 
		  viewBox="0 0 24 24"
	    >
	    <g 
	      id="web-app" 
	      stroke="none" 
	      strokeWidth="1" 
	      fill="none" 
	      fillRule="evenodd">
		 <g 
		   id="pencil" 
		   fill={color}>
		 <path 
		   d="M3,18 L14.9997108,6 L18,9 L6,21 L3,21 L3,18 Z M16,5 L17.9997108,3 L21,6 L18.9989741,8.00102587 L16,5 Z" 
		   id="Shape">
		  </path>
		  </g>
		  </g>
		</svg>
	)
}
