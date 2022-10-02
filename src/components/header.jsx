import React, { useState } from 'react';
import '../assets/css/header.css';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, TabContent } from 'reactstrap';
import TabRender from './utils/tabRender';
import TAPortal from './taPortal';
import Customer from './customer';
import uniqid from 'uniqid';

export default function Header() {
	const tabData = [
		{ name: 'TA Portal', num: '1' },
		{ name: 'Customer', num: '2' },
		{ name: 'Booking', num: '3' },
		{ name: 'Cruises', num: '4' },
	];
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div>
			<div className="topContainer">
				<div className="title">
					<h1>Travel Ops</h1>
				</div>

				<div className="headerContainer">
					<div className="buttonBar">tools</div>
					<div className="linksBar">
						<Nav tabs>
							{tabData.map((item, i) => (
								<TabRender key={uniqid()} num={item.num} name={item.name} activeTab={activeTab} toggle={toggle} />
							))}
						</Nav>
					</div>
				</div>
			</div>

			<TabContent activeTab={activeTab}>
				<TAPortal />
				<Customer />
			</TabContent>
		</div>
	);
}
