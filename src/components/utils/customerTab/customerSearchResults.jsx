import '../../../assets/css/customer.css';
import { useState, useContext } from 'react';
import { Table } from 'reactstrap';
import DataContext from '../../../data/dataContext';
import ResList from './searchResultList';

export default function SearchResults() {
	const { program, programSelection, handleProgramChange } = useContext(DataContext);

	return (
		<div className="resultsContainer">
			<div className="resultsTitle">Results</div>
			<Table className="fix" striped>
				<thead>
					<tr className="resultHeader ">
						<th className="expandSpacer divider"></th>
						<th className="divider">Name</th>
						<th className="divider dob">DOB</th>
						<th className="divider phone">Phone</th>
						<th className="divider address">Address</th>
						<th className="divider email">Email</th>
						<th className="divider lastModified">Last Modified</th>
						<th className="divider action">Actions</th>
					</tr>
				</thead>
			</Table>
			<ResList styleColor={'table1'} />
			<ResList styleColor={'table2'} />
		</div>
	);
}
