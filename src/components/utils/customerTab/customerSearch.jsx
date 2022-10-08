import '../../../assets/css/customer.css';
import { useState, useContext } from 'react';
import DataContext from '../../../data/dataContext';
import Select from 'react-select';

export default function CustomerSearch({}) {
	const { program, programSelection, handleProgramChange, phone, setPhone, email, setEmail, fname, setFname, lname, setLname } = useContext(DataContext);

	const [isClearable, setIsClearable] = useState(true);

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			background: '#fff',
			borderColor: '#9e9e9e',
			minHeight: '25px',
			height: '25px',
			boxShadow: state.isFocused ? null : null,
		}),

		valueContainer: (provided, state) => ({
			...provided,
			height: '25px',
			padding: '0 6px',
		}),

		input: (provided, state) => ({
			...provided,
			margin: '0px',
		}),
		indicatorSeparator: (state) => ({
			display: 'none',
		}),
		indicatorsContainer: (provided, state) => ({
			...provided,
			height: '25px',
		}),
	};

	return (
		<div className="customerSearchContainer">
			<div className="searchInputCont">
				<label htmlFor="program">Program:</label>
				<Select className="searchSelect basic-single" classNamePrefix="select" name="program" value={programSelection} onChange={handleProgramChange} options={program} styles={customStyles} isClearable={isClearable} />
			</div>
			<div className="searchInputCont">{/***spacer****/}</div>
			<div className="searchInputCont">
				<label htmlFor="phone">Phone Number:</label>
				<input type="phone" name="phone" className="searchInput" value={phone} onChange={(e) => setPhone(e.target.value)} />
			</div>
			<div className="searchInputCont">
				<label htmlFor="email">Email Address:</label>
				<input type="text" name="email" className="searchInput" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="searchInputCont">
				<label htmlFor="lname">Last Name:</label>
				<input type="text" name="lname" className="searchInput" value={lname} onChange={(e) => setLname(e.target.value)} />
			</div>
			<div className="searchInputCont">
				<label htmlFor="fname">First Name:</label>
				<input type="text" name="fname" className="searchInput" value={fname} onChange={(e) => setFname(e.target.value)} />
			</div>
		</div>
	);
}
