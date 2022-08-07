import React, { useState, useCallback, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import * as backend from '../build/index.main.mjs';
import Alice from '../Players/Alice';
import Bob from '../Players/Bob';
const Deploy = ({
	account,
	setRole,
	balance,
	resolve,
	address,
	role,
	createContract,
	ctcInfo,
	setCtcInfo,
	wagerRef,
}) => {
	const [show, setShow] = useState(false);
	return (
		<div style={{ display: 'grid', textAlign: 'center', paddingTop: '16vh' }}>
			<h1 style={{ fontSize: '40px' }}>Rock, Paper, Scissors</h1>
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
					setRole={setRole}
					resolve={resolve}
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
			)}
		</div>
	);
};

export default Deploy;
