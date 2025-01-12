import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useGlobalState } from '../context/GlobalStateProvider';
import Label from './skills/Label';
import Button from './skills/Button';
import Content from './skills/Content';
import Image from './skills/Image';
import Glow from './skills/Glow';

function Skill1() {
	const [isShown, setIsShown] = useState(false);
	const { toggled, setToggled } = useGlobalState();
	const { isSkillsDefault, setIsSkillsDefault } = useGlobalState();
	const [isHovered, setIsHovered] = useState(false);

	const toggleShowClass = () => {
		switch (toggled) {
			case '':
				setToggled('ui');
				setIsSkillsDefault(false);
				break;
			case 'ui':
				setToggled('');
				setIsSkillsDefault(true);
				break;
			default:
				setToggled('ui');
				setIsSkillsDefault(false);
				break;
		}
	};

	useEffect(() => {
		switch (toggled) {
			case '':
				setIsShown(false);
				break;
			case 'ui':
				setIsShown(true);
				break;
			default:
				setIsShown(false);
				break;
		}
	}, [toggled]);

	const message =
		'In app development, I believe the UI is just as important as the app’s functionality. Thus, I always see to it that I can produce a visually appealing interface that is easy to navigate at the same time.';

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<motion.div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="card skill-ui"
			onClick={toggleShowClass}
			whileHover={{
				boxShadow: '0px 0px 24px rgba(255, 255, 255, 0.03)',
				transition: { duration: 0.1 }
			}}
			animate={{
				width: isShown ? '100%' : isSkillsDefault ? '100%' : '0%'
			}}
			transition={{
				duration: isHovered && !isShown ? 0.5 : 1,
				ease: 'easeOut',
				easings: [0.3, 0.2, 0.3, 0.8]
			}}>
			<div className="image">
				<Image
					skill="UI"
					isShown={isShown}
					position={{ x1: '0', y1: '-50%', x2: '85%', y2: '-40%' }}
					isSkillsDefault={isSkillsDefault}
					isHovered={isHovered}
				/>
			</div>

			<Label
				label="UI/UX Design"
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

export default Skill1;
