import { useDispatch } from 'react-redux';
import { removeProduct, setCount } from 'store/reducers/cart';
import { ProductStoreType } from 'types';

/**
 * Displays a cart item in the shopping cart table.
 *
 * @param {ProductStoreType} props - The props for the component representing a cart item.
 * @returns {JSX.Element} The ShoppingCart component.
 */
const ShoppingCart = ({ thumb, title, id, count, price }: ProductStoreType) => {
  const dispatch = useDispatch();

  /**
   * Removes the product from the cart.
   */
  const removeFromCart = () => {
    dispatch(removeProduct({ thumb, title, id, count, price }));
  };

  /**
   * Sets the quantity/count of the product in the cart.
   *
   * @param {number} count - The new quantity/count of the product.
   */
  const setProductCount = (count: number) => {
    if (count <= 0) {
      return;
    }

    const payload = {
      product: { thumb, title, id, count, price },
      count,
    };

    dispatch(setCount(payload));
  };

  return (
    <tr>
      <td style={{ display: 'flex', flex: 1 }}>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{title}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="quantity-button">
          <button
            type="button"
            onClick={() => setProductCount(count - 1)}
            className="quantity-button__btn"
          >
            -
          </button>
          <span>{count}</span>
          <button
            type="button"
            onClick={() => setProductCount(count + 1)}
            className="quantity-button__btn"
          >
            +
          </button>
        </div>
      </td>
      <td>${price}</td>
      <td className="cart-item-cancel">
        <i className="icon-cancel" onClick={() => removeFromCart()}></i>
      </td>
    </tr>
  );
};

// Export the ShoppingCart component as the default export.
export default ShoppingCart;
