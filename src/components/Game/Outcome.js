import React from 'react';

const outcome = ({ outcome }) => {
	return <div>{outcome == 1 ? `you won` : `you lost`}</div>;
};

export default outcome;
