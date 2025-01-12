import React, { useEffect, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const TechStackItem = ({ name }) => {
	const ref = useRef(null);
	const { isReadyModal } = useGlobalState();

	const isInView = useInView(ref, {
		margin: '0px 0px -100px 0px',
		once: true
	});

	useEffect(() => {
		console.log(isInView, isReadyModal);
	}, [isInView, isReadyModal]);

	return (
		<div className="item">
			<motion.p
				ref={ref}
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
				{name}
			</motion.p>
		</div>
	);
};

export default TechStackItem;
