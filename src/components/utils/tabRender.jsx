import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

export default function TabRender(props) {
	return (
		<NavItem className="fc">
			<NavLink
				className={classnames({ active: props.activeTab === props.num })}
				onClick={() => {
					props.toggle(props.num);
				}}>
				{props.name}
			</NavLink>
		</NavItem>
	);
}
