import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 
import { Link } from 'react-router-dom';


export default function Dolce({addToCart}) {
    const dgClothes = clothes.filter(item => item.type === 'D&G');

    return (
        <div>
            < img src = "/image/AuraLogo.png" alt="logo" width ="200" />
            <Link to = "/main">
                <button className="Backtohome">
                Home
                </button>
            </Link>
            <h1>D&G Collection</h1>
            <div className="inventory-container">
        {dgClothes.map((item) => (
          <div className="productCard" key={item.id}>
            <ClothCard
              key={item.id}
              name={item.name}
              price={item.price}
              size={item.size}
              image={item.image}
              brand={item.brand}
              addToCart={addToCart}     
                    
            />
          </div>              
                    
                ))}
            </div>
        </div>
    );
}
