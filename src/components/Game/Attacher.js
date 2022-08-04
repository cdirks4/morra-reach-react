import React, { useState, useRef } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import AcceptWager from './AcceptWager.js';
const reach = loadStdlib('ALGO');
const Attacher = ({ account }) => {
	const [wager, setWager] = useState(null);
	const info = useRef();
	const [accept, setAccept] = useState(false);
	const [resolve, setResolve] = useState({ resolve: () => {} });
	// const [resolve, setResolve] = useState(null);
	const getWager = () => {};
	const handleSubmit = async (e) => {
		e.preventDefault(e);

		console.log(account);

		// wager.current = reach.parseCurrency(wager.current);

		// const interact = {
		// 	wager: reach.parseCurrency(wager.current.value),
		// 	deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector],
		// };
		const ctc = account.contract(backend, JSON.parse(info.current.value));
		console.log(ctc);
		backend.Bob(ctc, {
			acceptWager: () => resolve.resolve(wager),
			informTimeOut: () => console.log('timedout'),
		});
		console.log(ctc);
	};
	const acceptWager = async (wagerAtomic) => {
		const temp = reach.formatCurrency(wagerAtomic, 4);
		return await new Promise((resolveAcceptedP) => {
			setWager(temp);
			setResolve({ resolve: resolveAcceptedP(wager) });
		}).catch((err) => {
			console.log(err);
		});
	};
	console.log(resolve);
	console.log(accept);
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
					id='attach'
					onClick={() => resolve.resolve(wager)}>
					accept
				</Button>

				<AcceptWager />
			</Card.Body>
		</Card>
	);
};

export default Attacher;
