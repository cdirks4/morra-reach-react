import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Spinner } from 'react-bootstrap';
import rock from '../pngs/rps-rock.png';
import paper from '../pngs/rps-ariplane.png';
import scissors from '../pngs/rps-scissors.com.png';

const RockPaperScissors = ({
	loading,
	resolve,
	outcome,
	role,
	hand,
	setHand,
}) => {
	const handRef = useRef();
	const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
	const rps = [rock, paper, scissors];
	const rpsAlt = ['rock', 'paper', 'scissors'];
	console.log(!isNaN(handRef.current));
	handRef.current = hand;
	const opRole = {
		Alice: 'Bob',
		Bob: 'Alice',
	};

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '5fr .9fr .7fr 3.5fr',
				height: '100vh',
			}}>
			<div style={{ marginTop: '3vh', display: 'grid' }}>
				<img
					style={{ width: '40vw', maxWidth: '210px', margin: 'auto' }}
					src={rps[handRef.current]}
					alt={rpsAlt[handRef.current]}></img>
			</div>
			<div
				variant='dark'
				style={{
					backgroundColor: '#202529',
					display: 'flex',
					marginTop: '0vh',
					justifyContent: 'space-around',
				}}>
				<Button
					style={{ maxHeight: '40px', marginTop: '5px', width: '80px' }}
					variant='secondary'
					onClick={() => {
						setHand(0);
					}}>
					<p>Rock</p>
				</Button>
				<Button
					variant='light'
					style={{ maxHeight: '40px', marginTop: '5px', width: '80px' }}
					onClick={() => {
						setHand(1);
					}}>
					<p>Paper</p>
				</Button>
				<Button
					variant='danger'
					style={{ maxHeight: '40px', marginTop: '5px', width: '80px' }}
					onClick={() => {
						setHand(2);
					}}>
					<p>Scissors</p>
				</Button>
			</div>
			<div
				style={{
					backgroundColor: '#202529',
					display: 'grid',
					justifyContent: 'center',
				}}>
				<div>
					<Button
						variant='success'
						style={{ width: '80px', height: '40px' }}
						onClick={() => {
							resolve?.resolve(hand);
						}}
						disabled={loading}>
						{loading ? (
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
				</div>
			</div>
			<div
				style={{
					backgroundColor: '#202529',
					display: 'grid',
					justifyContent: 'center',
				}}>
				{/* {loading && (
					<p style={{ color: 'white' }}>Waiting for {opRole[role]}...</p>
				)} */}
				{!outcome ? (
					loading && (
						<p style={{ color: 'white' }}>Waiting for {opRole[role]}...</p>
					)
				) : (
					<h1 style={{ color: 'white' }}>{intToOutcome[outcome]}</h1>
				)}
			</div>
		</div>
	);
};

export default RockPaperScissors;
