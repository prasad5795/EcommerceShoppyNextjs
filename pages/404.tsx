import Link from 'next/link';
import LayoutError from '../layouts/404';

/**
 * ErrorPage component represents the custom error page for a 404 error.
 * It displays a message and a button to return to the home page.
 */
const ErrorPage = () => (
  <LayoutError>
    <section className="error-page">
      <div className="container">
        <h1>Error 404</h1>
        <p>Woops. Looks like this page doesn't exist</p>

        {/* Link to navigate back to the home page */}
        <Link href="/">
          <a className="btn btn--rounded btn--yellow">Go to home</a>
        </Link>
      </div>
    </section>
  </LayoutError>
);

export default ErrorPage;
