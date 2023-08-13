import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'store/reducers/cart';
import { ProductStoreType, ProductType } from 'types';
import Description from '../description';
import Rater from 'react-rater';
import Toast from 'light-toast';

/**
 * Props for the Content component.
 */
type ContentProps = {
  /** The product data for which the content is displayed. */
  product: ProductType;
};

/**
 * Displays the content section for a product, including its details, description, and add-to-cart functionality.
 *
 * @param {ContentProps} props - The props for the component.
 * @returns {JSX.Element} The Content component.
 */
const Content = ({ product }: ContentProps) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  /**
   * Adds the product to the cart with the selected quantity.
   */
  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.id,
      title: product.title,
      thumb: product.image ? product.image : '',
      price: product.price,
      count: count,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    // Display a success toast when the product is added to the cart.
    Toast.success('Added to Cart', 1000);

    dispatch(addProduct(productStore));
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">
          Product ID:
          <br />
          {product.id}
        </h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.title}</h2>

        <div className="product__prices">
          <h4>${product.price}</h4>
        </div>
        <div style={{ marginTop: '1%' }}>
          {/* Display product rating using the Rater component. */}
          <Rater rating={product.rating?.rate} total={5} interactive={false} />
        </div>
        <div style={{ marginTop: '1%' }}>{product.rating?.count} ratings</div>
      </div>

      <div className="product-content__filters">
        {/* Display the product description using the Description component. */}
        <Description product={product} />
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              onClick={() => addToCart()}
              className="btn btn--rounded btn--yellow"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the Content component as the default export.
export default Content;
