import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Cookies from "js-cookie"

export default function AddToCart({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce((acc, curr) => acc + parseFloat(curr.price.replace(/\D/g, '')), 0);
  const totalItems = cartItems.length;
  const navigate = useNavigate(); 

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const jwtCookie = Cookies.get('jwt-cookie');

  const handleCheckoutClick = () => {
    console.log('JWT Cookie:', jwtCookie);
    if (jwtCookie) {
      console.log('User is logged in. Proceeding to checkout...');
      navigate('/checkout'); 
    } else {
      console.log('User is not logged in. Redirecting to login page...');
      window.location.href = '/login'; 
    }
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
              <button onClick={() => removeItem(index)}>Remove Item</button>
            </div>
          ))}
          <p className="total">Total Items: {totalItems}</p>
          <p className="total">Total Price: ${totalPrice.toFixed(2)}</p> 
          <button onClick={emptyCart}>Empty Cart</button>
          <button onClick={handleCheckoutClick}>Proceed to Checkout</button> 
        </div>
      )}
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  ); 
}
