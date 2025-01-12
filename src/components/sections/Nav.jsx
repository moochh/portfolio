import React from 'react';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { motion } from 'motion/react';

const Nav = () => {
	const { sectionRefs, isPageReady } = useGlobalState();

	const handleClick = () => {
		window.location.href = 'mailto:rana.jay.rome@gmail.com';

		sectionRefs.ContactRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<motion.div
			className="top-nav"
			initial={{ opacity: 0, filter: 'blur(24px)', pointerEvents: 'none' }}
			animate={
				isPageReady
					? { opacity: 1, filter: 'blur(0)', pointerEvents: 'all' }
					: {}
			}
			transition={{ duration: 1, ease: 'easeInOut' }}>
			<h6 className="name" onClick={scrollToTop}>
				Jay Rome Rana.
			</h6>

			<button className="connect" onClick={handleClick}>
				<p>Connect with me</p>

				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6L11 6"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<div className="circle"></div>
			</button>
		</motion.div>
	);
};

export default Nav;
