// Import library
import React, { useState } from 'react';
import { useEffect } from 'react';
// Import components/assets/sections/....
import { Provider } from 'react-redux';
import 'src/styles/globals.css';
import { store } from 'src/redux/store';
import ToastContainer from 'src/components/toast/ToastContainer';
import { useRouter } from 'next/router';
import { Progress } from 'src/components/Progress';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // Animate when switch router
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Progress isAnimating={isAnimating} />
          <Component {...pageProps} />
          <ToastContainer />
        </>,
      )}
    </Provider>
  );
}

export default MyApp;
