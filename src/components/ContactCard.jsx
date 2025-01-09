import React from 'react';
import Email from './icons/Email';
import LinkedIn from './icons/LinkedIn';
import Instagram from './icons/Instagram';

const ContactCard = ({ handle, label }) => {
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

	return (
		<div className="container" id={`${label}-card`}>
			<div className="card">
				<div className="handle-container">
					<h6 className="handle">{handle}</h6>
				</div>

				<div className="label">
					{renderIcon()}
					<p>{label}</p>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
