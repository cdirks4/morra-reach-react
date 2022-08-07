// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import { Form, Card, Button } from 'react-bootstrap';
// import { useNavigate, Link } from 'react-router-dom';
// import * as backend from '../build/index.main.mjs';
// import { loadStdlib } from '@reach-sh/stdlib';
// import outcome from './Outcome.js';
// const reach = loadStdlib(process.env);
// const handToInt = { ROCK: 0, PAPER: 1, SCISSORS: 2 };
// const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
// const Deployer = ({ account, handleHand }) => {
// 	// const [hand, setHand] = useState(reach.parseCurrency(1));
// 	const [resolve, setResolve] = useState(null);
// 	const handRef = useRef();
// 	const [ctcInfo, setCtcInfo] = useState(null);
// 	const info = useRef();
// 	const amount = useRef();
// 	let navigate = useNavigate();
// 	const [hand, setHand] = useState(null);

// 	const handleHand = useCallback(async () => {
// 		try {
// 			const promise1 = await new Promise((resolve) => {
// 				setResolve({ resolve: resolve });
// 				console.log(hand, resolve);
// 			});
// 			return promise1;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}, []);

// 	const handleSubmit = async (e) => {
// 		e.preventDefault(e);
// 		const contract = await account.contract(backend);
// 		const interact = {
// 			random: () => {
// 				return reach.hasRandom.random();
// 			},
// 			deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector],

// 			informTimeout: async () => {
// 				navigate('/timeout', { replace: true });
// 			},
// 			wager: reach.parseCurrency(amount.current.value),
// 			getHand: handleHand,
// 			seeOutcome: (outcome) => {
// 				navigate('/outcome', { replace: true });
// 				console.log('outcome', outcome);
// 			},
// 		};
// 		backend.Alice(contract, interact);
// 		const ctcInfoStr = JSON.stringify(await contract.getInfo(), null, 2);
// 		console.log(ctcInfoStr);
// 		setCtcInfo(ctcInfoStr);
// 	};

// 	return (
// 		<Card>
// 			<Card.Header>Deployer</Card.Header>
// 			<Card.Body style={{ display: 'grid' }}>
// 				<Card.Title style={{ textAlign: 'center' }}>
// 					Choose your hand
// 				</Card.Title>

// 				<Form
// 					style={{
// 						display: 'grid',
// 						gridTemplateColumns: '1fr 2fr 1fr 1fr 3fr 1fr',
// 					}}>
// 					<Form.Label
// 						style={{
// 							display: 'grid',
// 							fontSize: '12px',
// 							paddingTop: '10px',
// 							// gridTemplateColumns: '1fr 3fr 3fr',
// 						}}>
// 						Set your wager:
// 					</Form.Label>
// 					<Form.Control
// 						ref={amount}
// 						placeholder='wager'
// 						style={{ display: 'grid', maxWidth: '200px', maxHeight: '40px' }}
// 					/>
// 					<div></div>
// 					<div></div>
// 					<div></div>
// 					<Button
// 						onClick={(e) => {
// 							handleSubmit(e);
// 						}}>
// 						deploy
// 					</Button>
// 				</Form>
// 				<div
// 					style={{
// 						paddingTop: '5px',
// 						display: 'flex',
// 						justifyContent: 'space-between',
// 					}}>
// 					<Button
// 						variant='secondary'
// 						target='rock'
// 						value='0'
// 						onClick={() => {
// 							setHand(0);
// 						}}>
// 						Rock
// 					</Button>

// 					<Button
// 						value='1'
// 						variant='success'
// 						id='paper'
// 						onClick={(e) => {
// 							setHand(1);
// 						}}>
// 						Paper
// 					</Button>
// 					<Button
// 						value='2'
// 						variant='danger'
// 						className='scissors'
// 						onClick={(e) => {
// 							setHand(2);
// 						}}>
// 						Scissors
// 					</Button>
// 					<Button
// 						onClick={() => {
// 							resolve.resolve(hand);
// 						}}>
// 						Submit Choice
// 					</Button>
// 				</div>
// 			</Card.Body>
// 			{ctcInfo && (
// 				<Card.Body>
// 					<Card.Title>Contract info</Card.Title>
// 					<Card.Text>{ctcInfo}</Card.Text>
// 				</Card.Body>
// 			)}
// 		</Card>
// 	);
// };

// export default Deployer;
