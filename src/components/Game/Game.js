import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Game = ({ address, balance }) => {
	return (
		<div style={{ display: 'grid', textAlign: 'center' }}>
			<h1>ROCK, Paper, Scissors</h1>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Are you a Deployer or Attacher?</Form.Label>
				</Form.Group>
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<Link to='/deployer'>
						<Button variant='danger'>Deployer</Button>
					</Link>
					<Link to='/attacher'>
						<Button variant='success'>Attacher</Button>
					</Link>
				</div>
			</Form>
		</div>
	);
};

export default Game;
