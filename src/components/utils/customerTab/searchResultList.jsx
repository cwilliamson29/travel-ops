import "../../../assets/css/customer.css";
import { useState, useContext } from "react";
import { Table, Collapse, Nav, TabContent } from "reactstrap";
import DataContext from "../../../data/dataContext";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import TabRender from "../tabRender";
import InqTab from "./searchResultTabs/inqTab";
import uniqid from "uniqid";

export default function ResList({ styleColor, pax }) {
	const { program, customerData, addressData } = useContext(DataContext);
	const [collapse, setCollapse] = useState(false);
	const [activeTab, setActiveTab] = useState("1");
	const toggle = () => {
		setCollapse(!collapse);
	};
	const tabToggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const PhoneNum = (number) => {
		const num = number.number;

		const areaCode = num[0] + num[1] + num[2];
		const code = num[3] + num[4] + num[5];
		const sec = num[6] + num[7] + num[8] + num[9];
		return (
			<>
				({areaCode}) {code}-{sec}
			</>
		);
	};
	const tabData = [
		{ name: "Inquiry Bookings", num: "1" },
		{ name: "Reserved Bookings", num: "2" },
		{ name: "Cancelled Bookings", num: "3" },
		{ name: "Booking Notes", num: "4" },
	];

	return (
		<div>
			{customerData.map((cust) => {
				if (cust.id === pax) {
					return (
						<div id={styleColor}>
							<div
								key={cust.id}
								className="result"
								onClick={toggle}
							>
								<div className="expandSpacer divider padL1">
									{collapse ? (
										<AiOutlineMinusSquare />
									) : (
										<AiOutlinePlusSquare />
									)}
								</div>
								<div className="divider name padL">
									<span>
										{cust.firstName} {cust.lastName}
									</span>
									<span>
										<BsArrowReturnRight />
										{cust.program}
									</span>
								</div>
								<div className="divider dob padL">
									{cust.dob}
								</div>
								<div className="divider phone padL">
									<PhoneNum number={cust.phone} />
								</div>
								<div className="divider address padL">
									{addressData.map((add) => {
										if (add.custID === pax) {
											return (
												<div key={add.id}>
													<span>
														{add.primary.line1}
													</span>
													<span>
														{add.primary.city},{" "}
														{add.primary.state},{" "}
														{add.primary.zip}
													</span>
												</div>
											);
										}
									})}
								</div>
								<div className="divider email padL">
									{cust.email}
								</div>
								<div className="divider lastModified padL">
									10/08/2022
								</div>
								<div className="divider action padL">
									Actions
								</div>
							</div>
							<Collapse isOpen={collapse}>
								<div className="linksBar divider lkSpace">
									<Nav tabs>
										{tabData.map((item, i) => (
											<TabRender
												key={uniqid()}
												num={item.num}
												name={item.name}
												activeTab={activeTab}
												toggle={tabToggle}
												sty={"resultTab"}
											/>
										))}
									</Nav>
								</div>
								<TabContent activeTab={activeTab}>
									<InqTab />
								</TabContent>
							</Collapse>
						</div>
					);
				}
			})}
		</div>
	);
}
