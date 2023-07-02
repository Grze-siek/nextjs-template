import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Studio Odnowa to profesjonalne miejsce, w którym możesz skorzystać z różnorodnych zabiegów kosmetycznych. Oferujemy szeroki zakres usług, w tym masaże relaksacyjne, zabiegi na twarz, fryzjerstwo, makijaż, manicure i pedicure. Nasze studio znajduje się na Bielanach Wrocławskich."
        />
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="w-screen bg-gradient-to-r from-white to-stone-300">
        {children}
      </body>
    </html>
  );
}
