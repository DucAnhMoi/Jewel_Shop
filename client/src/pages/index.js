// Import library
import React from 'react';
import { Button } from 'src/components';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';

export default function home() {
  // UI
  return (
    <div>
      <Button to="/login">Login</Button>
    </div>
  );
}

home.getLayout = function getLayout(page) {
  return <MainLayout title="Home">{page}</MainLayout>;
};
