import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Footer from '../../components/footer';
import Content from '../../components/product-single/content';
import Gallery from '../../components/product-single/gallery';
import Layout from '../../layouts/Main';
import { server } from '../../utils/server';

// Types
import { ProductType } from 'types';

/**
 * ProductPageType defines the props expected by the Product component.
 */
type ProductPageType = {
  product: ProductType;
};

/**
 * getServerSideProps is a Next.js function that fetches data on the server-side.
 * It fetches the product data based on the provided pid query parameter.
 */
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

/**
 * Product component displays the details of a single product.
 */
const Product = ({ product }: ProductPageType) => {
  return (
    <Layout>
      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            {/* Display product image gallery */}
            <Gallery image={product.image} />
            {/* Display product content */}
            <Content product={product} />
          </div>
          <div className="back-button-section">
            {/* Link to go back to the shop */}
            <Link href="/">
              <a>
                <i className="icon-left"></i> Back to shop
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* Display the footer */}
      <Footer />
    </Layout>
  );
};

export default Product;
