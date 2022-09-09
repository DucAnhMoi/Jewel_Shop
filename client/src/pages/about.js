// Import library
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';

const about = () => {
  return <div>about</div>;
};

export default about;

about.getLayout = function getLayout(page) {
  return <MainLayout title="About">{page}</MainLayout>;
};
