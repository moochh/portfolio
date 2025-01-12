import React, { forwardRef } from 'react';
import Row from './Row';
import Fill from './Fill';
import Button from './Button';
import Box from './Box';

const Footer = () => {
	return (
		<>
			<Row>
				<Fill>
					<Button />
				</Fill>
			</Row>

			<Row isBottom={true}>
				<Fill></Fill>
			</Row>
		</>
	);
};

export default Footer;
