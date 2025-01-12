import React from 'react';
import { motion } from 'motion/react';
import Glow from './Glow';

const Image = ({ skill, isShown, position, isSkillsDefault, isHovered }) => {
	const { x1, y1, x2, y2 } = position;

	return (
		<>
			<motion.img
				className="glow"
				src={`/assets/images/skills/${skill}.png`}
				animate={{
					transform: isShown
						? `translate(${x2}, ${y2})`
						: `translate(${x1}, ${y1})`,
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
				}}
			/>

			<motion.img
				src={`/assets/images/skills/${skill}.png`}
				animate={{
					transform: isShown
						? `translate(${x2}, ${y2})`
						: `translate(${x1}, ${y1})`,
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
				}}
			/>

			<Glow isShown={isShown} />
		</>
	);
};

export default Image;
