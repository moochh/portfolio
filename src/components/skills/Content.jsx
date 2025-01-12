import React from 'react';
import { motion } from 'motion/react';

const Content = ({ isShown, message }) => {
	return (
		<div className="content">
			<p>
				{message.split(' ').map((word, index) => (
					<motion.span
						key={index}
						animate={{
							opacity: isShown ? 1 : 0,
							filter: isShown ? 'blur(0)' : 'blur(24px)',
							transform: isShown ? 'translateY(0) ' : 'translateY(36px) '
						}}
						transition={{
							delay: isShown ? index * 0.05 + 0.5 : 0,
							duration: 0.5
						}}>
						{word}&nbsp;
					</motion.span>
				))}
			</p>
		</div>
	);
};

export default Content;
