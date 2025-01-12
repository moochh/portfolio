import React from 'react';
import Vertical from './Vertical';

const Fill = ({ children }) => {
	return (
		<div className="fill">
			<Vertical position="left" />
			<Vertical position="right" />

			{children}
		</div>
	);
};

export default Fill;
