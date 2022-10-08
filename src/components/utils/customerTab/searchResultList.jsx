import '../../../assets/css/customer.css';
import { useState, useContext } from 'react';
import { Table } from 'reactstrap';
import DataContext from '../../../data/dataContext';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { BsArrowReturnRight } from 'react-icons/bs';

export default function ResList({ styleColor }) {
	const { program, programSelection, handleProgramChange } = useContext(DataContext);

	return (
		<div className="result" id={styleColor}>
			<div className="expandSpacer divider padL1">
				<AiOutlinePlusSquare />
			</div>
			<div className="divider name padL">
				<span>Jane Dojacat</span>
				<span>
					<BsArrowReturnRight />
					mycruisesite.com
				</span>
			</div>
			<div className="divider dob padL">11/15/1984</div>
			<div className="divider phone padL">(770) 489-3648</div>
			<div className="divider address padL">
				<span>101 Shitshat Blvd,</span>
				<span> Atanta, GA, 30134</span>
			</div>
			<div className="divider email padL">janedojacat@gmail.com</div>
			<div className="divider lastModified padL">10/08/2022</div>
			<div className="divider action padL">Actions</div>
		</div>
	);
}
