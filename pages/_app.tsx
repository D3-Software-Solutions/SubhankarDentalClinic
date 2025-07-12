import type { AppProps } from 'next/app';
import '../styles/globals.css';
import SEO from '../components/SEO';
import StickyCTA from '../components/StickyCTA';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
      <StickyCTA />
    </>
  );
}

export default MyApp; 