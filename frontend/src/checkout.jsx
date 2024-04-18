import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreditCardChange = (event) => {
    setCreditCardNumber(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCheckout = () => {
    if (creditCardNumber.length !== 16) {
      setErrorMessage('Please enter a valid 16-digit credit card number.');
      return;
    }

    if (cvv.length !== 3 && cvv.length !== 4) {
      setErrorMessage('Please enter a valid 3 or 4-digit CVV.');
      return;
    }

    const currentDate = new Date();
    const [month, year] = expiryDate.split('/');
    const expiry = new Date(`20${year}`, month - 1);
    if (expiry < currentDate) {
      setErrorMessage('Please enter a valid expiry date.');
      return;
    }
  };

  return (
    <div className="checkout">
      < img src = "/image/AuraLogo.png" alt="logo" width ="200" />
      <h1>Checkout</h1>
      <div>
        <label htmlFor="creditCardNumber">Credit Card Number:</label>
        <input
          type="text"
          id="creditCardNumber"
          value={creditCardNumber}
          onChange={handleCreditCardChange}
        />
      </div>
      <div>
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCVVChange}
        />
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          placeholder="MM/YYYY"
          maxLength="7"
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Link to="/order-confirmation">
        <button onClick={handleCheckout}>Checkout</button>
      </Link>
    </div>
  );
}
