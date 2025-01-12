import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../context/GlobalStateProvider';
import Label from './skills/Label';
import Button from './skills/Button';
import Image from './skills/Image';
import { motion } from 'motion/react';
import Content from './skills/Content';

function Skill3() {
	const [isShown, setIsShown] = useState(false);
	const { toggled, setToggled } = useGlobalState();
	const { isSkillsDefault, setIsSkillsDefault } = useGlobalState();
	const [isHovered, setIsHovered] = useState(false);

	const toggleShowClass = () => {
		switch (toggled) {
			case '':
				setToggled('mobile');
				setIsSkillsDefault(false);
				break;
			case 'mobile':
				setToggled('');
				setIsSkillsDefault(true);
				break;
			default:
				setToggled('mobile');
				setIsSkillsDefault(false);
				break;
		}
	};

	useEffect(() => {
		switch (toggled) {
			case '':
				setIsShown(false);
				break;
			case 'mobile':
				setIsShown(true);
				break;
			default:
				setIsShown(false);
				break;
		}
	}, [toggled]);

	const message =
		'I also have experience in building mobile apps, primarily for Android, using Java.';

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<motion.div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="card skill-mobile"
			onClick={toggleShowClass}
			whileHover={{
				boxShadow: '0px 0px 24px rgba(255, 255, 255, 0.03)',
				transition: { duration: 0.1 }
			}}
			animate={{ width: isShown ? '100%' : isSkillsDefault ? '100%' : '0%' }}
			transition={{
				duration: isHovered && !isShown ? 0.5 : 1,
				ease: 'easeOut',
				easings: [0.3, 0.2, 0.3, 0.8]
			}}>
			<div className="image">
				<Image
					skill="Mobile"
					isShown={isShown}
					position={{ x1: '-55%', y1: '-50%', x2: '-10%', y2: '-35%' }}
					isSkillsDefault={isSkillsDefault}
					isHovered={isHovered}
				/>
			</div>

			<Label
				label="Mobile Development"
				isShown={isShown}
				isSkillsDefault={isSkillsDefault}
				isHovered={isHovered}
			/>
			<Button
				isShown={isShown}
				isSkillsDefault={isSkillsDefault}
				isHovered={isHovered}
			/>
			<Content isShown={isShown} message={message} />
		</motion.div>
	);
}

export default Skill3;
