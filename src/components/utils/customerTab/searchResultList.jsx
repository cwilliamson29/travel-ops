import '../../../assets/css/customer.css';
import { useState, useContext } from 'react';
import { Table } from 'reactstrap';
import DataContext from '../../../data/dataContext';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { BsArrowReturnRight } from 'react-icons/bs';

export default function ResList({ styleColor, pax }) {
	const { program, customerData, addressData } = useContext(DataContext);

	return (
		<div>
			{customerData.map((cust) => {
				if (cust.id === pax) {
					return (
						<div key={cust.id} className="result" id={styleColor}>
							<div className="expandSpacer divider padL1">
								<AiOutlinePlusSquare />
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
							<div className="divider dob padL">{cust.dob}</div>
							<div className="divider phone padL">{cust.phone}</div>
							<div className="divider address padL">
								{addressData.map((add) => {
									if (add.custID === pax) {
										return (
											<div key={add.id}>
												<span>{add.primary.line1}</span>
												<span>
													{add.primary.city}, {add.primary.state}, {add.primary.zip}
												</span>
											</div>
										);
									}
								})}
							</div>
							<div className="divider email padL">{cust.email}</div>
							<div className="divider lastModified padL">10/08/2022</div>
							<div className="divider action padL">Actions</div>
						</div>
					);
				}
			})}
		</div>
	);
}
