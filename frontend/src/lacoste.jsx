import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 

export default function Lacoste() {
    const lacosteClothes = clothes.filter(item => item.type === 'Lacoste');

    return (
        <div>
            <h1>Lacoste Collection</h1>
            <div className="inventory-container">
                {lacosteClothes.map(item => (
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
