import React from 'react';
import Skill1 from '../Skill1';
import Skill2 from '../Skill2';
import Skill3 from '../Skill3';
import Divider from '../Divider';
import { motion } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { delay } from 'motion';

const Skills = () => {
	const { isPageReady, sectionRefs } = useGlobalState();

	return (
		<>
			<motion.section
				className="skills"
				initial={{ opacity: 0, filter: 'blur(24px)' }}
				animate={isPageReady ? { opacity: 1, filter: 'blur(0)' } : {}}
				transition={{ duration: 1, ease: 'easeInOut' }}>
				<p className="section-label" ref={sectionRefs.SkillsRef}>
					Skills
				</p>

				<div className="content center-v">
					<div className="technical">
						<h5 className="technical-header">My expertise lie within:</h5>

						<div className="container">
							<Skill1 />
							<Skill2 />
							<Skill3 />
						</div>
					</div>

					<div className="misc">
						<h5>
							Besides app development, I also do graphic designing and 3D art. I
							also play different instruments like piano, drums, and violin.
						</h5>

						<p>
							I’m the kind of person who loves to explore and discover different
							things. I prefer to be a jack of all trades rather than a master
							of one.
						</p>
					</div>
				</div>
			</motion.section>

			<Divider />
		</>
	);
};

export default Skills;
