import 'tailwindcss/tailwind.css';
import { Layouts } from '../components';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
