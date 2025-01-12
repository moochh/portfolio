import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const SideNavItem = ({ section }) => {
	const { currentSection, sectionRefs } = useGlobalState();
	const [color, setColor] = useState('#ffffff');

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

	return (
		<button onClick={handleClick}>
			<motion.span
				initial={{ backgroundColor: 'var(--light-gray)', height: '1px' }}
				animate={
					currentSection === section
						? { backgroundColor: 'var(--primary)', height: '2px' }
						: { backgroundColor: color, height: '1px' }
				}
				transition={{ duration: 0.3, ease: 'easeInOut' }}></motion.span>

			<motion.p
				initial={{ color: '#ffffff' }}
				animate={
					currentSection === section
						? { color: 'var(--primary)' }
						: { color: color }
				}
				transition={{ duration: 0.3, ease: 'easeInOut' }}>
				{section}
			</motion.p>
		</button>
	);
};

export default SideNavItem;
