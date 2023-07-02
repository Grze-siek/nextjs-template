'use client';
import React, { useState } from 'react';
import { Navbar, MenuItem, Collapse } from '@material-tailwind/react';
import clsx from 'clsx';

import { TbMassage } from 'react-icons/tb';
import { GiHairStrands, GiFingernail } from 'react-icons/gi';
import { RiPsychotherapyLine } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimateSharedLayout, motion } from 'framer-motion';
import HamburgerIcon from '../assets/hamburger-icon/HamburgerIcon';

// // nav list menu
// const zabiegiKosmetyczne = [
//   {
//     title: 'Zabiegi kosmetyczne na twarz',
//     link: '/zabiegi_kosmetyczne/na_twarz',
//   },
//   {
//     title: 'Stylizacja rzęs',
//     link: '/zabiegi_kosmetyczne/stylizacja_rzes',
//   },
//   {
//     title: 'Makijaz permamentny',
//     link: '/zabiegi_kosmetyczne/makijaz_permamentny',
//   },
//   {
//     title: 'Stylizacja paznokci',
//     link: '/zabiegi_kosmetyczne/stylizacja_paznokci',
//   },
//   {
//     title: 'Depilacja woskiem',
//     link: '/zabiegi_kosmetyczne/depilacja_woskiem',
//   },
// ];

// function NavListMenu({ isNavbarTransparent, pathMatchRoute }) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isCollapseOpen, setIsCollapseOpen] = React.useState(false);
//   const router = useRouter();

//   const triggers = {
//     onMouseEnter: () => setIsMenuOpen(true),
//     onMouseLeave: () => setIsMenuOpen(false),
//   };

//   const navItemClick = (route) => {
//     router.push(route);
//   };

//   const renderItems = zabiegiKosmetyczne.map(({ title, link }) => (
//     <li
//       key={title}
//       className={`font-medium cursor-pointer transition-colors group`}
//       onClick={() =>
//         !pathMatchRoute(`${link}`) ? navItemClick(`${link}`) : ''
//       }
//     >
//       <Typography
//         as="div"
//         variant="small"
//         color="blue-gray"
//         className="text-md font-normal px-4 py-2"
//       >
//         <p className="flex items-center transition-all space-x-2">
//           <BsHeartArrow
//             className={`duration-300 transition-opacity group-hover:inline-block group-hover:opacity-100 ${
//               pathMatchRoute(`${link}`)
//                 ? 'inline-block opacity-100'
//                 : 'hidden opacity-0'
//             }`}
//           />
//           <span>{title}</span>
//         </p>
//       </Typography>
//     </li>
//   ));

//   return (
//     <>
//       <Menu open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-normal">
//             <MenuItem
//               {...triggers}
//               className={`hidden font-medium items-center gap-1 text-blue-gray-900 lg:flex lg:rounded-full  transition-colors hoverEffect ${
//                 pathMatchRoute(/^\/zabiegi_kosmetyczne\//)
//                   ? 'text-darker-color font-semibold after:bg-darker-color after:h-[2px] after:w-[100%]'
//                   : isNavbarTransparent
//                   ? 'text-white after:bg-white'
//                   : 'text-blue-gray-900 after:bg-[#1a202c]'
//               }`}
//             >
//               <RiPsychotherapyLine className="h-[18px] w-[18px]" /> Zabiegi
//               kosmetyczne{' '}
//               <BsChevronDown
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${
//                   isMenuOpen && 'rotate-180'
//                 }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList
//           {...triggers}
//           className="hidden w-64 overflow-visible z-50 p-0 focuse:outline-none lg:flex shadow-md"
//         >
//           <ul className="flex w-full flex-col">{renderItems}</ul>
//         </MenuList>
//       </Menu>

//       <MenuItem
//         onClick={() => setIsCollapseOpen((cur) => !cur)}
//         className={`items-center text-blue-gray-900 max-w-fit transition-colors lg:hidden`}
//       >
//         <div
//           className={`flex font-medium w-fit hoverEffect items-center gap-1 ${
//             pathMatchRoute(/^\/zabiegi_kosmetyczne\//)
//               ? 'text-darker-color font-semibold after:bg-darker-color after:h-[2px] after:w-[100%]'
//               : isNavbarTransparent
//               ? 'text-white after:bg-white'
//               : 'text-blue-gray-900 after:bg-[#1a202c]'
//           }`}
//         >
//           <RiPsychotherapyLine className="h-[18px] w-[18px]" />{' '}
//           <p className="text-[14px]">Zabiegi kosmetyczne</p>
//           <BsChevronDown
//             strokeWidth={2}
//             className={`h-3 w-3 transition-transform ${
//               isCollapseOpen ? 'rotate-180' : ''
//             }`}
//           />
//         </div>
//         <Collapse className="lg:hidden" open={isCollapseOpen}>
//           <ul className="ml-6 mt-2 text-[14px] flex w-full flex-col lg:hidden">
//             {renderItems}
//           </ul>
//         </Collapse>
//       </MenuItem>
//     </>
//   );
// }

// nav list component
const navListItems = [
  {
    label: 'Home',
    icon: AiFillHome,
    link: '/',
  },
  {
    label: 'Zabiegi kosmetyczne',
    icon: RiPsychotherapyLine,
    link: '/zabiegi_kosmetyczne',
  },
  {
    label: 'Manicure & pedicure',
    icon: GiFingernail,
    link: '/manicure&pedicure',
  },
  {
    label: 'Masaż',
    icon: TbMassage,
    link: '/masaz',
  },
  {
    label: 'Fryzjer',
    icon: GiHairStrands,
    link: '/fryzjer',
  },
];

function NavList({ isNavbarTransparent, pathMatchRoute }) {
  return (
    <AnimateSharedLayout>
      <ul className="my-4 flex text-lg font-medium flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label, icon, link }) => (
          <Link
            href={link}
            key={link}
            className="font-normal text-base max-w-fit"
          >
            <MenuItem
              className={clsx(
                'flex min-w-full font-medium items-center gap-1 lg:rounded-full transition-colors hoverEffect',
                pathMatchRoute(link)
                  ? 'text-darker-color font-semibold'
                  : isNavbarTransparent
                  ? 'text-white after:bg-white'
                  : 'text-blue-gray-900 after:bg-[#1a202c]'
              )}
            >
              <div className="flex gap-1 items-center relative">
                {pathMatchRoute(link) && (
                  <motion.span
                    layoutId="upperline"
                    className="absolute rounded-xl -top-2 left-0 block h-[2px] w-full bg-darker-color"
                  />
                )}
                {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
                {label}
              </div>
            </MenuItem>
          </Link>
        ))}
      </ul>
    </AnimateSharedLayout>
  );
}

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  const pathMatchRoute = (route) => {
    const pathname = usePathname();
    if (pathname !== null) {
      if (typeof route === 'string') {
        const fixedRoute = route.replace(/ /g, '%20');
        return pathname === fixedRoute;
      } else {
        return route.test(pathname);
      }
    }
    return false;
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isTransparent = scrollTop === 0;
      setIsNavbarTransparent(isTransparent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // React.useEffect(() => {
  //   window.addEventListener(
  //     'resize',
  //     () => window.innerWidth >= 960 && setIsNavOpen(false)
  //   );
  // }, []);

  const path = usePathname();
  React.useEffect(() => {
    setIsNavOpen(false);
  }, [path]);

  const pageTitle = 'Odnowa | studio urody & masażu';

  return (
    <Navbar
      className={`mx-auto fixed top-0 left-0 right-0 z-[100] rounded-none brightness-150 shadow-none p-2 md:p-3 lg:px-6 transition-colors duration-300 ease-in-out ${
        isNavbarTransparent
          ? 'bg-opacity-0 border-none text-white'
          : 'bg-white border-b shadow-sm border-gray-500 blur-none bg-opacity-100 text-blue-gray-900'
      }`}
    >
      <div className="mx-auto flex items-center justify-around">
        <Link
          href="/"
          className="mr-4 ml-2 text-base md:text-lg cursor-pointer py-1.5 font-medium"
        >
          <motion.p variants={sentence} initial="hidden" animate="visible">
            {pageTitle.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.p>
        </Link>
        <div className="hidden lg:inline-block">
          <NavList
            isNavbarTransparent={isNavbarTransparent}
            pathMatchRoute={pathMatchRoute}
          />
        </div>
        <div
          className={`ml-auto bg-black/50 p-2 z-[60] lg:hidden ${
            isNavbarTransparent ? 'bg-black/50' : 'bg-[#bcaaa4]'
          }`}
        >
          <HamburgerIcon
            onClick={toggleIsNavOpen}
            hamburgerOpen={isNavOpen}
            isNavbarTransparent={isNavbarTransparent}
          />
        </div>
      </div>
      <Collapse
        open={isNavOpen}
        exit={{ height: 0, duration: 0.4, ease: 'easeIn' }}
        className={`overflow-scroll pl-4 transition-colors ${
          isNavbarTransparent ? 'bg-black/70 backdrop-blur-sm' : 'bg-white/70'
        }`}
      >
        <NavList
          isNavbarTransparent={isNavbarTransparent}
          pathMatchRoute={pathMatchRoute}
        />
      </Collapse>
    </Navbar>
  );
}
