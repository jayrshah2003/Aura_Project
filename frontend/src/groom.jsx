import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 

export default function Groom() {
    //hi
    const groomClothes = clothes.filter(item => item.type === 'Groom');

    return (
        <div>
            <h1>Groom Collection</h1>
            <div className="inventory-container">
                {groomClothes.map(item => (
                    <ClothCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        size={item.size}
                        image={item.image}
                        brand={item.brand}
                    />                 
                    
                ))}
            </div>
        </div>
    );
}
