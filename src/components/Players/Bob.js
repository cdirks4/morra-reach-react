import React, { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
const Bob = ({ setUser, show, setShow, setCtcInfo, createContract, user }) => {
	const infoRef = useRef();
	return (
		<div>
			<Modal
				style={{ marginTop: '80px' }}
				show={show}
				onHide={() => {
					setShow(false);
				}}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Paste the contract from Alice</Modal.Title>
				</Modal.Header>
				<Modal.Body
					style={{
						display: 'grid',
						gridTemplateColumns: '3.1fr 1fr',
					}}>
					<Form.Control
						style={{
							display: 'grid',
							maxHeight: '40px',
						}}
						ref={infoRef}
						placeholder='Paste the Contract '
					/>
					<Button
						name='Bob'
						value='Bob'
						variant='success'
						size='sm'
						style={{ marginLeft: '10' }}
						onClick={() => {
							setCtcInfo(infoRef.current.value);
							createContract(infoRef.current.value);
							setUser({ ...user, role: 'Bob' });
						}}>
						{' '}
						Good Luck!
					</Button>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Bob;
