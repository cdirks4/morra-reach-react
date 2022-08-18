import React, { useState, useCallback, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Alice from '../Players/Alice';
import Bob from '../Players/Bob';
const Deploy = ({
	game,
	account,
	setGame,
	balance,
	resolve,
	address,
	role,
	setRole,
	createContract,
	ctcInfo,
	setCtcInfo,
	wagerRef,
}) => {
	const [show, setShow] = useState(false);
	return (
		<div style={{ display: 'grid', textAlign: 'center', paddingTop: '16vh' }}>
			<h1 style={{ fontSize: '40px' }}>Game Room</h1>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label style={{ paddingTop: '2vh', fontSize: '20px' }}>
						Are you a Deployer or an Attacher?
					</Form.Label>
				</Form.Group>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						paddingTop: '4vh',
					}}>
					<Button
						onClick={(e) => {
							setRole(e.target.value);
							setShow(true);
						}}
						name='alice'
						value='Alice'
						variant='danger'
						style={{
							marginLeft: '6w',
						}}
						disabled={!account ? true : false}>
						Deployer
					</Button>

					<Button
						onClick={(e) => {
							setRole('Bob');
							setShow(true);
						}}
						name='Bob'
						value='Bob'
						variant='success'
						style={{ marginRight: '6w' }}
						disabled={!account ? true : false}>
						Attacher
					</Button>
				</div>
			</Form>
			{role !== 'Bob' ? (
				<Alice
					game={game}
					setGame={setGame}
					role={role}
					balance={balance}
					address={address}
					show={show}
					setShow={setShow}
					ctcInfo={ctcInfo}
					setCtcInfo={setCtcInfo}
					wagerRef={wagerRef}
					createContract={createContract}
				/>
			) : (
				<Bob
					role={role}
					resolve={resolve}
					setRole={setRole}
					balance={balance}
					address={address}
					show={show}
					setShow={setShow}
					ctcInfo={ctcInfo}
					setCtcInfo={setCtcInfo}
					wagerRef={wagerRef}
					createContract={createContract}
				/>
			)}
		</div>
	);
};

export default Deploy;
