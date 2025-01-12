import React from 'react';
import ContactCard from '../ContactCard';
import { motion } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const Contact = () => {
	const { isPageReady, sectionRefs } = useGlobalState();

	return (
		<motion.section
			className="contact"
			initial={{ opacity: 0 }}
			animate={isPageReady ? { opacity: 1 } : {}}
			transition={{ duration: 1, ease: 'easeInOut' }}>
			<p className="section-label" ref={sectionRefs.ContactRef}>
				Contact
			</p>

			<div className="content">
				<div className="message">
					<h4>Let’s work together!</h4>
					<p>
						Feel free to reach out via email or connect with me on social media.
					</p>

					<img src="/assets/illustrations/dashed-arrow.png" />
				</div>

				<div className="stack">
					<ContactCard
						handle="@_moochhh_"
						label="instagram"
						url="https://www.instagram.com/_moochhh_"
					/>
					<ContactCard
						handle="/jay-rome-rana-268a0a345"
						label="linkedin"
						url="https://www.linkedin.com/in/jay-rome-rana-268a0a345/"
					/>
					<ContactCard handle="rana.jay.rome@gmail.com" label="email" />
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
