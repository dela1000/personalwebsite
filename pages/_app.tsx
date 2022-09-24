import type { AppProps } from 'next/app';
import 'styles/globals.css';
import { AppWrapper } from 'contexts/context';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <div className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </AppWrapper>
  );
}

export default MyApp;
