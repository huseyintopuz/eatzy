import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../icons/Icon';
import eatzy from '../images/eatzy.png';
import './styles/header.css';

const Header = () => {
    // it is used for active className when onClick
    const [handle, setHandle] = useState('home')

    // onClick function
    const handleHome = () => {
        // update the state to home
        setHandle('home')
    }
    // onClick function
    const handleList = () => {
        // update the state to list
        setHandle('list')
    }
    // onClick function
    const handleDetail = () => {
        // update the state to detail
        setHandle('detail')
    }

    return (
        <div className='header' >
            <div className='header-top row' >
                <img className='col-xs-6' src={eatzy} width='200px' height='80px' alt='eatzy logo' />
                <div className='options col-xs-6' >
                    <ul>
                        <li className='option'>
                            <Link className='tag' onClick={handleHome}
                                to='/home' >Home
                                <div className={handle === 'home' ? 'active-tag' : ''} />
                            </Link>
                            <Link className='tag' onClick={handleList}
                                to='/list' >List
                                <div className={handle === 'list' ? 'active-tag' : ''} />
                            </Link>
                            <Link className='tag' onClick={handleDetail}
                                to='/detail' >Detail
                                <div className={handle === 'detail' ? 'active-tag' : ''} />
                            </Link>
                        </li>
                    </ul>
                    <SearchIcon />
                </div>
            </div>
            <div className='header-border row' />
        </div>
    )
}

export default Header