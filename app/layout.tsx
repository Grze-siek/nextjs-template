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
      <body className="w-screen bg-gradient-to-r from-white to-stone-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
