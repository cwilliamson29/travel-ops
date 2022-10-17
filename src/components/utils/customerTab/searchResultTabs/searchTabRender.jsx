import React from "react";
import { NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

export default function SearchTabRender(props) {
	return (
		<NavItem>
			<NavLink
				id="ResultNavLink"
				className={classnames({
					active: props.activeTab === props.num,
				})}
				onClick={() => {
					props.toggle(props.num);
				}}
			>
				{props.name}
			</NavLink>
		</NavItem>
	);
}
