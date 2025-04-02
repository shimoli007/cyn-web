import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to font sources */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Load Google Fonts */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
            rel="stylesheet"
          />
          
          {/* Meta tags */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0c2350" />
          
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Cynea" />
          <meta property="og:image" content="/images/og-image.jpg" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/images/og-image.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;