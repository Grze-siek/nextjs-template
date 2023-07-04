import { Home as HomeType } from '../../typings';
// import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.cli';
import PreviewSuspense from '../../components/Preview/PreviewSuspense';
import PreviewHomePage from '../../components/Preview/PreviewHomePage';

export const metadata = {
  title: 'Nextjs-template',
};

const queryHome = groq`
*[_type == 'home'][0] {
  ...,
}
`;

async function Home() {
  // if (previewData()) {
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <div
  //           role="status"
  //           className="inset-0 bg-slate-300 absolute z-[100] flex items-center justify-center"
  //         >
  //           <p className="text-center text-lg z-[110] animate-pulse font-semibold text-orange-400">
  //             Loading preview data...
  //           </p>
  //         </div>
  //       }
  //     >
  //       <PreviewHomePage queryHome={queryHome} />
  //     </PreviewSuspense>
  //   );
  // }

  const homeData: HomeType = await client.fetch(queryHome);
  return <></>;
}

export default Home;
