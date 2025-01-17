import React, { useState } from 'react';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { motion } from 'motion/react';

const ProjectCard = ({ position, project, tags, onClick, description }) => {
	const { selectedProject, setSelectedProject } = useGlobalState();
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	const handleClick = () => {
		onClick(true);
		setSelectedProject(project);
	};

	const learnMore = 'Learn more about ';

	return (
		<motion.div
			className={`card ${position} ${project}`}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			whileHover={{
				boxShadow: '0px 0px 24px rgba(255, 255, 255, 0.05)',
				transition: { duration: 0.1 }
			}}>
			<div className="image">
				<motion.img
					initial={{ transform: 'scale(1)' }}
					animate={isHovered ? { transform: 'scale(1.05)' } : {}}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					src={`/assets/images/project-cards/${project}.png`}
					className="main-image glow"
				/>

				<motion.img
					initial={{ transform: 'scale(1)' }}
					animate={isHovered ? { transform: 'scale(1.05)' } : {}}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					src={`/assets/images/project-cards/${project}.png`}
					className="main-image"
				/>
			</div>

			<div className="content">
				<div className="details">
					<div className="logo">
						<img src={`/assets/images/logo/${project}.png`} />
					</div>

					<div className="description">
						<h1 className="title">
							{learnMore.split('').map((letter, index) => (
								<motion.span
									key={index}
									initial={{ display: 'none' }}
									animate={isHovered ? { display: 'inline' } : {}}
									transition={{ duration: 0, delay: 0.03 * index }}>
									{letter}
								</motion.span>
							))}
							{project}
						</h1>
						<motion.p
							className="info"
							initial={{
								opacity: 1,
								transform: 'translateY(0)',
								filter: 'blur(0px)'
							}}
							animate={
								isHovered
									? {
											opacity: 0,
											transform: 'translateY(36px)',
											filter: 'blur(24px)'
									  }
									: {}
							}
							transition={{ duration: 0.5, ease: 'easeInOut' }}>
							{description}
						</motion.p>

						<motion.div
							className="tags"
							initial={{
								opacity: 1,
								transform: 'translateY(0)',
								filter: 'blur(0px)'
							}}
							animate={
								isHovered
									? {
											opacity: 0,
											transform: 'translateY(36px)',
											filter: 'blur(24px)'
									  }
									: {}
							}
							transition={{ duration: 0.5, ease: 'easeInOut' }}>
							{tags.map((tag, index) => (
								<p key={index}>{tag}</p>
							))}
						</motion.div>
					</div>
				</div>

				<motion.button
					className="circle-icon"
					whileHover={{
						backgroundColor: 'rgba(255, 255, 255, 0.1)',
						transition: { duration: 0.1 }
					}}>
					<svg xmlns="http://www.w3.org/2000/svg">
						<path d="M5.99998 1.36572V10.6342M1.36572 5.99998H10.6342" />
					</svg>
				</motion.button>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
