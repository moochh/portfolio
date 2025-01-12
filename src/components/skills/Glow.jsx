import React from 'react';
import { motion } from 'motion/react';

const Glow = ({ isShown }) => {
	return (
		<motion.div
			className="highlight-glow"
			animate={{
				opacity: isShown ? 0.5 : 0,
				transform: isShown ? 'translate(-50%, 50%)' : 'translate(-50%, 300%)'
			}}
			transition={{
				duration: 1,
				ease: 'easeInOut',
				easings: [0.6, 0.0, 0.05, 1]
			}}
		/>
	);
};

export default Glow;
