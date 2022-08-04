import React, { useRef, useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FundAccount from './FundAccount';
const reach = loadStdlib('ALGO');

reach.setWalletFallback(
	reach.walletFallback({
		providerEnv: 'TestNet',
		MyAlgoConnect,
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
		<Row>
			<Col>
				<Button
					style={{ maxHeight: '60px', maxWidth: '150px' }}
					variant='primary'
					onClick={connectWallet}
					className='btn-primary'>
					Connect MyAlgo Wallet
				</Button>
			</Col>
			<Col xs={6}>
				<FundAccount
					balance={balance}
					address={address}
					setBalance={setBalance}
					getBalance={getBalance}
				/>
			</Col>
			<Col style={{ padding: '0px' }}>
				{balance && (
					<p>
						{address.substring(0, 6)}
						... {balance}A
					</p>
				)}
			</Col>
		</Row>
	);
};

export default NavBarComponent;
