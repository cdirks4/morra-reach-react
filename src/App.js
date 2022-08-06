import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, Switch, useNavigate } from 'react-router-dom';

import { useState, useRef, useEffect } from 'react';
import NavBarComponent from './components/NavBarComponent/NavBar';
import { loadStdlib } from '@reach-sh/stdlib';
import Game from './components/Game/Game';
import Deployer from './components/Game/Deployer';
import Attacher from './components/Game/Attacher';
import Waiting from './components/Game/Waiting';
import Outcome from './components/Game/Outcome';
const reach = loadStdlib('ALGO');
const App = () => {
	const acc = useRef();
	const bal = useRef();
	const [account, setAccount] = useState();
	const [attacher, setAttacher] = useState();
	const [balance, setBalance] = useState(null);
	const [address, setAddress] = useState('');
	const getAccount = async (location) => {
		console.log(location);
		try {
			acc.current = await reach.newTestAccount(reach.parseCurrency(100));

			setAddress(acc.current.networkAccount.addr);
			// acc.current = await reach.getDefaultAccount();

			// setAddress(acc.current.networkAccount.addr);
			location === '/deployer'
				? setAccount(acc.current)
				: setAttacher(acc.current);
			console.log('Account :' + acc.current.networkAccount.addr);
		} catch (err) {
			console.log(err);
		}
	};

	const getBalance = async (account = undefined) => {
		try {
			let rawBalance = account
				? await reach.balanceOf(acc.current)
				: await reach.balanceOf(acc.current);
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
					element={
						<Attacher attacher={attacher} getBalance={getBalance} />
					}></Route>
				<Route
					exact
					path='/waiting'
					element={<Waiting account={account} />}></Route>
				<Route
					exact
					path='/outcome'
					element={
						<Outcome account={account} getBalance={getBalance} />
					}></Route>
			</Routes>
		</Container>
	);
};
export default App;
