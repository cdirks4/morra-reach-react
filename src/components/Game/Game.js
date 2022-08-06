import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Game = ({ address, balance }) => {
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
					<Link to='/attacher'>
						<Button
							variant='danger'
							className='game-button'
							style={{
								marginLeft: '6w',
							}}>
							Deployer
						</Button>
					</Link>
					<Link to='/deployer'>
						<Button variant='success' style={{ marginRight: '6w' }}>
							Attacher
						</Button>
					</Link>
				</div>
			</Form>
		</div>
	);
};

export default Game;
