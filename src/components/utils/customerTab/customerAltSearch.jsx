import '../../../assets/css/customer.css';
import { useState, useMemo } from 'react';
import { Collapse } from 'reactstrap';
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs';
import Select from 'react-select';
import { SelectUSStates } from '../../../data/usStates';
import countryList from 'react-select-country-list';

export default function AltSearch() {
	const [collapse, setCollapse] = useState(false);
	const [selection, setSelection] = useState(null);
	const [selection2, setSelection2] = useState(null);
	const [isClearable, setIsClearable] = useState(true);
	const countryOptions = useMemo(() => countryList().getData(), []);

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

	const handleChange = (e) => {
		setSelection(e);
	};
	const handleChange2 = (e) => {
		setSelection2(e);
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
						<Select className="searchSelect basic-single" classNamePrefix="select" name="program" value={selection} onChange={handleChange} options={countryOptions} styles={customStyles} isClearable={isClearable} />
					</div>
					<div className="searchInputCont">
						<label htmlFor="phone">State:</label>
						<Select className="searchSelect basic-single" classNamePrefix="select" name="program" value={selection2} onChange={handleChange2} options={SelectUSStates} styles={customStyles} isClearable={isClearable} />
					</div>
					<div className="searchInputCont">
						<label htmlFor="email">Customer #:</label>
						<input type="text" name="email" className="searchInput" />
					</div>
					<div className="searchInputCont">
						<label htmlFor="lname">Credit Card#:</label>
						<input type="text" name="lname" className="searchInput" />
					</div>
				</div>
			</Collapse>
		</div>
	);
}
