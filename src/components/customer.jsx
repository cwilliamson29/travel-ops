import '../assets/css/customer.css';
import { useState } from 'react';
import { Row, Label, TabPane } from 'reactstrap';
import { BsPersonLinesFill, BsPersonPlusFill } from 'react-icons/bs';
import SearchButtons from './utils/customerTab/customerSearchButtons';
import CustomerSearch from './utils/customerTab/customerSearch';

export default function Customer() {
	const [search, setSearch] = useState(false);
	const toggle = () => {
		setSearch(!search);
	};
	return (
		<TabPane tabId="2">
			<SearchButtons search={search} />
			<CustomerSearch />
			<button onClick={toggle}>change</button>
		</TabPane>
	);
}
