import React from 'react';
import { motion } from 'motion/react';

const Label = ({ label, isShown, isSkillsDefault, isHovered }) => {
	return (
		<motion.h6
			animate={{
				top: isShown ? 'var(--card-padding)' : '100%',
				transform: isShown
					? 'translateY(0)'
					: 'translateY(calc(-100% - var(--card-padding)))',
				fontSize: isShown ? '24px' : '16px',
				opacity:
					!isShown && !isSkillsDefault && !isHovered
						? 0.25
						: !isShown && !isSkillsDefault && isHovered
						? 1
						: 1
			}}
			transition={{
				duration: isHovered && !isShown ? 0.5 : 1,
				ease: 'easeInOut',
				easings: [0.6, 0.0, 0.05, 1]
			}}>
			{label}
		</motion.h6>
	);
};

export default Label;
