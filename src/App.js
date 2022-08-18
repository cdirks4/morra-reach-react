import React, { useState, useRef } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import * as MORRAbackend from './build/index.morra.mjs';
import * as RPSbackend from './build/index.rps.mjs';
import { Container } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent/NavBar';
import Deploy from './components/Game/Deploy';
import Outcome from './components/Game/Outcome';
import RockPaperScissors from './components/Game/RockPaperScissors.js';
import Morra from './components/Game/Morra/Morra.js';

const reach = loadStdlib('ALGO');
const App = () => {
	// const [backend, setBackend] = useState();
	// const [backend, setBackend] = useState(RPSbackend);
	const backend = useRef(RPSbackend);
	const [role, setRole] = useState();
	const [mLoading, setMLoading] = useState(true);
	const [outcome, setOutcome] = useState(null);
	const [hand, setHand] = useState(null);
	const [prevGuesses, setPrevGuesses] = useState([]);
	const [game, setGame] = useState();
	const [choice, setChoice] = useState();
	const [ctcInfo, setCtcInfo] = useState(false);
	const prevRef = useRef(null);
	const wagerRef = useRef();
	const acc = useRef();
	const bal = useRef();
	const [wager, setWager] = useState(null);
	const [account, setAccount] = useState();
	const [balance, setBalance] = useState(null);
	const [address, setAddress] = useState('');
	const [resolve, setResolve] = useState(null);
	let navigate = useNavigate();
	const [loading, setLoading] = useState(true);
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

	const handleHand = async () => {
		try {
			navigate('/rps');
			console.log('running');
			setLoading(false);
			let response = await new Promise((resolve) => {
				prevRef.current = hand;

				setResolve({ resolve: resolve });
			});
			setLoading(true);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const handleChoice = async () => {
		try {
			console.log('starting ');
			setMLoading(false);
			navigate('/morra');
			let response = await new Promise((resolve) => {
				setResolve({ resolve: resolve });
			});
			console.log('ending');
			setMLoading(true);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const createContract = async (ctcRef) => {
		const player = {
			random: () => {
				return reach.hasRandom.random();
			},
			informTimeout: () => {
				navigate('/timeout', { replace: true });
			},

			seeOutcome: (outcome) => {
				let tempOutcome = parseInt(outcome);
				console.log(tempOutcome);

				setOutcome(outcome);
			},
		};

		if (game === 'rps') {
			player.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
			player.getHand = handleHand;
			backend.current = RPSbackend;
		} else if (game === 'morra') {
			player.getFingersAndGuess = handleChoice;
			backend.current = MORRAbackend;
		}

		if (role === 'Alice') {
			if (!wagerRef.current.value || isNaN(wagerRef.current.value))
				throw 'Cannot fund this value';
			const interact = {
				...player,
				wager: reach.parseCurrency(wagerRef.current.value),
			};
			const contract = await account.contract(backend.current);
			backend.current.Alice(contract, interact);
			const ctcInfoStr = JSON.stringify(await contract.getInfo(), null, 2);
			ctcRef.current = ctcInfoStr;
			setCtcInfo(ctcInfoStr);
		} else if (role === 'Bob') {
			try {
				const interact = {
					...player,
					acceptWager: (wager) => {
						console.log('accepted');
						setWager(reach.formatCurrency(wager));
					},
				};
				const ctc = await account.contract(backend.current, JSON.parse(ctcRef));
				backend.current.Bob(ctc, interact);
			} catch (err) {
				console.log(err);
			}
		}
	};
	return (
		<Container
			style={{
				padding: '0px',
				maxWidth: '100vw',
				height: '100vh',
				backgroundColor: 'grey',
			}}>
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
							game={game}
							setGame={setGame}
							address={address}
							ctcInfo={ctcInfo}
							setCtcInfo={setCtcInfo}
							createContract={createContract}
							wagerRef={wagerRef}
							wager={wager}
							balance={balance}
							role={role}
							setRole={setRole}
							reach={reach}
							resolve={resolve}
							account={account}
						/>
					}></Route>
				<Route
					exact
					path='/rps'
					element={
						<RockPaperScissors
							outcome={outcome}
							setHand={setHand}
							hand={hand}
							resolve={resolve}
							loading={loading}
							role={role}
							prevGuesses={prevGuesses}
						/>
					}></Route>
				<Route
					exact
					path='/outcome'
					element={
						<Outcome account={account} getBalance={getBalance} />
					}></Route>
				<Route
					exact
					path='/morra'
					element={
						<Morra
							outcome={outcome}
							role={role}
							resolve={resolve}
							mLoading={mLoading}
							setChoice={setChoice}
							choice={choice}
						/>
					}></Route>
			</Routes>
		</Container>
	);
};
export default App;
