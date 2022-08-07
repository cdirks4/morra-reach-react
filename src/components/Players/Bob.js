import React, { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
const Bob = ({ setRole, show, setShow, setCtcInfo, createContract }) => {
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
					<Modal.Title>s</Modal.Title>
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
						onClick={(e) => {
							console.log(infoRef.current.value);
							setCtcInfo(infoRef.current.value);
							createContract(infoRef.current.value);
							setRole('Bob');
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
