import React, { useRef, useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { Col, Button, Row } from 'react-bootstrap';

const reach = loadStdlib('ALGO');

reach.setWalletFallback(
	reach.walletFallback({
		providerEnv: 'TestNet',
		MyAlgoConnect,
	})
);

const NavBarComponent = ({}) => {
	const acc = useRef();
	const bal = useRef();
	const [balance, setBalance] = useState(null);
	const [address, setAddress] = useState('');
	const connectWallet = async () => {
		try {
			await getAccount();
			await getBalance();
		} catch (err) {
			console.log(err);
		}
	};
	const getAccount = async () => {
		try {
			acc.current = await reach.getDefaultAccount();
			setAddress(acc.current.networkAccount.addr);
			console.log('Account :' + acc.current.networkAccount.addr);
		} catch (err) {
			console.log(err);
		}
	};

	const getBalance = async () => {
		try {
			let rawBalance = await reach.balanceOf(acc.current);
			bal.current = reach.formatCurrency(rawBalance, 4);
			setBalance(bal.current);
			console.log('Balance :' + bal.current);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Row xs={2} md={4} lg={6}>
			<Col style={{ backgroundColor: 'black' }}>
				<Button onClick={connectWallet}>Connect MyAlgo Wallet</Button>
			</Col>
		</Row>
	);
};

export default NavBarComponent;
