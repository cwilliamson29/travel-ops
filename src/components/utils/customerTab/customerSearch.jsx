import '../../../assets/css/customer.css';
import { useState } from 'react';
import Select from 'react-select';

export default function CustomerSearch() {
	const [selection, setSelection] = useState(null);
	const [isClearable, setIsClearable] = useState(true);

	const options = [
		{ value: 'MYCRUISESITE.COM', label: 'MYCRUISESITE.COM' },
		{ value: 'MYCRUISEPLANNER.COM', label: 'MYCRUISEPLANNER.COM' },
		{ value: 'MYCRUISEVACATION.COM', label: 'MYCRUISEVACATION.COM' },
	];
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			background: '#fff',
			borderColor: '#9e9e9e',
			minHeight: '30px',
			height: '30px',
			boxShadow: state.isFocused ? null : null,
		}),

		valueContainer: (provided, state) => ({
			...provided,
			height: '30px',
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
			height: '30px',
		}),
	};

	const handleChange = (e) => {
		setSelection(e);
		console.log(e.value);
	};

	return (
		<div className="customerSearchContainer">
			<div>
				<label htmlFor="program">Program:</label>
				<Select className="searchSelect basic-single" classNamePrefix="select" name="program" value={selection} onChange={handleChange} options={options} styles={customStyles} isClearable={isClearable} />
			</div>
			<div className="searchInput">
				<label htmlFor="phone">Phone Number:</label>
				<input type="phone" />
			</div>
			<div className="searchInput">
				<label htmlFor="email">Email Address:</label>
				<input type="text" />
			</div>
			<div className="searchInput">
				<label htmlFor="email">Last Name:</label>
				<input type="text" />
			</div>
			<div className="searchInput">
				<label htmlFor="email">First Name:</label>
				<input type="text" />
			</div>
		</div>
	);
}
