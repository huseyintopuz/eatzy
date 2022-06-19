import { Helmet } from 'react-helmet';
import takePhoto from '../images/takePhoto.jpg';
import { Facebook } from '../icons/Icon';
import { Twitter } from '../icons/Icon';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Mountain from '../components/Mountain';
import { Link } from 'react-router-dom';
import './styles/home.css';

const Home = () => {
  return (
    <div className='home row'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="col-xs-4 col-md-6">
        <img src={takePhoto} width='580px' height='360px' alt='take' />
        <div className='explanation '>
          <span><b>By </b>Cora Drew, <b>at </b>March 20</span>
          <h2>How to start a successfull photography business</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sint unde temporibus libero adipisci a quos. Rem, natus nobis ea sunt.</p>
          <div className='sources'>
            <div className="read-more">
              <div className='border' />
              <Link to='/detail'>Read More</Link>
            </div>
            <div className='icons'>
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
      </div>

      <div className="right-side col-xs-8 col-md-6">
        <Search />
        <Categories />
        <Mountain />
      </div>
      
    </div>
  )
}

export default Home