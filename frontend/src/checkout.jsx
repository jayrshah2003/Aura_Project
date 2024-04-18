import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
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

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleCheckout = () => {
    // Your existing checkout logic here

    // Additional validation or processing related to address if needed

    // Example: If any of the address fields are empty
    if (!address || !city || !zipCode) {
      setErrorMessage('Please fill out all address fields.');
      return;
    }

    // Proceed with checkout if all validations pass
  };

  return (
    <div className="checkout">
      <img src="/image/AuraLogo.png" alt="logo" width="200" />
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
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div>
        <label htmlFor="zipCode">ZIP Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={handleZipCodeChange}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Link to="/order-confirmation">
        <button onClick={handleCheckout}>Checkout</button>
      </Link>
    </div>
  );
}
