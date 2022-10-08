import { createContext, useState, useEffect, useMemo } from 'react';
import customerData from './customerData';
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
		setnewCustBtn(false);
		setProgramSelection(null);
		setCountrySel(null);
		setStateSel(null);
	};
	const searchCustomer = () => {
		if (phone === '') {
			customerData.find();
		}
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
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
