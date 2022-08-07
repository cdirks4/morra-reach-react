import React, { useRef, useState } from 'react';
import { Form, Row, Button, Col, Navbar } from 'react-bootstrap';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');

const FundAccount = ({ address, getBalance }) => {
	const fundAmount = useRef();
	const handleSubmit = async (e) => {
		if (!fundAmount.current.value || isNaN(fundAmount.current.value))
			throw 'Cannot fund this value';
		try {
			await reach.fundFromFaucet(
				address,
				reach.parseCurrency(fundAmount.current.value)
			);
			await getBalance();
		} catch (err) {
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
				<Form.Text
					style={{
						display: 'grid',
						fontSize: '12px',
						paddingTop: '5px',
						color: 'rgb(187,200,210)',
					}}>
					Fund Account:
				</Form.Text>
				<Form.Control
					style={{
						display: 'grid',
						maxWidth: '200px',
						maxHeight: '40px',
						fontSize: '13px',
					}}
					type='amount'
					ref={fundAmount}
					placeholder={address ? 'Enter amount' : 'Connect Wallet'}
				/>
				<Button
					style={{
						display: 'grid',

						maxWidth: '75px',
						maxHeight: '35px',
						fontSize: '13px',
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
