import { useSelector } from 'react-redux';

/**
 * Renders a list of checkout items based on the items in the Redux store cart.
 *
 * @returns {JSX.Element} The CheckoutItems component.
 */
const CheckoutItems = () => {
  // Fetch cart items from the Redux store.
  const { cartItems } = useSelector(state => state.cart);

  return (
    <ul className="checkout-items">
      {/* Map through each cart item and render a checkout item. */}
      {cartItems.map(item => (
        <li className="checkout-item" key={item.id}>
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              {/* Display the thumbnail of the item. */}
              <img src={item.thumb} alt={item.title} />
            </div>

            <div className="checkout-item__data">
              {/* Display the title and ID of the item. */}
              <h3>{item.title}</h3>
              <span>#{item.id}</span>
            </div>
          </div>
          
          {/* Display the price of the item. */}
          <h3>${item.price}</h3>
        </li>
      ))}
    </ul>
  );
};

// Export the CheckoutItems component as the default export.
export default CheckoutItems;
