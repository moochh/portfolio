import React, { useRef } from 'react';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { useInView } from 'react-intersection-observer';
import { motion } from 'motion/react';
import Horizontal from './Horizontal';

const TechStack = ({ isBottom, children }) => {
	const ref = useRef(null);
	const { isReadyModal } = useGlobalState();

	const isInView = useInView(ref, {
		margin: '0px 0px -100px 0px',
		once: true
	});

	return (
		<div className={`tech-stack ${isBottom ? 'bottom' : ''}`}>
			<div className="content">
				<div className="lines">
					<Horizontal />
				</div>

				<motion.h6
					initial={{
						opacity: 0,
						filter: 'blur(24px)',
						transform: 'translateY(36px)'
					}}
					animate={
						isInView && isReadyModal
							? { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }
							: {}
					}
					transition={{ duration: 0.5 }}>
					TechStack
				</motion.h6>

				{children}
			</div>
		</div>
	);
};

export default TechStack;
