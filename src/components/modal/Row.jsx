import React from 'react';
import Horizontal from './Horizontal';

const Row = ({ isTop = false, isBottom = false, children }) => {
	return (
		<div className={`row ${isTop ? 'top' : ''} ${isBottom ? 'bottom' : ''}`}>
			<Horizontal />
			<div className="wrapper">{children}</div>
		</div>
	);
};

export default Row;
