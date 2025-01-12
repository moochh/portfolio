import React from 'react';
import Email from './icons/Email';
import LinkedIn from './icons/LinkedIn';
import Instagram from './icons/Instagram';
import { motion } from 'motion/react';

const ContactCard = ({ handle, label, url = '' }) => {
	const renderIcon = () => {
		switch (label) {
			case 'email':
				return <Email />;
			case 'linkedin':
				return <LinkedIn />;
			case 'instagram':
				return <Instagram />;
		}
	};

	const handleClick = () => {
		if (label === 'email') {
			window.location.href = `mailto:${handle}`;
		} else {
			window.open(url, '_blank');
		}
	};

	return (
		<div className="container" id={`${label}-card`} onClick={handleClick}>
			<motion.div className="card">
				<div className="handle-container">
					<h6 className="handle">{handle}</h6>
				</div>

				<div className="label">
					{renderIcon()}
					<p>{label}</p>
				</div>
			</motion.div>
		</div>
	);
};

export default ContactCard;
