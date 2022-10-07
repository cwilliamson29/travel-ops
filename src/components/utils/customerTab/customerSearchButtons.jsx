import '../../../assets/css/customer.css';
import { BsPersonLinesFill, BsPersonPlusFill } from 'react-icons/bs';
import { useContext } from 'react';
import DataContext from '../../../data/dataContext';

export default function SearchButtons() {
	const { newCustBtn } = useContext(DataContext);

	if (!newCustBtn) {
		return (
			<div className="customerButtons">
				<div className="custLead searchInActive">
					<BsPersonLinesFill size="1.5em" /> Customer Leader
				</div>
				<div className="custNew searchInActive">
					<BsPersonPlusFill size="1.5em" /> New Customer
				</div>
			</div>
		);
	} else {
		return (
			<div className="customerButtons">
				<button className="custBtn searchActive">
					<BsPersonLinesFill size="1.5em" /> Customer Leader
				</button>
				<button className="custBtn searchActive">
					<BsPersonPlusFill size="1.5em" /> New Customer
				</button>
			</div>
		);
	}
}
