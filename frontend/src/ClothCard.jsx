
export default function ClothCard({name, price, size, image, brand,onRentClick}){

    return(
        
        <div className="InventoryCard" >
            <img src={image} alt="productName" width ="200px" height="200px" />

            <h2>{name}</h2>
            <h3>{size}</h3>
            <h4>{brand}</h4>
            <h5>{price}</h5>
            
            <button onClick={onRentClick} >Rent</button>
            


            
           
        </div>
    )
}