import '../assets/css/customer.css';
import { TabPane } from 'reactstrap';
import NewCustomerButtons from './utils/customerTab/customerSearchButtons';
import CustomerSearch from './utils/customerTab/customerSearch';
import AltSearch from './utils/customerTab/customerAltSearch';
import SearchButtons from './utils/customerTab/searchSubmitButtons';
import SearchResults from './utils/customerTab/customerSearchResults';

export default function Customer() {
	return (
		<TabPane tabId="2" style={{ backgroundColor: '#dcdcdc' }}>
			<NewCustomerButtons />
			<CustomerSearch />
			<AltSearch />
			<SearchButtons />
			<SearchResults />
		</TabPane>
	);
}
