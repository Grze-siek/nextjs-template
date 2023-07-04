import { DefaultDocumentNodeResolver } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

const matchPath = (schemaType: string) => {
  switch (schemaType) {
    case 'home':
      return `${
        process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
      }/api/previewHome`;
    // case 'beauty':
    //   return `${
    //     process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
    //   }/api/previewBeauty`;
    // case 'manicure':
    //   return `${
    //     process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
    //   }/api/previewManicure`;
    // case 'massage':
    //   return `${
    //     process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
    //   }/api/previewMassage`;
    // case 'barber':
    //   return `${
    //     process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
    //   }/api/previewBarber`;
    default:
      return `${
        process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
      }/api/previewHome`;
  }
};

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  return S.document().views([
    S.view.form(),

    S.view
      .component(Iframe)
      .options({
        url: matchPath(schemaType),
        defaultSize: 'desktop',
        reload: {
          button: true,
        },
      })
      .title('Preview'),
  ]);
};
