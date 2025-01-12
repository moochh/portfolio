import React from 'react';
import { motion } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const Footer = () => {
	const { isPageReady, sectionRefs } = useGlobalState();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollTo = (section) => {
		sectionRefs[`${section}Ref`].current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	const goTo = (url) => {
		window.open(url, '_blank');
	};

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
	};

	const openEmail = () => {
		window.location.href = 'mailto:rana.jay.rome@gmail.com';
	};

	return (
		<motion.footer
			initial={{ opacity: 0, filter: 'blur(24px)' }}
			animate={isPageReady ? { opacity: 1, filter: 'blur(0)' } : {}}
			transition={{ duration: 1, ease: 'easeInOut' }}>
			<span></span>

			<div className="content">
				<h1 onClick={scrollToTop}>Jay Rome.</h1>

				<div className="container">
					<div className="sitemap">
						<p className="label">Sitemap</p>

						<button onClick={() => scrollTo('About')}>About</button>
						<button onClick={() => scrollTo('Skills')}>Skills</button>
						<button onClick={() => scrollTo('Projects')}>Projects</button>
						<button onClick={() => scrollTo('Contact')}>Contact</button>
					</div>

					<div className="contact">
						<p className="label">Contact</p>

						<button onClick={() => copyToClipboard('rana.jay.rome@gmail.com')}>
							<p onClick={openEmail}>Email</p>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100 100"
								onClick={() => copyToClipboard('rana.jay.rome@gmail.com')}>
								<g id="Card_Stack" data-name="Card Stack">
									<path d="M19.41,4.23H58.32A10.43,10.43,0,0,1,68.73,14.64v7.7H80.59A10.43,10.43,0,0,1,91,32.75V85.36A10.43,10.43,0,0,1,80.59,95.77H41.68A10.43,10.43,0,0,1,31.27,85.36v-7.7H19.41A10.43,10.43,0,0,1,9,67.25V14.64A10.43,10.43,0,0,1,19.41,4.23ZM68.73,28.47V67.25A10.43,10.43,0,0,1,58.32,77.66H37.41v7.7a4.28,4.28,0,0,0,4.27,4.28H80.59a4.28,4.28,0,0,0,4.27-4.28V32.75a4.28,4.28,0,0,0-4.27-4.28ZM58.32,10.36H19.41a4.28,4.28,0,0,0-4.27,4.28V67.25a4.28,4.28,0,0,0,4.27,4.28H58.32a4.3,4.3,0,0,0,4.27-4.28V14.64a4.3,4.3,0,0,0-4.27-4.28Z" />
								</g>
							</svg>
						</button>

						{/* <button onClick={() => copyToClipboard('09561681750')}>
							<p>Phone Number</p>

							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
								<g id="Card_Stack" data-name="Card Stack">
									<path d="M19.41,4.23H58.32A10.43,10.43,0,0,1,68.73,14.64v7.7H80.59A10.43,10.43,0,0,1,91,32.75V85.36A10.43,10.43,0,0,1,80.59,95.77H41.68A10.43,10.43,0,0,1,31.27,85.36v-7.7H19.41A10.43,10.43,0,0,1,9,67.25V14.64A10.43,10.43,0,0,1,19.41,4.23ZM68.73,28.47V67.25A10.43,10.43,0,0,1,58.32,77.66H37.41v7.7a4.28,4.28,0,0,0,4.27,4.28H80.59a4.28,4.28,0,0,0,4.27-4.28V32.75a4.28,4.28,0,0,0-4.27-4.28ZM58.32,10.36H19.41a4.28,4.28,0,0,0-4.27,4.28V67.25a4.28,4.28,0,0,0,4.27,4.28H58.32a4.3,4.3,0,0,0,4.27-4.28V14.64a4.3,4.3,0,0,0-4.27-4.28Z" />
								</g>
							</svg>
						</button> */}
					</div>

					<div className="socials">
						<p className="label">Socials</p>
						<button
							onClick={() =>
								goTo('https://www.linkedin.com/in/jay-rome-rana-268a0a345/')
							}>
							LinkedIn
						</button>
						<button onClick={() => goTo('https://www.instagram.com/_moochhh_')}>
							Instagram
						</button>
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
