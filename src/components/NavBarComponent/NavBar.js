import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Navbar, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FundAccount from './FundAccount';
import { FaHome } from 'react-icons/fa';
const reach = loadStdlib('ALGO');

reach.setWalletFallback(
	reach.walletFallback({
		// uncomment to use myAlgo
		// providerEnv: 'TestNet',
		// MyAlgoConnect,
	})
);

const NavBarComponent = ({
	getBalance,
	getAccount,
	balance,
	address,
	setBalance,
}) => {
	const connectWallet = async () => {
		try {
			await getAccount();
			await getBalance();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Navbar bg='dark' variant='dark'>
			<Container style={{ maxWidth: '100vw' }}>
				<div>
					<Link to='/'>
						<FaHome color='white'></FaHome>
					</Link>

					<Button
						style={{ maxHeight: '35px', maxWidth: '100px', fontSize: '10px' }}
						variant='primary'
						onClick={connectWallet}
						className='btn-primary'>
						Connect Wallet
					</Button>
				</div>
				<FundAccount
					balance={balance}
					address={address}
					setBalance={setBalance}
					getBalance={getBalance}
				/>
				{balance && (
					<div style={{ padding: '0px' }}>
						{balance && (
							<Navbar.Text style={{ color: 'rgb(187,200,210)' }}>
								{address.substring(0, 6)}
								... {balance}A
							</Navbar.Text>
						)}
					</div>
				)}
			</Container>
		</Navbar>
	);
};

export default NavBarComponent;
