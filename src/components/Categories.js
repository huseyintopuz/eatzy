import './styles/categories.css';

const Categories = () => {
    const categories = [
        'Entertainment',
        'Business',
        'Adventure',
        'Decorating',
        'Travelling',
        'Shopping'
    ]
    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={index}>
                            <a href="/{category}">{category}</a>
                        </li>                    
                )
                })}
            </ul>
        </div>
    )
}

export default Categories