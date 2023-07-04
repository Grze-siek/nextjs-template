import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Description" />
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="google" content="nositelinkssearchbox"></meta>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/"
        ></link>
        <link
          rel="sitemap"
          type="application/xml"
          title="sitemap"
          href="/sitemap.xml"
        ></link>
      </head>
      <body className="w-screen bg-gradient-to-r from-white to-stone-300">
        {children}
      </body>
    </html>
  );
}
