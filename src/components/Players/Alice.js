import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
const Alice = ({
	balance,
	address,
	role,
	show,
	setShow,
	ctcInfo,
	setCtcInfo,
	wagerRef,
	createContract,
}) => {
	return (
		<div>
			{role === 'Alice' && ctcInfo ? (
				<Modal
					style={{ marginTop: '80px' }}
					show={show}
					onHide={() => {
						setShow(false);
					}}
					backdrop='static'
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>Send this to Bob</Modal.Title>
					</Modal.Header>
					<Modal.Body
						style={{
							display: 'grid',
							gridTemplateColumns: '3.1fr 1fr',
						}}>
						{ctcInfo}

						<Button
							variant='danger'
							size='sm'
							style={{ marginLeft: '10' }}
							onClick={() => setCtcInfo(null)}>
							new Contract
						</Button>
					</Modal.Body>
				</Modal>
			) : (
				<Modal
					style={{ marginTop: '80px' }}
					show={show}
					onHide={() => {
						setShow(false);
					}}
					backdrop='static'
					keyboard={false}>
					<Modal.Header
						style={{
							display: 'grid',
							gridTemplateColumns: '1.5fr 3fr 1fr',
							alignItems: 'start',
						}}
						closeButton>
						<Modal.Title style={{ display: 'grid' }}>Hi Alice </Modal.Title>
						<Modal.Body
							style={{
								display: 'grid',
								paddingBottom: '0px',
								paddingTop: '7.8px',
							}}>
							<p>
								{address.substring(0, 6)}
								... {balance}A
							</p>
						</Modal.Body>
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
							ref={wagerRef}
							placeholder='set your wager'
						/>
						<Button
							style={{ display: 'grid', maxHeight: '40px' }}
							value={wagerRef}
							onClick={(e) => {
								createContract(e);
							}}
							type='primary'
							variant='outline-success'>
							Deploy
						</Button>
					</Modal.Body>
				</Modal>
			)}
		</div>
	);
};

export default Alice;
