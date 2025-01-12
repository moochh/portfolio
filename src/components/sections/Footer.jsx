import React from 'react';
import { motion } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const Footer = () => {
	const { isPageReady } = useGlobalState();

	return (
		<motion.footer
			initial={{ opacity: 0, filter: 'blur(24px)' }}
			animate={isPageReady ? { opacity: 1, filter: 'blur(0)' } : {}}
			transition={{ duration: 1, ease: 'easeInOut' }}>
			<span></span>

			<div className="content">
				<h1>Jay Rome.</h1>

				<div className="container">
					<div className="sitemap">
						<p className="label">Sitemap</p>

						<button>About</button>
						<button>Skills</button>
						<button>Projects</button>
						<button>Contact</button>
					</div>

					<div className="contact">
						<p className="label">Contact</p>

						<button>Email</button>
						<button>Phone Number</button>
					</div>

					<div className="socials">
						<p className="label">Socials</p>
						<button>LinkedIn</button>
						<button>Instagram</button>
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
