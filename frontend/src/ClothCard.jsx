import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ClothCard({name, price, size, image, brand, addToCart}){
    const handleAddToCart = () => {
        console.log('Adding item to cart:', { name, price, size, image, brand });
        // Construct the item object correctly
        const item = { name, price, size, image, brand };
        // Call the addToCart function passed from the parent component (AddToCart)
        addToCart(item);
    };
    

    // Include addToCart in the dependency array for useEffect
    useEffect(() => {
        ('addToCart:', addToCart);
    }, [addToCart]);
    

    
    return(
        
        <div className="InventoryCard" >
            <img src={image} alt="productName" width ="200px" height="200px" />

            <h2>{name}</h2>
            <h3>{size}</h3>
            <h4>{brand}</h4>
            <h5>{price}</h5>
            <Link to="/cart">

            <button onClick={handleAddToCart} >Rent</button>
            </Link>



            
           
        </div>
    )
}