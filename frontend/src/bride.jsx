import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 

export default function Bride() {
    const brideClothes = clothes.filter(item => item.type === 'Bride');

    return (
        <div>
            <h1>Bride Collection</h1>
            <div className="inventory-container">
                {brideClothes.map(item => (
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
