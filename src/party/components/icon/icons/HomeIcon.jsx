import React from 'react'

export const HomeIcon = ({color = "#000", fill="none"}) => {
	return (
		<svg 
		   width="100%" 
		   height="100%" 
		   viewBox="0 0 37 37" 
		   enableBackground="new 0 0 32 32" 
		   >
		   <polygon 
				fill={fill} 
				points="31,16 31,19 27,19   27,31 21,31 21,19 11,19 11,31 5,31 5,19 1,19 1,16 16,1 21,6 21,1 27,1 27,12 " 
				stroke={color} 
				strokeLinejoin="round" 
				strokeMiterlimit="10" 
				strokeWidth="2"
			/>
		   </svg>
	)
}