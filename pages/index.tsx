import Footer from '../components/footer';
import Layout from '../layouts/Main';
import ProductsContent from '../components/products-content';

const Products = () => (
  <Layout>
    <section className="products-page">
      <div className="container">
        <ProductsContent />
      </div>
    </section>
    <Footer />
  </Layout>
);

export default Products;
