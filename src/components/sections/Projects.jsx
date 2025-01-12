import React from 'react';
import ProjectCard from '../projects/ProjectCard';
import Divider from '../Divider';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { motion } from 'motion/react';

const Projects = ({ onClick }) => {
	const { isPageReady, sectionRefs } = useGlobalState();

	return (
		<>
			<motion.section
				className="projects"
				initial={{ opacity: 0, filter: 'blur(24px)' }}
				animate={isPageReady ? { opacity: 1, filter: 'blur(0)' } : {}}
				transition={{ duration: 1, ease: 'easeInOut' }}>
				<p className="section-label" ref={sectionRefs.ProjectsRef}>
					Projects
				</p>

				<div className="container">
					<ProjectCard
						position={'right'}
						project={'FareEase'}
						tags={['Mobile', 'Web']}
						onClick={onClick}
					/>
					<ProjectCard
						position={'left'}
						project={'MedPal'}
						tags={['Mobile', 'Web']}
						onClick={onClick}
					/>
					<ProjectCard
						position={'right'}
						project={'Refurb'}
						tags={['Web']}
						onClick={onClick}
					/>
				</div>
			</motion.section>

			<Divider />
		</>
	);
};

export default Projects;
