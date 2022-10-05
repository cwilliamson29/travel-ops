import React, { useState } from 'react';
import '../assets/css/header.css';
import { Container, Card, CardHeader, Row, CardBody, Col, Button, Nav, TabContent } from 'reactstrap';
import TabRender from './utils/tabRender';
import TAPortal from './taPortal';
import Customer from './customer';
import Marquee from 'react-fast-marquee';
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
					<div className="assistBar">Tools | Help | Report a Problem | Sign Out</div>
					<div className="linksBar">
						<Nav tabs>
							{tabData.map((item, i) => (
								<TabRender key={uniqid()} num={item.num} name={item.name} activeTab={activeTab} toggle={toggle} />
							))}
						</Nav>
					</div>
				</div>
			</div>
			<Marquee gradient={false} className="marquee2">
				Making modification to a booking? Does it have Travel Protection on it? Before you let the customer go, its is your responsibility to collect the difference in the cost AT THE TIME the changes are made!
			</Marquee>

			<TabContent activeTab={activeTab}>
				<TAPortal />
				<Customer />
			</TabContent>
		</div>
	);
}
