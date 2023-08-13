import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document';

/**
 * CustomDocument extends the default Next.js Document class to add custom
 * configuration for the HTML document rendered on the server.
 */
export default class CustomDocument extends Document {
  /**
   * getInitialProps is a static method that runs on the server during rendering.
   * It's used to collect all necessary styles and other resources for the initial render.
   */
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Return collected initial props
    return {
      ...initialProps,
    };
  }

  /**
   * render method generates the HTML content for the document.
   * It's responsible for rendering the <html>, <head>, and <body> tags,
   * as well as injecting additional elements like styles and scripts.
   */
  render() {
    return (
      <html lang="en">
        <Head>
          {/* Preconnect to external font resources */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          
          {/* Load Google Fonts for Poppins font family */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Render the main content of the application */}
          <Main />

          {/* Render the Next.js scripts for hydration */}
          <NextScript />
        </body>
      </html>
    );
  }
}
