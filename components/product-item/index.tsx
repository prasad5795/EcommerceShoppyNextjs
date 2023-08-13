import Link from 'next/link';
import { ProductType } from 'types';

/**
 * Props for the ProductItem component.
 */
type ProductItemProps = ProductType;

/**
 * Displays a single product item with image, title, and price.
 *
 * @param {ProductItemProps} props - The props for the component.
 * @returns {JSX.Element} The ProductItem component.
 */
const ProductItem = ({ image, id, title, price }: ProductItemProps) => {
  return (
    <div className="product-item">
      <div className="product__image">
        <Link href={`/product/${id}`}>
          <a>
            {/* Display the product image with a link to the product details page. */}
            <img src={image ? image : ''} alt="product" />
          </a>
        </Link>
      </div>
      <div className="product__description">
        {/* Display the product title and price. */}
        <h3>{title}</h3>
        <h4>${price}</h4>
      </div>
    </div>
  );
};

// Export the ProductItem component as the default export.
export default ProductItem;
