import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 

export default function Cocktail() {
    const cocktailClothes = clothes.filter(item => item.type === 'Cocktail');

    return (
        <div>
            <h1>Cocktail Collection</h1>
            <div className="inventory-container">
                {cocktailClothes.map(item => (
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
