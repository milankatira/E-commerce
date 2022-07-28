import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
// import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
import Footer from '../components/common/layout/Footer';
import Header from '../components/Header';
const Navbar = dynamic(() => import('../components/common/layout/Navbar'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Navbar />
      <Header />

      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}

export default MyApp;
