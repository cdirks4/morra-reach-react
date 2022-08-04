import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, Switch } from 'react-router-dom';

import { useState, useRef, useEffect } from 'react';
import NavBarComponent from './components/NavBarComponent/NavBar';
import { loadStdlib } from '@reach-sh/stdlib';
import Game from './components/Game/Game';
import Deployer from './components/Game/Deployer';
import Attacher from './components/Game/Attacher';
const reach = loadStdlib('ALGO');
const App = () => {
	const acc = useRef();
	const bal = useRef();
	const [account, setAccount] = useState();
	const [balance, setBalance] = useState(null);
	const [address, setAddress] = useState('');
	const getAccount = async () => {
		try {
			acc.current = await reach.getDefaultAccount();
			setAddress(acc.current.networkAccount.addr);
			setAccount(acc.current);
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
		<Container style={{ padding: '0px 0px' }}>
			<NavBarComponent
				setAddress={setAddress}
				setBalance={setBalance}
				getAccount={getAccount}
				getBalance={getBalance}
				balance={balance}
				address={address}
			/>
			<Routes>
				<Route exact path='/' element={<Game />}></Route>
				<Route
					exact
					path='/deployer'
					element={<Deployer account={account} />}></Route>
				<Route
					exact
					path='/attacher'
					element={<Attacher account={account} />}></Route>
			</Routes>
		</Container>
	);
};
export default App;
