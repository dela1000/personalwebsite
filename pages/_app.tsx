import type { AppProps } from 'next/app';
import 'styles/globals.css';
import { AppWrapper } from 'contexts/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
