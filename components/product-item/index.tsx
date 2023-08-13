import Link from 'next/link';
import { ProductTypeList } from 'types';

const ProductItem = ({ image, id, title, price }: ProductTypeList) => {
  return (
    <div className="product-item">
      <div className="product__image">
        <Link href={`/product/${id}`}>
          <a>
            <img src={image ? image : ''} alt="product" />
          </a>
        </Link>
      </div>
      <div className="product__description">
        <h3>{title}</h3>
        <h4>${price}</h4>
      </div>
    </div>
  );
};

export default ProductItem;
