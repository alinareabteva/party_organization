import React from 'react'

export const DeleteIcon = ({color = "#000", fill = "none"}) => {
	return (
		<svg 
			width="100%" 
			height="100%" 
			viewBox="0 0 32 32" 
			enableBackground="new 0 0 32 32" 
			>
			<polygon 
			fill={fill}
			points="25,11 7,11 9,31    23,31  " 
			stroke={color} 
			strokeLinejoin="round" 
			strokeMiterlimit="10" 
			strokeWidth="2"/>
			<line 
			fill={fill}
			stroke={color}
			strokeLinejoin="round" 
			strokeMiterlimit="10" 
			strokeWidth="2" x1="4" x2="28" y1="11" y2="11"/>
			<line 
			fill={fill} 
			stroke={color} 
			strokeLinejoin="round" 
			strokeMiterlimit="10" 
			strokeWidth="2" x1="13" x2="13" y1="31" y2="14"/>
			<line 
			fill={fill}
			stroke={color}
			strokeLinejoin="round" 
			strokeMiterlimit="10" 
			strokeWidth="2" x1="19" x2="19" y1="31" y2="14"/>
			<polyline 
			fill={fill} 
			points="13,11 13,7 19,7    19,11  " 
			stroke={color}
			strokeLinejoin="round" 
			strokeMiterlimit="10" 
			strokeWidth="2"/>
		</svg>
	)
}