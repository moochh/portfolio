import React from 'react';
import { motion } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const ModalBase = ({ project, show, children }) => {
	const { modalRefs } = useGlobalState();

	return (
		<motion.div
			ref={modalRefs[`${project}Ref`]}
			className="project-modal"
			initial={{ pointerEvents: 'none', opacity: 0 }}
			animate={
				show
					? { pointerEvents: 'all', opacity: 1, display: 'flex' }
					: { opacity: 0, transition: { delay: 1 } }
			}>
			{children}
		</motion.div>
	);
};

export default ModalBase;
