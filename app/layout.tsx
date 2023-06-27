import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen bg-gradient-to-r from-white to-stone-300">
        {children}
      </body>
    </html>
  );
}
