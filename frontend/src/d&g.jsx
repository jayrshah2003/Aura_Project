import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 

export default function Dolce() {
    const dgClothes = clothes.filter(item => item.type === 'D&G');

    return (
        <div>
            <h1>D&G Collection</h1>
            <div className="inventory-container">
                {dgClothes.map(item => (
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
