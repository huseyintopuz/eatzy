import Form from 'react-bootstrap/Form';
import {SearchIcon} from '../icons/Icon';
import './styles/search.css';

const Search = () => {
    return (
        <div className="search">
            <h3>Search</h3>
            <div className='search-input'>
                <Form.Control type="text" placeholder="Type here..." />
                <div><SearchIcon /></div>
            </div>
        </div>
    )
}

export default Search