import { GetServerSideProps } from 'next';

import Footer from '../../components/footer';
import Content from '../../components/product-single/content';
import Gallery from '../../components/product-single/gallery';
import Layout from '../../layouts/Main';
import { server } from '../../utils/server';

// types
import Link from 'next/link';
import { ProductType } from 'types';

type ProductPageType = {
  product: ProductType;
};

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

const Product = ({ product }: ProductPageType) => {
  return (
    <Layout>
      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery image={product.image} />
            <Content product={product} />
          </div>
          <div className="back-button-section">
            <Link href="/">
              <a>
                <i className="icon-left"></i> Back to shop
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Product;
