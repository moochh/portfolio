import React from 'react';
import Horizontal from './Horizontal';

const Column = ({ isHalf = false, children }) => {
	const childrenArray = React.Children.toArray(children);

	return (
		<div className={`column ${isHalf ? 'half' : ''}`}>
			{childrenArray[0]}

			<div className="column-divider">
				<Horizontal />
			</div>

			{childrenArray[1]}
		</div>
	);
};

export default Column;
