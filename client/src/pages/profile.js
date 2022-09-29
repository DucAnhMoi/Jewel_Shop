// Import library
import React from 'react';
// Import components/assets/sections/....
import MainLayout from 'src/layouts/MainLayout';
import { ProfileSection } from 'src/sections/profile';

export default function profile() {
  // UI
  return (
    <div className="w-full bg-bgLight dark:bg-[#303030] mt-[124px] mobile:mt-[140px] flex flex-col justify-center items-center overflow-hidden shadow-lg relative">
      <ProfileSection />
    </div>
  );
}

profile.getLayout = function getLayout(page) {
  return (
    <MainLayout title="Profile" isMode={true}>
      {page}
    </MainLayout>
  );
};

// export const getServerSideProps = async ({ query }) => {
//   const page = query.page || 1;
//   const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
//   return {
//     props: {
//       products: res.data,
//       pageCount: Math.ceil(res.data.length / 16),
//     },
//   };
// };
