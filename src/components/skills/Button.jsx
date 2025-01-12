import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const Button = ({ isShown, isSkillsDefault, isHovered }) => {
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		if (isSkillsDefault) {
			setOpacity(1);
		} else if (isShown) {
			setOpacity(1);
		} else if (!isShown && !isSkillsDefault) {
			setOpacity(0);
		}
	}, [isShown, isSkillsDefault]);

	return (
		<motion.button
			className="circle-icon"
			whileHover={{
				backgroundColor: 'rgba(255, 255, 255, 0.1)',
				transition: { duration: 0.1 }
			}}
			animate={
				// isHovered && !isShown
				// ? {
				// 		backgroundColor: 'rgba(255, 255, 255, 0.1)',
				// 		top: '100%',
				// 		transform: 'translateY(calc(-100% - var(--card-padding)))',
				// 		transition: {
				// 			duration: 0.5,
				// 			ease: 'easeInOut',
				// 			easings: [0.6, 0.0, 0.05, 1]
				// 		}
				//   } :
				{
					top: isShown ? 'var(--card-padding) ' : '100%',
					transform: isShown
						? 'translateY(0) rotate(585deg)'
						: 'translateY(calc(-100% - var(--card-padding)))',
					opacity: opacity
				}
			}
			transition={{
				duration: isHovered && !isShown ? 0.5 : 1,
				ease: 'easeInOut',
				easings: [0.6, 0.0, 0.05, 1]
			}}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<path d="M5.99998 1.36572V10.6342M1.36572 5.99998H10.6342" />
			</svg>
		</motion.button>
	);
};

export default Button;
