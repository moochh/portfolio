import React, { useEffect } from 'react';
import SideNavItem from './SideNavItem';
import { motion } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const SideNav = () => {
	const {
		sectionRefs,
		setCurrentSection,
		isSideNavVisible,
		setIsSideNavVisible
	} = useGlobalState();

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 100;

			//> Set side nav visibility

			setIsSideNavVisible(
				scrollPosition >= 350 &&
					window.innerHeight + window.scrollY <
						document.documentElement.scrollHeight - 100
			);

			//> Set current section

			let passedSection = null;

			for (const [key, value] of Object.entries(sectionRefs)) {
				const section = value.current;

				const sectionTop = section.getBoundingClientRect().top + window.scrollY;

				if (scrollPosition >= sectionTop - 75) {
					passedSection = key.replace('Ref', '');
				}
			}

			setCurrentSection(passedSection ? passedSection : 'About');
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.div
			className="side-nav-wrapper"
			initial={{ opacity: 0, filter: 'blur(24px)' }}
			animate={isSideNavVisible ? { opacity: 1, filter: 'blur(0)' } : {}}
			transition={{ duration: 0.5, ease: 'easeInOut' }}>
			<motion.div
				className="side-nav"
				initial={{ pointerEvents: 'none' }}
				animate={isSideNavVisible ? { pointerEvents: 'all' } : {}}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				<SideNavItem section="About" />
				<SideNavItem section="Skills" />
				<SideNavItem section="Projects" />
				<SideNavItem section="Contact" />
			</motion.div>
		</motion.div>
	);
};

export default SideNav;
