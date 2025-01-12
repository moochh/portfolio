import React from 'react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const Button = () => {
	const { setShowMask, selectedProject, modalRefs } = useGlobalState();

	const handleClick = () => {
		setShowMask(false);

		setTimeout(() => {
			modalRefs[`${selectedProject}Ref`].current.scrollTop = 0;
		}, 1000);
	};

	return (
		<button onClick={handleClick}>
			<svg
				width="12"
				height="12"
				viewBox="0 0 12 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6L11 6"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>

			<p>Back</p>
		</button>
	);
};

export default Button;
