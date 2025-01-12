import React from 'react';
import Row from './Row';
import Box from './Box';
import Top from './Top';
import Button from './Button';

const Header = ({ project, year }) => {
	return (
		<>
			<Top />

			<Row>
				<Box>
					<Button />
				</Box>

				<Box hasBorder={false}>
					<div className="title">
						<h6>{year}</h6>
						<h1>{project}</h1>
					</div>
				</Box>

				<Box></Box>
			</Row>
		</>
	);
};

export default Header;
