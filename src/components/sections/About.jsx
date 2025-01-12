import React from 'react';
import Divider from '../Divider';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { motion } from 'motion/react';

const About = () => {
	const { isPageReady, sectionRefs } = useGlobalState();

	return (
		<>
			<motion.section
				initial={{ opacity: 0, filter: 'blur(24px)' }}
				animate={isPageReady ? { opacity: 1, filter: 'blur(0)' } : {}}
				transition={{ duration: 1, ease: 'easeInOut' }}
				className="about">
				<p className="section-label" ref={sectionRefs.AboutRef}>
					About
				</p>

				<div className="content">
					<div className="illustration">
						<img src="/assets/illustrations/person.png" />
						<div className="card"></div>
					</div>

					<div className="message">
						<h6>Nice to meet you!</h6>
						<p>
							I’m a 4th year IT college student based in Las Piñas City with a
							passion for technology and creativity. I find joy in continuous
							learning, challenging myself to achieve more.
						</p>
					</div>
				</div>
			</motion.section>

			<Divider />
		</>
	);
};

export default About;
