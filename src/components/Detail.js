import { useEffect } from 'react';
import CheckList from './CheckList';
import {Eye} from '../icons/Icon';
import takePhoto from '../images/takePhoto.jpg';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { countBlog } from '../features/counterSlice';
import './styles/detail.css';

const Detail = () => {

  const dispatch = useDispatch();
  // count keeps the value that is returned from countBlog function.
  const {count} = useSelector(state => state.counter);

  // countBlog function (in Redux) increases the value When the blog page is visited by users. This happens for every render with useEffect Hook. 
  
  useEffect(() => {
    dispatch(countBlog());
  }, [dispatch])

  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className='detail-blog'>
        <img src={takePhoto} width='580px' height='360px' alt='takephoto' />
        <div className='detail-explanation'>
          <div className='view'>
            <span><b>By </b>Cora Drew, <b>at </b>March 20</span>
            <div className='count'>
              <span>{count}</span>
              <Eye />
            </div>
          </div>
          <h2>How to start a successfull photography business</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sint unde temporibus libero adipisci a quos. Rem, natus nobis ea sunt.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <CheckList />
          <CheckList />
          <CheckList />
          <CheckList />
        </div>
      </div>
    </div>
  )
}

export default Detail