import React from 'react';
import Row from './Row';
import Box from './Box';

const Top = () => {
	return (
		<Row isTop={true}>
			<Box></Box>
			<Box hasBorder={false}></Box>
			<Box></Box>
		</Row>
	);
};

export default Top;
