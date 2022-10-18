import uniqid from "uniqid";

export const addressData = [
	{
		id: uniqid(),
		custID: "123456",
		primary: {
			line1: "101 Foxtrot Lane",
			line2: "",
			city: "Atlanta",
			state: "GA",
			zip: "30301",
		},
	},
	{
		id: uniqid(),
		custID: "234523",
		primary: {
			line1: "54 heisenberg Lane",
			line2: "",
			city: "Los Angeles",
			state: "CA",
			zip: "90210",
		},
	},
	{
		id: uniqid(),
		custID: "323456",
		primary: {
			line1: "989 Whiskey Tango Rd",
			line2: "",
			city: "Anniston",
			state: "AL",
			zip: "30301",
		},
	},
	{
		id: uniqid(),
		custID: "323424",
		primary: {
			line1: "989 Whiskey Tango Rd",
			line2: "",
			city: "Anniston",
			state: "AL",
			zip: "30301",
		},
	},
];
