import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const Image = ({ project, name }) => {
	const ref = useRef(null);
	const { isReadyModal } = useGlobalState();
	const { selectedProject } = useGlobalState();

	const isInView = useInView(ref, {
		margin: '0px 0px -150px 0px',
		once: true
	});

	return (
		<div className="image">
			<motion.img
				ref={ref}
				src={`/assets/images/modal/${project}/${name}.png`}
				whileHover={{ transform: 'scale(1.05)', transition: { duration: 0.3 } }}
				initial={{ transform: 'scale(2)', opacity: 0, filter: 'blur(48px)' }}
				animate={
					isInView && isReadyModal
						? { opacity: 1, filter: 'blur(0)', transform: 'scale(1)' }
						: {}
				}
				transition={{
					duration: 1,
					ease: 'easeInOut'
				}}
			/>
		</div>
	);
};

export default Image;
