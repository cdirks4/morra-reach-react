import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RockPaperScissors = ({ resolve }) => {
	let navigate = useNavigate();
	const [hand, setHand] = useState(null);
	return (
		<div>
			<Button
				onClick={() => {
					setHand(0);
				}}>
				Rock
			</Button>
			<Button
				onClick={() => {
					setHand(2);
				}}>
				Paper
			</Button>
			<Button
				onClick={() => {
					setHand(3);
				}}>
				Scissors
			</Button>
			<Button
				onClick={() => {
					resolve?.resolve(hand);
				}}>
				submit
			</Button>
		</div>
	);
};

export default RockPaperScissors;
