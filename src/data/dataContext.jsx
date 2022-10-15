import { createContext, useState, useEffect, useMemo } from "react";
import { customerData } from "./customerData";
import { addressData } from "./customerAddress";
import uniqid from "uniqid";
import { SelectUSStates } from "./usStates";
import countryList from "react-select-country-list";
import filter from "lodash/fp/filter";
import curry from "lodash/fp/curry";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [activeTab, setActiveTab] = useState("1");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [custNumber, setCustNumber] = useState("");
	const [ccNumber, setCcNumber] = useState("");
	const [searchResultList, setSearchResultList] = useState([
		"123456",
		"234523",
		"323456",
	]);

	const tabToggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	const [newCustBtn, setnewCustBtn] = useState(false);
	const togglenewCustBtn = () => {
		setnewCustBtn(true);
	};
	const [programSelection, setProgramSelection] = useState(null);
	const program = [
		{ value: "MYCRUISESITE.COM", label: "MYCRUISESITE.COM" },
		{ value: "MYCRUISEPLANNER.COM", label: "MYCRUISEPLANNER.COM" },
		{ value: "MYCRUISEVACATION.COM", label: "MYCRUISEVACATION.COM" },
		{ value: "UNKNOWN", label: "UNKNOWN" },
	];
	const [programValue, setProgramValue] = useState("");

	const handleProgramChange = (value) => {
		if (value === null) {
			setProgramValue("");
		} else if (value.value === "UNKNOWN") {
			setProgramValue("");
		} else {
			setProgramValue(value.value);
		}
		setProgramSelection(value);
	};

	const countryOptions = useMemo(() => countryList().getData(), []);

	const [country, setCountry] = useState("");
	const [countrySel, setCountrySel] = useState(null);

	const [state, setState] = useState("");
	const [stateSel, setStateSel] = useState(null);

	const handleCountryChange = (value) => {
		//console.log(value.value);
		if (value === null) {
			setCountry("");
		} else {
			setCountry(value.value);
		}
		setCountrySel(value);
	};
	const handleStateChange = (value) => {
		if (value === null) {
			setState("");
		} else {
			setState(value.value);
		}
		setStateSel(value);
	};
	const searchReset = () => {
		setPhone("");
		setEmail("");
		setFname("");
		setLname("");
		setCustNumber("");
		setCcNumber("");
		setSearchResultList([]);
		setnewCustBtn(false);
		handleProgramChange(null);
		handleStateChange(null);
		handleCountryChange(null);
	};

	const filterParams = {
		program: programValue,
		firstName: fname,
		lastName: lname,
		phone: phone,
		email: email,
		country: country,
		state: state,
	};

	const search = (objArray, filterParams) => {
		console.log(filterParams);
		return objArray.filter((obj) => {
			return Object.keys(filterParams).every((key) => {
				return obj[key]
					.toLowerCase()
					.includes(filterParams[key].toLowerCase());
			});
		});
	};

	const searchCustomer = () => {
		togglenewCustBtn();
		setSearchResultList([]);

		let tempArray = [];

		if (custNumber !== "") {
			customerData.map((item, i) => {
				if (item.id === custNumber) {
					return tempArray.push(item.id);
				}
			});
		} else if (programSelection !== null) {
			if (fname !== "" || lname !== "") {
				if (fname.length < 2 || lname.length < 2) {
					alert(
						"last name and first name must be at least 2 letters!"
					);
				} else {
					tempArray = search(customerData, filterParams);
				}
			} else {
				tempArray = search(customerData, filterParams);
			}
		} else {
			alert("Program must be selected!");
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
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
