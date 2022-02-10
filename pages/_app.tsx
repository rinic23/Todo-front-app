import '../public/styles/globals.scss';
import '../public/styles/antd.less';
import { withHydrate } from 'effector-next';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

const enhance = withHydrate();

export default enhance(MyApp);
