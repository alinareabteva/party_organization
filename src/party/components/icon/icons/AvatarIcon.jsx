import React from 'react'

export const AvatarIcon = ({color = "#333"}) => {
	return (
		<svg 
		width="100%" 
		height="100%" 
		viewBox="0 0 32 32" 
		>
    <g id="avatar" transform="translate(-1407 -182)">
    <circle 
    id="Ellipse_16" 
    cx="15" cy="15" r="15" 
    transform="translate(1408 183)" 
    fill="#e8f7f9" 
    stroke={color} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2"/>
     <circle 
     id="Ellipse_17" 
     cx="4.565" cy="4.565" r="4.565" 
     transform="translate(1418.435 192.13)" 
     fill="#fff1b6" 
     stroke={color}
     strokeMiterlimit="10" 
     strokeWidth="2"/>
     <path 
     id="Path_53" 
     d="M1423,213a14.928,14.928,0,0,0,9.4-3.323,9.773,9.773,0,0,0-18.808,0A14.928,14.928,0,0,0,1423,213Z" 
     fill="#fff1b6" 
     stroke={color}
     strokeMiterlimit="10" 
     strokeWidth="2"/>
  </g>
</svg>
	)
}