'use client';
import Header from './header/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <>
      <Header />
      <motion.main
        key={path}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
