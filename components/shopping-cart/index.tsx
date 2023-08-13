import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import Item from './item';
import { RootState } from 'store';
import Footer from 'components/footer';
import Link from 'next/link';

/**
 * Displays the shopping cart page with cart items, total cost, and checkout options.
 *
 * @returns {JSX.Element} The ShoppingCart component.
 */
const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  /**
   * Calculates the total cost of all items in the cart.
   *
   * @returns {number} The total cost of items in the cart.
   */
  const priceTotal = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        totalPrice += item.price * item.count;
      });
    }

    return totalPrice;
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
          {/* Display the checkout status indicator with the 'cart' step active. */}
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: 'left' }}>Product</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                {/* Display cart items using the Item component. */}
                {cartItems.map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    title={item.title}
                    price={item.price}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Nothing in the cart</p>}
        </div>

        <div className="cart-actions">
          {/* Link to continue shopping */}
          <Link href="/">
            <a className="cart__btn-back">
              <i className="icon-left"></i> Continue Shopping
            </a>
          </Link>
          <div className="cart-actions__items-wrapper">
            {/* Display the total cost of items in the cart */}
            <p className="cart-actions__total">
              Total cost <strong>${priceTotal().toFixed(2)}</strong>
            </p>
            {/* Link to the checkout page */}
            <Link href="/cart/checkout">
              <a className="btn btn--rounded btn--yellow">Checkout</a>
            </Link>
          </div>
        </div>
      </div>
      {/* Display the Footer component */}
      <Footer />
    </section>
  );
};

// Export the ShoppingCart component as the default export.
export default ShoppingCart;
