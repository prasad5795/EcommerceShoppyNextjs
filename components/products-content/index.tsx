import List from './list';

/**
 * Displays the content section for the products, including a list of products.
 *
 * @returns {JSX.Element} The ProductsContent component.
 */
const ProductsContent = () => {
  return (
    <section className="products-content">
      {/* Display the List component to show a list of products. */}
      <List />
    </section>
  );
};

// Export the ProductsContent component as the default export.
export default ProductsContent;
