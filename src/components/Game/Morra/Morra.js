import React, { useState, useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
const Morra = ({ resolve, mLoading, outcome, role }) => {
	const intToOutcome = ['Alice wins!', 'Bob wins', 'Draw!'];
	const opRole = {
		Alice: 'Bob',
		Bob: 'Alice',
	};
	const guessRef = useRef();
	const [finger, setFinger] = useState(0);
	return (
		<div>
			<Form>
				<Form.Control placeholder='guess' ref={guessRef} />
				<Form.Select value={finger} onChange={(e) => setFinger(e.target.value)}>
					<option value={''}>Choose your hand</option>
					{Array.from(Array(6).keys()).map((num, id) => (
						<option key={id} value={num}>
							{num}
						</option>
					))}
				</Form.Select>
				<Button
					type='primary'
					onClick={(e) => {
						e.preventDefault();

						resolve?.resolve([finger, guessRef.current.value]);
					}}>
					{mLoading ? (
						<div>
							<Spinner
								as='span'
								animation='border'
								size='sm'
								role='status'
								aria-hidden='false'
							/>
							<span className='visually-hidden'>Loading...</span>
						</div>
					) : (
						<p>Submit</p>
					)}
				</Button>
			</Form>
			<div
				style={{
					backgroundColor: '#202529',
					display: 'grid',
					justifyContent: 'center',
				}}>
				{!outcome ? (
					mLoading && (
						<p style={{ color: 'white' }}>Waiting for {opRole[role]}...</p>
					)
				) : (
					<h1 style={{ color: 'white' }}>{intToOutcome[outcome]}</h1>
				)}
			</div>
		</div>
	);
};

export default Morra;
