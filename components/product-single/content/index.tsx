import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'store/reducers/cart';
import { ProductStoreType, ProductType } from 'types';
import Description from '../description';
import Rater from 'react-rater';
import Toast from 'light-toast';

type ProductContent = {
  product: ProductType;
};

const Content = ({ product }: ProductContent) => {
  console.log('🚀 ~ file: index.tsx:12 ~ Content ~ product:', product);
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

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
    Toast.success("Added to Cart", 1000);

    dispatch(addProduct(productStore));
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">
          Product ID:<br></br>
          {product.id}
        </h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.title}</h2>

        <div className="product__prices">
          <h4>${product.price}</h4>
        </div>
        <div style={{ marginTop: '1%' }}>
          <Rater rating={product.rating?.rate} total={5} interactive={false} />
        </div>
        <div style={{ marginTop: '1%' }}>{product.rating?.count} ratings</div>
      </div>

      <div className="product-content__filters">
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

export default Content;
