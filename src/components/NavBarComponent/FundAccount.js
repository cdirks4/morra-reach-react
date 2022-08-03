import React, { useRef, useState } from 'react';

import { Form, Row, Button, Col } from 'react-bootstrap';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');

const FundAccount = ({ address, getBalance }) => {
	const fundAmmount = useRef();
	const [isLoading, setLoading] = useState(false);

	// s

	const handleSubmit = async (e) => {
		if (!fundAmmount.current.value || isNaN(fundAmmount.current.value))
			throw 'Cannot fund this value';
		console.log(address);
		try {
			setLoading(true);
			let wait = await reach.fundFromFaucet(
				address,
				reach.parseCurrency(+fundAmmount.current.value)
			);
			await getBalance();
			setLoading(false);
		} catch (err) {
			setLoading(false);
			console.log(err);
		}
	};

	return (
		<>
			<Form
				style={{
					display: 'grid',
					paddingTop: '8px',
					gridTemplateColumns: '1fr 2fr 1fr',
				}}>
				<Form.Label
					style={{ display: 'grid', fontSize: '10spx', paddingTop: '10px' }}>
					Fund Account:
				</Form.Label>
				<Form.Control
					style={{ display: 'grid', maxWidth: '200px', maxHeight: '40px' }}
					type='amount'
					ref={fundAmmount}
					placeholder={address ? 'Enter amount' : 'Connect Wallet'}
					// onChange={() => handleChange()}
				/>
				<Button
					style={{
						display: 'grid',
						fontSize: '13px',
						maxWidth: '75px',
						maxHeight: '40px',
					}}
					column='true'
					onClick={() => handleSubmit()}
					variant='primary'>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default FundAccount;
