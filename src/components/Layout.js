import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import List from './List';
import Detail from './Detail';
import './styles/layout.css';

const Layout = () => {
    return (
        <div className='layout'>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/list' element={<List />} />
                    <Route path='/detail' element={<Detail />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Layout