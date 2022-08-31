import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
// import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
import Footer from '../components/common/layout/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
