/**
 * Displays a loading placeholder for a product item.
 *
 * @returns {JSX.Element} The ProductItemLoading component.
 */
const ProductItemLoading = () => (
  <a href="#" className="product-item product-item--loading">
    <div className="product__image">
      {/* Placeholder for the product image. */}
    </div>
    
    <div className="product__description">
      <h3>{/* Placeholder for the product title. */}</h3>
      <div className={"product__price"} >
        <h4>{/* Placeholder for the product price. */}</h4>
      </div>
    </div>
  </a>
);

// Export the ProductItemLoading component as the default export.
export default ProductItemLoading;
