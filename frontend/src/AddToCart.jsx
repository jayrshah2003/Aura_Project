import { Link } from 'react-router-dom';

export default function AddToCart({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce((acc, curr) => acc + parseFloat(curr.price.replace(/\D/g, '')), 0);
  const totalItems = cartItems.length;

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className="shopping-cart">
      <div><img src="/image/AuraLogo.png" alt="logo" width="200" /></div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <p><strong>{item.name}</strong></p>
              <img src={item.image} alt={item.name} style={{ width: '150px', height: '150px' }} />
              <p>Brand: {item.brand}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => removeItem(index)}>Remove Item</button> {/* Button to remove individual item */}
            </div>
          ))}
          <p className="total">Total Items: {totalItems}</p>
          <p className="total">Total Price: ${totalPrice.toFixed(2)}</p> 
          <button onClick={emptyCart}>Empty Cart</button> {/* Button to empty the entire cart */}
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  ); 
}
