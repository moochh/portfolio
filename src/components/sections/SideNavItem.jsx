import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const SideNavItem = ({ section }) => {
	const { currentSection, sectionRefs } = useGlobalState();
	const [color, setColor] = useState('#ffffff');
	const [isHovered, setIsHovered] = useState(false);

	const sections = ['About', 'Skills', 'Projects', 'Contact'];

	const colors = {
		near: '#8e8e8e',
		far: '#5b5b5b',
		further: '#3e3e3e'
	};

	useEffect(() => {
		const sectionIndex = sections.indexOf(section);
		const currentSectionIndex = sections.indexOf(currentSection);

		switch (Math.abs(sectionIndex - currentSectionIndex)) {
			case 0:
				setColor('var(--primary)');
				break;
			case 1:
				setColor(colors.near);
				break;
			case 2:
				setColor(colors.far);
				break;
			case 3:
				setColor(colors.further);
				break;
			default:
				setColor('#ffffff');
		}
	}, [currentSection]);

	const handleClick = () => {
		sectionRefs[`${section}Ref`].current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<motion.button
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<motion.span
				initial={{ backgroundColor: 'var(--light-gray)', height: '1px' }}
				animate={
					currentSection === section
						? { backgroundColor: 'var(--primary)', height: '2px' }
						: isHovered && currentSection !== section
						? { backgroundColor: '#ffffff', height: '1px' }
						: { backgroundColor: color, height: '1px' }
				}
				transition={{ duration: 0.3, ease: 'easeInOut' }}></motion.span>

			<motion.p
				initial={{ color: '#ffffff' }}
				animate={
					currentSection === section
						? { color: 'var(--primary)' }
						: isHovered && currentSection !== section
						? { color: '#ffffff' }
						: { color: color }
				}
				transition={{ duration: 0.3, ease: 'easeInOut' }}>
				{section}
			</motion.p>
		</motion.button>
	);
};

export default SideNavItem;
