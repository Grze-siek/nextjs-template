import '../styles/globals.css';
import Header from './header/Header';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
