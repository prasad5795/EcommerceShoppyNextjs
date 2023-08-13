import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductType } from 'types';

/**
 * Displays the content section for the products, including a list of products fetched from an API.
 *
 * @returns {JSX.Element} The ProductsContent component.
 */
const ProductsContent = () => {
  // Custom fetcher function for useSwr.
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // Fetch data from the API using useSwr.
  const { data, error } = useSwr('/api/products', fetcher);

  if (error) {
    return <div>Failed to load Products</div>;
  }

  return (
    <>
      {!data && <ProductsLoading />}

      {data && (
        <section className="products-list">
          {data.map((item: ProductType) => (
            <ProductItem
              id={item.id}
              title={item.title}
              price={item.price}
              // color={item.color}
              key={item.id}
              image={item.image}
            />
          ))}
        </section>
      )}
    </>
  );
};

// Export the ProductsContent component as the default export.
export default ProductsContent;
