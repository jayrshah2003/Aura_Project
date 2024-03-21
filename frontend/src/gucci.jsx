import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 

export default function Gucci() {
    const gucciClothes = clothes.filter(item => item.type === 'gucci');

    return (
        <div>
            <h1>Gucci Collection</h1>
            <div className="inventory-container">
                {gucciClothes.map(item => (
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
