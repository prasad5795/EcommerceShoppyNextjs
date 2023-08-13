import { Fragment } from 'react';
import { wrapper } from '../store';

// Import global styles
import 'react-rater/lib/react-rater.css'; // Import styles for the rating component
import '../assets/css/styles.scss'; // Import custom global styles

// Import types
import type { AppProps } from 'next/app';

/**
 * MyApp component is the main entry point for Next.js app.
 * It wraps the provided Component with Redux state using the wrapper from the store.
 */
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    {/* Render the provided component with its props */}
    <Component {...pageProps} />
  </Fragment>
);

/**
 * Export MyApp component wrapped with Redux store using the wrapper.
 * This ensures that Redux state is available to all components in app.
 */
export default wrapper.withRedux(MyApp);
