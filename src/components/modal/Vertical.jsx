import React from 'react';

const Vertical = ({ position }) => {
	const pos = position == 'left' ? 'start' : 'end';

	return (
		<>
			<span className={`vertical ${pos} left`}></span>
			<span className={`vertical ${pos} right`}></span>
		</>
	);
};

export default Vertical;
