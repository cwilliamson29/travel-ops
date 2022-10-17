import React from "react";
import { TabPane } from "reactstrap";
import TableTitle from "./tableTitle";

export default function InqTab(props) {
	return (
		<TabPane tabId="1">
			<div className="bookingWrap">
				<TableTitle />
			</div>
		</TabPane>
	);
}
