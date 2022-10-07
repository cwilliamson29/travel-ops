import '../../../assets/css/customer.css';
import { useContext } from 'react';
import DataContext from '../../../data/dataContext';
import { FcSearch, FcUndo } from 'react-icons/fc';

export default function SearchButtons() {
	const { togglenewCustBtn, searchReset } = useContext(DataContext);

	return (
		<div className="buttonContainer">
			<button className="searchButtons" onClick={togglenewCustBtn}>
				<FcSearch size="1.5em" style={{ marginRight: 5 }} />
				Search
			</button>
			<button className="searchButtons" onClick={searchReset}>
				<FcUndo size="1.5em" style={{ marginRight: 5 }} />
				Reset
			</button>
		</div>
	);
}
