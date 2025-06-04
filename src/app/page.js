
import '@/styles/global.css';


import HomeClient from './homeClient';
import Loader from '@/components/loader';

// export const metadata = {
//   title: "home",
//   description: "pageMeta.home.description",
//   alternates: {
//     canonical: "pageMeta.home.link",
//   },
// };


export default function Home() {
  return (
    <>
      {/* Inject JSON-LD in <head> using next/script */}
     

      <HomeClient />
    </>
  );
}
