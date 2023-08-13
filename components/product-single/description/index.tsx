import { ProductType } from 'types';

type ProductContent = {
  product: ProductType;
};
const Description = ({ product }: ProductContent) => {
  return (
    <section className="product-single__description">
      <div className="product-description-block">
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default Description;
