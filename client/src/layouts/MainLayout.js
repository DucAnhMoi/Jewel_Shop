// Import library
import { createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react';
import { Button } from 'src/components';
import { DarkIcon, LeftArrowIcon } from 'src/components/icons/Icons';
// Import components/assets/sections/....
import { Header, Footer } from 'src/components/layouts';

const MainLayout = ({
  children,
  title,
  isHeader = true,
  isFooter = true,
  isMode = false,
  isBack = false,
}) => {
  // Theme
  const [dark, setDark] = useState(true);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? 'light' : 'dark',
        },
      }),
    [dark],
  );
  // Switch Theme
  const handleSwitch = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  // Ui
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col justify-center items-center bg-bgLight dark:bg-[#303030] overflow-hidden">
        <Head>
          <title>{`${title} | Jewels`}</title>
        </Head>
        {isHeader && <Header />}
        {children}
        {isFooter && <Footer />}
        {/* Button Switch Mode */}
        {isMode && (
          <Button
            primary
            className="fixed flex items-center px-[16px] py-[8px] right-[2%] bottom-[2%] fill-white hover:fill-back"
            leftIcon={<DarkIcon width={24} height={24} />}
            styleLeftIcon="mr-[8px]"
            onClick={handleSwitch}
          >
            Switch
          </Button>
        )}
        {/* Button Back */}
        {isBack && (
          <Button
            primary
            className="fixed flex items-center px-[16px] py-[8px] left-[2%] bottom-[2%]"
            leftIcon={<LeftArrowIcon width={24} height={24} />}
            styleLeftIcon="mr-[8px]"
            to="/"
          >
            Back
          </Button>
        )}
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
