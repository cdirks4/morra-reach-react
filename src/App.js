import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBarComponent from './components/NavBarComponent/NavBar';
const App = () => {
	return (
		<Container>
			<Row>
				<Routes>
					<Route path='/' element={<NavBarComponent color={'blue'} />}></Route>
				</Routes>
			</Row>
		</Container>
	);
};
export default App;
