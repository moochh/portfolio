import React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';

function Skill1() {
	const [isShown, setIsShown] = useState(false);

	const toggleShowClass = () => {
		setIsShown((prevState) => !prevState);
	};

	const message =
		'In app development, I believe the UI is just as important as the app’s functionality. Thus, I always see to it that I can produce a visually appealing interface that is easy to navigate at the same time.';

	return (
		<div
			className={`card skill-ui ${isShown ? 'show' : ''}`}
			onClick={toggleShowClass}>
			<div className="image">
				<img src="/assets/images/skills/UI.png" className="glow" />
				<img src="/assets/images/skills/UI.png" />
			</div>

			<h6>UI/UX Design</h6>

			<div className="content">
				<p>
					{message.split(' ').map((word, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, filter: 'blur(10px)' }}
							animate={{
								opacity: isShown ? 1 : 0,
								filter: isShown ? 'blur(0)' : 'blur(10px)'
							}}
							transition={{
								delay: index * 0.05, // Delay based on word index
								duration: 0.3
							}}>
							{word}&nbsp;
						</motion.span>
					))}
				</p>
			</div>

			<button className="circle-icon">
				<svg xmlns="http://www.w3.org/2000/svg">
					<path d="M5.99998 1.36572V10.6342M1.36572 5.99998H10.6342" />
				</svg>
			</button>
		</div>
	);
}

export default Skill1;
