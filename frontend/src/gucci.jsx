import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 
import { Link } from 'react-router-dom';


export default function Gucci({addToCart}) {
    const gucciClothes = clothes.filter(item => item.type === 'gucci');

    return (
        <div>
            < img src = "/image/AuraLogo.png" alt="logo" width ="200" />
            <Link to = "/main">
                <button className="Backtohome">
                Home
                </button>
            </Link>
            <h1>Gucci Collection</h1>
            <div className="inventory-container">
        {gucciClothes.map((item) => (
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
