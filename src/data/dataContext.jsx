import { createContext, useState, useEffect, useMemo } from "react";
import { customerData } from "./customerData";
import { addressData } from "./customerAddress";
import uniqid from "uniqid";
import { SelectUSStates } from "./usStates";
import countryList from "react-select-country-list";

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
		setPhone("");
		setEmail("");
		setFname("");
		setLname("");
		setCustNumber("");
		setCcNumber("");
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
		const fnameLower = fname.toLowerCase();
		const lnameLower = lname.toLowerCase();
		const emLower = email.toLowerCase();
		let tempArray = [];

		if (programSelection !== null) {
			if (custNumber !== "") {
				customerData.map((item, i) => {
					if (programSelection.value === "UNKNOWN") {
						if (item.id === custNumber) {
							tempArray.push(item.id);
						}
					} else if (
						item.program === programSelection.value &&
						item.id === custNumber
					) {
						tempArray.push(item.id);
					}
				});

				//*************Search by country, state, or customer #***************
			} else if (countrySel !== null && stateSel === null) {
				if (phone !== "") {
					customerData.map((item, i) => {
						if (programSelection.value === "UNKNOWN") {
							if (
								item.phone === phone &&
								item.country === countrySel.value
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							item.phone === phone &&
							item.country === countrySel.value
						) {
							tempArray.push(item.id);
						}
					});
				} else if (lname !== "" && fname !== "") {
					customerData.map((item, i) => {
						const ifn = item.firstName.toLowerCase();
						const iln = item.lastName.toLowerCase();
						if (programSelection.value === "UNKNOWN") {
							if (
								ifn.includes(fnameLower) &&
								iln.includes(lnameLower) &&
								item.country === countrySel.value
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							ifn.includes(fnameLower) &&
							iln.includes(lnameLower) &&
							item.country === countrySel.value
						) {
							tempArray.push(item.id);
						}
					});
				} else {
					alert(
						"Must have phone OR first and last name to search by country"
					);
				}
			} else if (countrySel !== null && stateSel !== null) {
				if (phone !== "") {
					customerData.map((item, i) => {
						if (programSelection.value === "UNKNOWN") {
							if (
								item.phone === phone &&
								item.country === countrySel.value &&
								item.state === stateSel.value
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							item.phone === phone &&
							item.country === countrySel.value &&
							item.state === stateSel.value
						) {
							tempArray.push(item.id);
						}
					});
				} else if (lname !== "" && fname !== "") {
					customerData.map((item, i) => {
						const ifn = item.firstName.toLowerCase();
						const iln = item.lastName.toLowerCase();
						if (programSelection.value === "UNKNOWN") {
							if (
								ifn.includes(fnameLower) &&
								iln.includes(lnameLower) &&
								item.country === countrySel.value &&
								item.state === stateSel.value
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							ifn.includes(fnameLower) &&
							iln.includes(lnameLower) &&
							item.country === countrySel.value &&
							item.state === stateSel.value
						) {
							tempArray.push(item.id);
						}
					});
				} else {
					alert(
						"Must have phone OR first and last name to search by country"
					);
				}
			} else if (countrySel === null && stateSel !== null) {
				if (phone !== "") {
					customerData.map((item, i) => {
						if (programSelection.value === "UNKNOWN") {
							if (
								item.phone === phone &&
								item.state === stateSel.value
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							item.phone === phone &&
							item.state === stateSel.value
						) {
							tempArray.push(item.id);
						}
					});
				} else if (lname !== "" && fname !== "") {
					customerData.map((item, i) => {
						const ifn = item.firstName.toLowerCase();
						const iln = item.lastName.toLowerCase();
						if (programSelection.value === "UNKNOWN") {
							if (
								ifn.includes(fnameLower) &&
								iln.includes(lnameLower) &&
								item.state === stateSel.value
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							ifn.includes(fnameLower) &&
							iln.includes(lnameLower) &&
							item.state === stateSel.value
						) {
							tempArray.push(item.id);
						}
					});
				} else {
					alert(
						"Must have phone OR first and last name to search by country"
					);
				}
				//*************Search by Phone with email and name***************
			} else if (phone !== "") {
				if (email === "" && fname === "" && lname === "") {
					customerData.map((item, i) => {
						if (programSelection.value === "UNKNOWN") {
							if (item.phone === phone) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							item.phone === phone
						) {
							tempArray.push(item.id);
						}
					});
				} else if (email !== "" && fname === "" && lname === "") {
					customerData.map((item, i) => {
						const iem = item.email.toLowerCase();
						if (programSelection.value === "UNKNOWN") {
							if (item.phone === phone && iem === emLower) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							item.phone === phone &&
							iem === emLower
						) {
							tempArray.push(item.id);
						}
					});
				} else if (fname !== "" && lname !== "") {
					if (fL < 2 || LL < 2) {
						alert(
							"last name and first name must be at least 2 letters!"
						);
					}
					customerData.map((item, i) => {
						const ifn = item.firstName.toLowerCase();
						const iln = item.lastName.toLowerCase();

						if (programSelection.value === "UNKNOWN") {
							if (
								item.phone === phone &&
								ifn.includes(fnameLower) &&
								iln.includes(lnameLower)
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							item.phone === phone &&
							ifn.includes(fnameLower) &&
							iln.includes(lnameLower)
						) {
							tempArray.push(item.id);
						}
					});
				}
				//*************Search by Email with name*****************
			} else if (email !== "") {
				if (fname === "" && lname === "") {
					customerData.map((item, i) => {
						if (programSelection.value === "UNKNOWN") {
							if (emLower === email.toLowerCase()) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							item.email === email
						) {
							tempArray.push(item.id);
						}
					});
				} else if (fname !== "" && lname !== "") {
					if (fL < 2 || LL < 2) {
						alert(
							"last name and first name must be at least 2 letters!"
						);
					}
					customerData.map((item, i) => {
						const ifn = item.firstName.toLowerCase();
						const iln = item.lastName.toLowerCase();
						const iem = item.email.toLowerCase();

						if (programSelection.value === "UNKNOWN") {
							if (
								emLower === iem &&
								ifn.includes(fnameLower) &&
								iln.includes(lnameLower)
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							emLower === iem &&
							ifn.includes(fnameLower) &&
							iln.includes(lnameLower)
						) {
							tempArray.push(item.id);
						}
					});
				}
				//************ Search by name only***************
			} else if (lname !== "" || fname !== "") {
				if (fL >= 2 && LL >= 2) {
					customerData.map((item, i) => {
						const ifn = item.firstName.toLowerCase();
						const iln = item.lastName.toLowerCase();

						if (programSelection.value === "UNKNOWN") {
							//****************
							if (
								ifn.includes(fnameLower) &&
								iln.includes(lnameLower)
							) {
								tempArray.push(item.id);
							}
						} else if (
							item.program === programSelection.value &&
							ifn.includes(fnameLower) &&
							iln.includes(lnameLower)
						) {
							tempArray.push(item.id);
						}
					});
				} else {
					alert(
						"last name and first name must be at least 2 letters!"
					);
				}
			} else {
				alert("Search field empty!");
			}

			//**************Program Selection is needed for search***************
		} else {
			alert("Please select a program!");
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
