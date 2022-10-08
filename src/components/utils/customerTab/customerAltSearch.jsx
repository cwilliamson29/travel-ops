import '../../../assets/css/customer.css';
import { useState, useContext } from 'react';
import DataContext from '../../../data/dataContext';
import { Collapse } from 'reactstrap';
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs';
import Select from 'react-select';

export default function AltSearch() {
	const { countryOptions, countrySel, stateSel, SelectUSStates, handleCountryChange, handleStateChange, ccNumber, setCcNumber, custNumber, setCustNumber } = useContext(DataContext);
	const [collapse, setCollapse] = useState(false);
	const [isClearable, setIsClearable] = useState(true);

	const toggle = () => {
		setCollapse(!collapse);
	};

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			background: '#fff',
			borderColor: '#9e9e9e',
			minHeight: '25px',
			height: '25px',
			width: '200px',
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
		<div className="altSearchWrapper">
			<div className="head" onClick={toggle}>
				{collapse ? <BsArrowUpSquareFill className="altSearchArrow" /> : <BsArrowDownSquareFill className="altSearchArrow" />}
				Other Search Criteria
			</div>
			<Collapse isOpen={collapse}>
				<div className="altSearchContainer">
					<div className="searchInputCont">
						<label htmlFor="program">Country:</label>
						<Select className="searchSelect basic-single" classNamePrefix="select" name="program" value={countrySel} onChange={handleCountryChange} options={countryOptions} styles={customStyles} isClearable={isClearable} />
					</div>
					<div className="searchInputCont">
						<label htmlFor="phone">State:</label>
						<Select className="searchSelect basic-single" classNamePrefix="select" name="program" value={stateSel} onChange={handleStateChange} options={SelectUSStates} styles={customStyles} isClearable={isClearable} />
					</div>
					<div className="searchInputCont">
						<label htmlFor="email">Customer #:</label>
						<input type="text" name="email" className="searchInput" value={custNumber} onChange={(e) => setCustNumber(e.target.value)} />
					</div>
					<div className="searchInputCont">
						<label htmlFor="lname">Credit Card#:</label>
						<input type="text" name="lname" className="searchInput" value={ccNumber} onChange={(e) => setCcNumber(e.target.value)} />
					</div>
				</div>
			</Collapse>
		</div>
	);
}
