import { ProductType } from 'types';

/**
 * Props for the Description component.
 */
type DescriptionProps = {
  /** The product data for which the description is displayed. */
  product: ProductType;
};

/**
 * Displays the description section for a product.
 *
 * @param {DescriptionProps} props - The props for the component.
 * @returns {JSX.Element} The Description component.
 */
const Description = ({ product }: DescriptionProps) => {
  return (
    <section className="product-single__description">
      <div className="product-description-block">
        {/* Display the product description. */}
        <p>{product.description}</p>
      </div>
    </section>
  );
};

// Export the Description component as the default export.
export default Description;
