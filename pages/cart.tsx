import Layout from '../layouts/Main';
import ShoppingCart from '../components/shopping-cart';

/**
 * Products component represents a page displaying the shopping cart content.
 * It uses the Layout component to provide a consistent layout structure.
 */
const Products = () => (
  <Layout>
    {/* Display the shopping cart content */}
    <ShoppingCart />
  </Layout>
);

export default Products;
