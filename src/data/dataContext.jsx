import { createContext, useState, useEffect, useMemo } from 'react';
import { customerData } from './customerData';
import { addressData } from './customerAddress';
import uniqid from 'uniqid';
import { SelectUSStates } from './usStates';
import countryList from 'react-select-country-list';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [activeTab, setActiveTab] = useState('1');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [custNumber, setCustNumber] = useState('');
	const [ccNumber, setCcNumber] = useState('');
	const [searchResultList, setSearchResultList] = useState(['123456', '234523', '323456']);

	const tabToggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	const [newCustBtn, setnewCustBtn] = useState(false);
	const togglenewCustBtn = () => {
		setnewCustBtn(true);
	};
	const [programSelection, setProgramSelection] = useState(null);
	const program = [
		{ value: 'MYCRUISESITE.COM', label: 'MYCRUISESITE.COM' },
		{ value: 'MYCRUISEPLANNER.COM', label: 'MYCRUISEPLANNER.COM' },
		{ value: 'MYCRUISEVACATION.COM', label: 'MYCRUISEVACATION.COM' },
		{ value: 'UNKNOWN', label: 'UNKNOWN' },
	];
	const handleProgramChange = (value) => {
		setProgramSelection(value);
	};

	const countryOptions = useMemo(() => countryList().getData(), []);
	const [countrySel, setCountrySel] = useState(null);
	const [stateSel, setStateSel] = useState(null);

	const handleCountryChange = (value) => {
		setCountrySel(value);
	};
	const handleStateChange = (value) => {
		setStateSel(value);
	};
	const searchReset = () => {
		setPhone('');
		setEmail('');
		setFname('');
		setLname('');
		setCustNumber('');
		setCcNumber('');
		setSearchResultList([]);
		setnewCustBtn(false);
		setProgramSelection(null);
		setCountrySel(null);
		setStateSel(null);
	};
	const searchCustomer = () => {
		togglenewCustBtn();
		setSearchResultList([]);

		const fL = fname.length;
		const LL = lname.length;
		let tempArray = [];

		if (programSelection !== null) {
			if (phone !== '') {
				if (email === '' && fname === '' && lname === '') {
					customerData.map((item, i) => {
						if (programSelection.value === 'UNKNOWN') {
							if (item.phone === phone) {
								tempArray.push(item.id);
								console.log(tempArray);
							}
						} else if (item.program === programSelection.value && item.phone === phone) {
							tempArray.push(item.id);
						}
					});
				} else if (email !== '' && fname === '' && lname === '') {
					customerData.map((item, i) => {
						if (programSelection.value === 'UNKNOWN') {
							if (item.phone === phone && item.email === email) {
								tempArray.push(item.id);
								console.log(tempArray);
							}
						} else if (item.program === programSelection.value && item.phone === phone && item.email === email) {
							tempArray.push(item.id);
						}
					});
				} else if (email !== '' && fname !== '' && lname !== '') {
					if (fL < 2 || LL < 2) {
						alert('last name and first name must be at least 2 letters!');
					}
					customerData.map((item, i) => {
						if (programSelection.value === 'UNKNOWN') {
							console.log(item.firstName.includes(fname));
							if (item.phone === phone && item.email === email && item.firstName.includes(fname) && item.lastName.includes(lname)) {
								tempArray.push(item.id);
								console.log(tempArray);
							}
						} else if (item.program === programSelection.value && item.phone === phone && item.email === email) {
							tempArray.push(item.id);
						}
					});
				}
			} else if (email !== '') {
				if (fname === '' && lname === '') {
					customerData.map((item, i) => {
						if (programSelection.value === 'UNKNOWN') {
							if (item.email === email) {
								tempArray.push(item.id);
								console.log(tempArray);
							}
						} else if (item.program === programSelection.value && item.email === email) {
							tempArray.push(item.id);
						}
					});
				} else if (email !== '' && fname !== '' && lname !== '') {
					if (fL < 2 || LL < 2) {
						alert('last name and first name must be at least 2 letters!');
					}
					customerData.map((item, i) => {
						if (programSelection.value === 'UNKNOWN') {
							if (item.phone === phone && item.email === email) {
								tempArray.push(item.id);
								console.log(tempArray);
							}
						} else if (item.program === programSelection.value && item.phone === phone && item.email === email) {
							tempArray.push(item.id);
						}
					});
				}
			} else if (lname !== '' || fname !== '') {
				if (fL >= 2 && LL >= 2) {
					console.log(lname, ' + ', fname);
				} else {
					alert('last name and first name must be at least 2 letters!');
				}
			} else {
				alert('field empty');
			}
		} else {
			alert('Please select a program!');
		}
		setSearchResultList(tempArray);
	};

	return (
		<DataContext.Provider
			value={{
				activeTab,
				tabToggle,
				newCustBtn,
				phone,
				ccNumber,
				setCcNumber,
				custNumber,
				setCustNumber,
				setPhone,
				email,
				setEmail,
				fname,
				setFname,
				lname,
				setLname,
				togglenewCustBtn,
				handleProgramChange,
				programSelection,
				program,
				countryOptions,
				countrySel,
				stateSel,
				SelectUSStates,
				handleCountryChange,
				handleStateChange,
				searchReset,
				searchCustomer,
				searchResultList,
				customerData,
				addressData,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
