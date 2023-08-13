import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';

/**
 * Layout component that provides a consistent structure for different pages.
 *
 * @param {LayoutType} props - The props for the Layout component.
 * @returns {JSX.Element} The Layout component.
 */
const Layout = ({ children, title = 'Ecommerce Shoppy' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      {/* Set the page title using the Head component */}
      <Head>
        <title>{title}</title>
      </Head>

      {/* Display the Header component */}
      <Header />

      <main className={pathname !== '/' ? 'main-page' : ''}>
        {/* Display the main content */}
        {children}
      </main>
    </div>
  );
};

// Define the props type for the Layout component
type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

// Export the Layout component as the default export
export default Layout;
