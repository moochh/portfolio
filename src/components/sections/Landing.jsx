import React, { useEffect, useState } from 'react';
import { motion, useForceUpdate } from 'motion/react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const Landing = () => {
	const [title, setTitle] = useState('developer');
	const [visibleChars, setVisibleChars] = useState('developer'.length);
	const [isDeleting, setIsDeleting] = useState(false);
	const { setIsPageReady } = useGlobalState();

	const titles = ['developer', 'designer', 'artist', 'musician'];
	const colors = ['#257ae8', '#ffa600', '#fc03a9', '#28d16e'];
	const [titleCounter, setTitleCounter] = useState(0);

	//> Typewriter effect
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!isDeleting && visibleChars < title.length) {
				setVisibleChars((prev) => prev + 1); // Typing forward
			} else if (isDeleting && visibleChars > 0) {
				setVisibleChars((prev) => prev - 1); // Deleting backward
			} else if (!isDeleting && visibleChars === title.length) {
				setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
			} else if (isDeleting && visibleChars === 0) {
				setTitleCounter((prev) => prev + 1);
				setTitle(titles[titleCounter % titles.length]);
				setIsDeleting(false);
			}
		}, 50);

		return () => clearTimeout(timeout);
	}, [visibleChars, isDeleting, title]);

	return (
		<section className="landing center-v">
			<div className="content center-v">
				<p className="medium greeting">
					<span>Hey </span>
					<span>there,</span>
				</p>

				<div className="name">
					<h1>I'm </h1>
					<h1>Jay </h1>
					<h1>Rome!</h1>
				</div>

				<div className="inline center">
					<motion.h1
						initial={{ opacity: 0, filter: 'blur(24px)' }}
						animate={{ opacity: 1, filter: 'blur(0)' }}
						transition={{ duration: 0.5, delay: 2, ease: 'easeInOut' }}>
						A{title == 'artist' ? 'n' : ''}
					</motion.h1>

					<motion.div
						className="highlight-container"
						initial={{ opacity: 0, filter: 'blur(24px)' }}
						animate={{ opacity: 1, filter: 'blur(0)' }}
						transition={{ duration: 0.5, delay: 2.2, ease: 'easeInOut' }}>
						<h1 className="highlight" key={title}>
							{title.split('').map((char, index) => (
								<motion.span
									key={index}
									initial={{ display: 'none' }}
									animate={{
										display: index < visibleChars ? 'inline-block' : 'none',
										color: colors[titleCounter % colors.length]
									}}
									transition={{
										duration: 0
									}}>
									{char}
								</motion.span>
							))}
						</h1>
						<span></span>
					</motion.div>

					<h1>
						{'who builds creative and user-friendly applications.'
							.split(' ')
							.map((word, index) => (
								<motion.span
									key={index}
									initial={{ opacity: 0, filter: 'blur(24px)' }}
									animate={{ opacity: 1, filter: 'blur(0)' }}
									transition={{
										duration: 0.5,
										delay: 0.2 * index + 2.4,
										ease: 'easeInOut'
									}}>
									{word}&nbsp;
								</motion.span>
							))}
					</h1>
				</div>
			</div>

			<img src="/assets/images/landing/Grid.png" />
		</section>
	);
};

export default Landing;
