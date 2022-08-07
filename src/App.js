import React, { useState, useRef, useCallback } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './components/build/index.main.mjs';
import { Container } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent/NavBar';
import Deploy from './components/Game/Deploy';
import Outcome from './components/Game/Outcome';
import RockPaperScissors from './components/Game/RockPaperScissors.js';
import { useEffect } from 'react';
const reach = loadStdlib('ALGO');
const App = () => {
	const [hand, useHand] = useState(null);
	const [ctcInfo, setCtcInfo] = useState(false);
	const [show, setShow] = useState(false);
	const wagerRef = useRef();
	const [role, setRole] = useState();
	const acc = useRef();
	const bal = useRef();
	const [wager, setWager] = useState(null);
	const [account, setAccount] = useState();
	const [balance, setBalance] = useState(null);
	const [address, setAddress] = useState('');
	const [resolve, setResolve] = useState([{ resolve: () => {} }]);
	let navigate = useNavigate();
	const getAccount = async () => {
		try {
			acc.current = await reach.newTestAccount(reach.parseCurrency(100));
			setAddress(acc.current.networkAccount.addr);
			// uncomment to use my algo Wallet aswell as uncomment Navbar.js line 12-14
			// acc.current = await reach.getDefaultAccount();
			// setAddress(acc.current.networkAccount.addr);
			setAccount(acc.current);
		} catch (err) {
			console.log(err);
		}
	};
	const getBalance = async () => {
		try {
			let rawBalance = await reach.balanceOf(acc.current);
			bal.current = reach.formatCurrency(rawBalance, 4);
			setBalance(bal.current);
		} catch (err) {
			console.log(err);
		}
	};

	const handleHand = useCallback(async () => {
		try {
			navigate('/rps');
			console.log('running');
			let promise = await new Promise((resolve) => {
				setResolve({ resolve: resolve });
			});

			return promise;
		} catch (error) {
			console.log(error);
		}
	}, [hand]);

	const createContract = async (ctcRef) => {
		const player = {
			random: () => {
				return reach.hasRandom.random();
			},
			informTimeout: () => {
				navigate('/timeout', { replace: true });
			},

			getHand: handleHand,
			seeOutcome: () => {
				console.log('outcome');
			},
		};

		if (role === 'Alice') {
			if (!wagerRef.current.value || isNaN(wagerRef.current.value))
				throw 'Cannot fund this value';
			const contract = await account.contract(backend);
			const interact = {
				...player,
				deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector],
				wager: reach.parseCurrency(wagerRef.current.value),
			};
			backend.Alice(contract, interact);
			const ctcInfoStr = JSON.stringify(await contract.getInfo(), null, 2);
			ctcRef.current = ctcInfoStr;
			setCtcInfo(ctcInfoStr);
		} else if (role === 'Bob') {
			try {
				const ctc = await account.contract(backend, JSON.parse(ctcRef));
				console.log(ctc);
				const interact = {
					...player,
					acceptWager: (wager) => {
						setWager(reach.formatCurrency(wager));
						console.log('wager accepted');
					},
				};
				backend.Bob(ctc, interact);
			} catch (err) {
				console.log(err);
			}
		}
	};
	return (
		<Container style={{ padding: '0px 0px', maxWidth: '100vw' }}>
			<NavBarComponent
				setAddress={setAddress}
				setBalance={setBalance}
				getAccount={getAccount}
				getBalance={getBalance}
				balance={balance}
				address={address}
			/>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<Deploy
							address={address}
							ctcInfo={ctcInfo}
							setCtcInfo={setCtcInfo}
							createContract={createContract}
							wagerRef={wagerRef}
							wager={wager}
							balance={balance}
							role={role}
							backend={backend}
							reach={reach}
							resolve={resolve}
							account={account}
							setRole={setRole}
						/>
					}></Route>
				<Route
					exact
					path='/rps'
					element={<RockPaperScissors resolve={resolve} />}></Route>
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
