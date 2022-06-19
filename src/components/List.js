import {Helmet} from 'react-helmet';
import chocolate from '../images/chocolate.jpg';
import sidetable from '../images/sidetable.jpg';
import keyboard from '../images/keyboard.jpg';
import parfum from '../images/parfum.jpg';
import './styles/list.css';

const items = [
  {
      id: 1,
      type: 'Food',
      description: 'Nutrition Chocolate',
      image: chocolate
  },
  {
      id: 2,
      type: 'Crafts',
      description: 'Side table mockup',
      image: sidetable
  },
  {
      id: 3,
      type: 'Lifestyle',
      description: 'On a keyboard space',
      image: keyboard
  },
  {
      id: 4,
      type: 'Fashion',
      description: 'Eau de parfum spray',
      image: parfum
  }

]

const List = () => {

  return (
    <div className="list">
       <Helmet>
        <title>List</title>
      </Helmet>
      <ul className='list-group'>
        {
          items.map(item => {
            return (
              <li key={item.id} className='list-items'>
                <img src={item.image} width='380' height='280' alt={item.description} />
                <div className='list-info'>
                  <h5 className='list-type'>{item.type}</h5>
                  <h5 className='list-description'>{item.description}</h5>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List