import { Fragment } from 'react';
import { wrapper } from '../store';

// types
import type { AppProps } from 'next/app';

// global styles
import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);