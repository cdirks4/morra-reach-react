import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { useNavigate } from 'react-router-dom';
const reach = loadStdlib('ALGO');

const Attacher = ({ attacher, setOutcome }) => {
	const [hand, setHand] = useState(null);
	const handRef = useRef([{ value: null }]);
	const [wager, setWager] = useState();
	const [answer, setAnswer] = useState(false);
	const [resolve, setResolve] = useState(null);
	const info = useRef();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault(e);

		console.log(attacher);

		// wager.current = reach.parseCurrency(wager.current);
		console.log('info', info);

		const interact = {
			deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector],
		};

		const ctc = attacher.contract(backend, JSON.parse(info.current.value));

		backend.Bob(ctc, {
			random: () => {
				return reach.hasRandom.random();
			},
			acceptWager: (wager) => {
				console.log(parseInt(wager));
				console.log('accepted');
			},
			informTimeout: async () => {
				console.log('timedOut');
			},
			seeOutcome: async (outcome) => {
				console.log('b', 'd', 'a');
				console.log(parseInt(outcome));
			},
			getHand: handleHand,
		});
		console.log(ctc);
	};
	useEffect(() => {}, []);
	// const handleHand = async () => {
	// 	try {
	// 		console.log('waiting');
	// 		let promise = new Promise((resolve) => {
	// 			// console.log(hand.value);
	// 			// let temp = hand.value;
	// 			// setHand({ ...hand, resolve: resolve() });
	// 			resolve(2);
	// 		});
	// 		return promise;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	const handleHand = useCallback(async () => {
		try {
			console.log("Bob's turn");
			return await new Promise((resolve) => {
				let parsedHand = hand;
				setResolve({ resolve: resolve });
				console.log(hand, resolve);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<Card>
			<Card.Header>Attacher</Card.Header>
			<Card.Body style={{ display: 'grid' }}>
				<Card.Title style={{ textAlign: 'center' }}>
					Enter the contract info {wager}
				</Card.Title>
				<Form
					style={{
						display: 'grid',
						justifyContent: 'center',
					}}>
					<Form.Control
						placeholder='contract'
						type='contract'
						ref={info}
						style={{ display: 'grid', maxWidth: '2000px', maxHeight: '40px' }}
					/>
				</Form>
				<Button
					value='attach'
					variant='success'
					id='attach'
					onClick={(e) => handleSubmit(e)}>
					Attach
				</Button>
				<Button
					variant='success'
					value='0'
					onClick={(e) => {
						setHand(0);
					}}>
					rock
				</Button>
				<Button
					value='1'
					variant='success'
					id='attach'
					onClick={(e) => {
						setHand(1);
					}}>
					paper
				</Button>
				<Button
					value='2'
					variant='success'
					id='attach'
					onClick={() => {
						setHand(2);
					}}>
					scissors
				</Button>
				<Button
					onClick={() => {
						resolve?.resolve(hand);
					}}>
					Submit
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Attacher;
