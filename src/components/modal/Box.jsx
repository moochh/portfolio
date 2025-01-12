import React from 'react';
import Vertical from './Vertical';

const Box = ({ children, hasBorder = true }) => {
	return (
		<div className={`box ${hasBorder ? '' : 'no-border'}`}>
			<Vertical position="left" />
			<Vertical position="right" />

			{children}
		</div>
	);
};

export default Box;
