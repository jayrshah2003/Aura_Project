import ClothCard from './ClothCard';
import { clothes } from "./data/clothes"; 

export default function Workattire() {
    const workClothes = clothes.filter(item => item.type === 'Work');

    return (
        <div>
            <h1>Work&Attire Collection</h1>
            <div className="inventory-container">
                {workClothes.map(item => (
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
