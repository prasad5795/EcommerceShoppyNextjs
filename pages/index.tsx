import Footer from '../components/footer';
import Layout from '../layouts/Main';
import ProductsContent from '../components/products-content';

/**
 * Products component represents a page displaying a list of products.
 * It uses the Layout component to provide a consistent layout structure.
 * It includes the ProductsContent component to render the actual products content.
 */
const Products = () => (
  <Layout>
    {/* Products section */}
    <section className="products-page">
      <div className="container">
        {/* Render the actual products content */}
        <ProductsContent />
      </div>
    </section>
    {/* Display the footer */}
    <Footer />
  </Layout>
);

export default Products;
