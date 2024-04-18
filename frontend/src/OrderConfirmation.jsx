import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
        < img src = "/image/AuraLogo.png" alt="logo" width ="200" />
      <h1>Order Confirmation</h1>
      <p>Your order has been placed!</p>
      <p>It will be delivered within 5 to 10 days.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default OrderConfirmation;
