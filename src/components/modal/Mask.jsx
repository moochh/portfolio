import React from 'react';
import { motion } from 'motion/react';

const Mask = ({ show }) => {
	return (
		<>
			<svg className="modal-mask">
				<motion.mask
					id="modal-mask"
					x="0"
					y="0"
					width="100%"
					initial={{ height: '0%' }}
					animate={show ? { height: '100%' } : {}}
					transition={{
						duration: 1,
						ease: 'easeInOut'
					}}>
					<rect x="0" y="0" width="100%" height="100%" fill="white" />
				</motion.mask>
			</svg>

			<motion.div
				className="modal-blur"
				initial={{ filter: 'blur(0)' }}
				animate={show ? { backdropFilter: 'blur(48px)' } : {}}
				transition={{ duration: 1, ease: 'easeInOut' }}></motion.div>
		</>
	);
};

export default Mask;
