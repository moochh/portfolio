import React from 'react';
import { useState, useEffect } from 'react';
import { useGlobalState } from '../context/GlobalStateProvider';
import { motion } from 'motion/react';
import Label from './skills/Label';
import Button from './skills/Button';
import Image from './skills/Image';

function Skill2() {
	const [isShown, setIsShown] = useState(false);
	const { toggled, setToggled } = useGlobalState();
	const { isSkillsDefault, setIsSkillsDefault } = useGlobalState();
	const [isHovered, setIsHovered] = useState(false);

	const toggleShowClass = () => {
		switch (toggled) {
			case '':
				setToggled('web');
				setIsSkillsDefault(false);
				break;
			case 'web':
				setToggled('');
				setIsSkillsDefault(true);
				break;
			default:
				setToggled('web');
				setIsSkillsDefault(false);

				break;
		}
	};

	useEffect(() => {
		switch (toggled) {
			case '':
				setIsShown(false);
				break;
			case 'web':
				setIsShown(true);
				break;
			default:
				setIsShown(false);
				break;
		}
	}, [toggled]);

	const message =
		'{Front-End} The frameworks/libraries I use for building the front end is ReactJS and C# Blazor. {Back-End} In building web-based servers, I use Express.js.';

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<motion.div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="card skill-web"
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
					skill="Web"
					isShown={isShown}
					position={{ x1: '-50%', y1: '-50%', x2: '-300px', y2: '-40%' }}
					isSkillsDefault={isSkillsDefault}
					isHovered={isHovered}
				/>
			</div>

			<Label
				label="Web Development"
				isShown={isShown}
				isSkillsDefault={isSkillsDefault}
				isHovered={isHovered}
			/>
			<Button
				isShown={isShown}
				isSkillsDefault={isSkillsDefault}
				isHovered={isHovered}
			/>

			<div className="content">
				<p>
					{message.split(' ').map((word, index) => {
						const isEnclosedInBraces = /\{.*\}/.test(word);

						if (isEnclosedInBraces) {
							word = word.replace('{', '').replace('}', '').replace('-', ' ');
						}

						return (
							<motion.span
								key={index}
								className={
									isEnclosedInBraces
										? `highlight ${word.split(' ')[0].toLowerCase()}`
										: ''
								}
								animate={{
									opacity: isShown ? 1 : 0,
									filter: isShown ? 'blur(0)' : 'blur(24px)',
									scale: isShown ? 1 : 3,
									transform: isShown ? 'translateY(0)' : 'translateY(36px)'
								}}
								transition={{
									delay: isShown ? index * 0.05 + 0.5 : 0,
									duration: 0.5
								}}>
								{word}&nbsp;
							</motion.span>
						);
					})}
				</p>
			</div>
		</motion.div>
	);
}

export default Skill2;
