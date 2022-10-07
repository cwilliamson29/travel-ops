import '../../../assets/css/customer.css';
import { BsPersonLinesFill, BsPersonPlusFill } from 'react-icons/bs';
import { FcBusinessman, FcDocument } from 'react-icons/fc';
import { useContext } from 'react';
import DataContext from '../../../data/dataContext';

export default function NewCustomerButtons() {
	const { newCustBtn } = useContext(DataContext);

	if (!newCustBtn) {
		return (
			<div className="customerButtons">
				<div className="custLead searchInActive">
					<FcDocument size="1.5em" style={{ opacity: '30%' }} /> Customer Leader
				</div>
				<div className="custNew searchInActive">
					<FcBusinessman size="1.5em" style={{ opacity: '30%' }} /> New Customer
				</div>
			</div>
		);
	} else {
		return (
			<div className="customerButtons">
				<button className="custBtn searchActive">
					<FcDocument size="1.5em" /> Customer Leader
				</button>
				<button className="custBtn searchActive">
					<FcBusinessman size="1.5em" /> New Customer
				</button>
			</div>
		);
	}
}
