export default function ClothCard({name, price, size, image, brand,}){

<<<<<<< Updated upstream
=======
export default function ClothCard({name, price, size, image, brand, addToCart}){
    const handleAddToCart = () => {
        console.log('Adding item to cart:', { name, price, size, image, brand });
        const item = { name, price, size, image, brand };
        addToCart(item);
    };
    

    useEffect(() => {
        ('addToCart:', addToCart);
    }, [addToCart]);
    

    
>>>>>>> Stashed changes
    return(
        
        <div className="InventoryCard" >
            <img src={image} alt="productName" width ="200px" height="200px" />

            <h2>{name}</h2>
            <h3>{size}</h3>
            <h4>{brand}</h4>
            <h5>{price}</h5>

            <button className="Add-Button">Rent</button>


           
        </div>
    )
}