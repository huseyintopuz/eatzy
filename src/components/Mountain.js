import ters from '../images/ters.png';
import './styles/mountain.css';

const Mountain = () => {
  return (
    <div className='mountain'> 
        <img width='20px' height='20px' src={ters} alt={ters}/>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <p>- Maria Parker</p>
        <div className='circles'>
            <div className='circle' />
            <div className='second-circle'/>
        </div>
    </div>
  )
}

export default Mountain