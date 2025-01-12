import React from 'react';
import { motion } from 'motion/react';
import { useGlobalState } from '../context/GlobalStateProvider';

function Divider() {
	const { isPageReady } = useGlobalState();

	return (
		<motion.div
			className="divider"
			initial={{ opacity: 0, filter: 'blur(24px)' }}
			animate={isPageReady ? { opacity: 1, filter: 'blur(0)' } : {}}
			transition={{ duration: 1, ease: 'easeInOut' }}>
			<span></span>
		</motion.div>
	);
}

export default Divider;
