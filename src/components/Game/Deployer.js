import React, { useState, useRef } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const handToInt = { ROCK: 0, PAPER: 1, SCISSORS: 2 };
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const Deployer = ({ account }) => {
	// const [hand, setHand] = useState(reach.parseCurrency(1));
	const [ctcInfo, setCtcInfo] = useState(null);
	const info = useRef();
	const wager = useRef();
	let navigate = useNavigate();
	const getWager = () => {};
	const handleSubmit = async (e) => {
		e.preventDefault(e);
		console.log(e.target?.value);
		console.log(account);

		// wager.current = reach.parseCurrency(wager.current);
		const contract = await account.contract(backend);
		const interact = {
			wager: reach.parseCurrency(wager.current.value),
			deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector],
			informTimeout: async () => {
				console.log('timedOut');
			},
			getHand: async (res) => {
				console.log(res);
				console.log('get hand');
				return 2;
			},
		};
		backend.Alice(contract, interact);
		const ctcInfoStr = JSON.stringify(await contract.getInfo(), null, 2);
		console.log(ctcInfoStr);
		setCtcInfo(ctcInfoStr);
	};
	return (
		<Card>
			<Card.Header>Deployer</Card.Header>
			<Card.Body style={{ display: 'grid' }}>
				<Card.Title style={{ textAlign: 'center' }}>
					Choose your hand
				</Card.Title>
				<Form
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 2fr 1fr 1fr 3fr 1fr',
					}}>
					<Form.Label
						style={{
							display: 'grid',
							fontSize: '12px',
							paddingTop: '10px',
							// gridTemplateColumns: '1fr 3fr 3fr',
						}}>
						Set your wager:
					</Form.Label>
					<Form.Control
						ref={wager}
						placeholder='wager'
						style={{ display: 'grid', maxWidth: '200px', maxHeight: '40px' }}
					/>
					<div></div>
					<div></div>
					<div></div>
					<Button></Button>
				</Form>
				<div
					style={{
						paddingTop: '5px',
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<Button variant='secondary' target='rock'>
						Rock
					</Button>
					<Button
						value=' paper'
						variant='success'
						id='paper'
						onClick={(e) => handleSubmit(e)}>
						Paper
					</Button>
					<Button
						variant='danger'
						className='scissors'
						onClick={(e) => handleSubmit(e)}>
						Scissors
					</Button>
				</div>
			</Card.Body>
			{ctcInfo && (
				<Card.Body>
					<Card.Title>Contract info</Card.Title>
					<Card.Text>{ctcInfo}</Card.Text>
				</Card.Body>
			)}
		</Card>
	);
};

export default Deployer;
