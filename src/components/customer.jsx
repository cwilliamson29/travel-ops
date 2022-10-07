import '../assets/css/customer.css';
import { useState, useContext } from 'react';
import DataContext from '../data/dataContext';
import { Row, Label, TabPane } from 'reactstrap';
import { BsPersonLinesFill, BsPersonPlusFill } from 'react-icons/bs';
import SearchButtons from './utils/customerTab/customerSearchButtons';
import CustomerSearch from './utils/customerTab/customerSearch';
import AltSearch from './utils/customerTab/customerAltSearch';

export default function Customer() {
	const { togglenewCustBtn } = useContext(DataContext);
	return (
		<TabPane tabId="2" style={{ backgroundColor: '#dcdcdc' }}>
			<SearchButtons />
			<CustomerSearch />
			<AltSearch />
			<button onClick={togglenewCustBtn}>change</button>
		</TabPane>
	);
}
