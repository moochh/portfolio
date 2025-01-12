import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const Info = ({ project, header, children }) => {
	const ref = useRef(null);
	const { isReadyModal } = useGlobalState();

	const isInView = useInView(ref, {
		margin: '0px 0px -100px 0px',
		once: true
	});

	useEffect(() => {}, [isInView, isReadyModal]);

	return (
		<div className="info">
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
				{header}
			</motion.h6>

			<p>
				{children.split(' ').map((word, index) => (
					<motion.span
						key={index}
						ref={ref}
						initial={{
							opacity: 0,
							filter: 'blur(24px)',
							transform: 'translateY(36px)'
						}}
						animate={
							isInView && isReadyModal
								? {
										opacity: 1,
										filter: 'blur(0)',
										transform: 'translateY(0)'
								  }
								: {}
						}
						transition={{
							delay: index * 0.05,
							duration: 0.5
						}}>
						{word}&nbsp;
					</motion.span>
				))}
			</p>
		</div>
	);
};

export default Info;
