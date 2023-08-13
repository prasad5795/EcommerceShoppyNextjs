import ProductItemLoading from './../../../product-item/loading';

/**
 * Displays a loading placeholder for a list of products.
 *
 * @returns {JSX.Element} The ProductsLoading component.
 */
const ProductsLoading = () => {
  return (
    <section className="products-list">
      {/* Display multiple ProductItemLoading components as loading placeholders. */}
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
    </section>
  );
};

// Export the ProductsLoading component as the default export.
export default ProductsLoading;
