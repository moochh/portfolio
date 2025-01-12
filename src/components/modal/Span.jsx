import React from 'react';
import Vertical from './Vertical';

const Span = ({ hiddenBorder, children }) => {
	return (
		<div className="span">
			{hiddenBorder === 'left' ? (
				<Vertical position="right" />
			) : (
				<Vertical position="left" />
			)}

			{children}
		</div>
	);
};

export default Span;
