'use client';
import React, { useRef, useState } from 'react';
import styles from './header.module.scss';
import cx from 'classnames';
import HamburgerIcon from '../assets/hamburger-icon/HamburgerIcon';
import { BsHandbag } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Search from '../Search';

const navListItems = [
  {
    label: 'Masaż',
    // icon: TbMassage,
    link: '/masaz',
  },
  {
    label: 'Fryzjer',
    // icon: GiHairStrands,
    link: '/fryzjer',
  },
  {
    label: 'Zajęcia ruchowe',
    // icon: MdSportsGymnastics,
    link: '/zajecia_ruchowe',
  },
];

function HeaderClient() {
  const router = useRouter();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const hamburgerClick = (): void => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const dropdown = useRef<any>();

  const handleDropdownLabelClick = (): void => {
    if (null !== dropdown.current) {
      dropdown.current.classList.toggle('selected');
    }
  };

  const navItemClick = (route: string) => {
    router.push(route);
    setTimeout(() => {
      hamburgerClick();
    }, 200);
  };

  const pathMatchRoute = (route: string | RegExp) => {
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

  return (
    <header
      className={cx({
        ['absolute bg-transparent top-0 left-0 z-20 font-normal']:
          pathMatchRoute('/'),
        ['bg-light-color font-medium']: !pathMatchRoute('/'),
        ['w-full']: true,
      })}
    >
      <div>
        <nav
          className={`${styles.navbar} relative container h-full lg:mx-auto flex py-5 lg:py-3 w-full items-center px-4 lg:px-0 text-lg border-b border-[#B91C1C] max-w-full xl:max-w-6xl lg:max-w-5xl justify-between`}
        >
          <HamburgerIcon
            onClick={hamburgerClick}
            hamburgerOpen={hamburgerOpen}
          />
          <div className="hidden sm:flex justify-center flex-1 lg:flex-none">
            <Link href="/">
              <h1 className="lg:text-left lg:max-w-max font-semibold">
                Miso - Beauty Clinic
              </h1>
            </Link>
          </div>
          <Link
            className="sm:hidden absolute left-1/2 -translate-x-1/2 text-center"
            href="/"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={110}
              height={110}
              className=""
            />
          </Link>

          <div className="lg:flex-1">
            <div
              className={cx({
                [`${styles.nav} flex w-full lg:w-auto justify-center items-center`]:
                  true,
                [styles.expanded]: hamburgerOpen,
              })}
            >
              <ul
                className={`${styles.navItems}
              w-full
              absolute
              md:relative
              justify-center
              items-center  
              lg:mb-0
              lg:flex
              lg:pt-0
              z-50
              
              `}
              >
                <li
                  className={cx({
                    [`${styles.listItem}`]: true,
                    // [`${styles.active}`]: pathMatchRoute('/'),
                  })}
                  onClick={() => navItemClick('/')}
                >
                  <label
                    className={`text-lg ${
                      !pathMatchRoute('/') &&
                      'text-gray-500 hover:text-black cursor-pointer'
                    } ${!!pathMatchRoute('/') && 'text-[#B91C1C]'}`}
                  >
                    Home
                  </label>
                </li>
                <li
                  className={cx({
                    [`${styles.listItem}`]: true,
                    [`${styles.active}`]: pathMatchRoute('/about'),
                  })}
                  onClick={() => navItemClick('/about')}
                >
                  <label
                    className={`text-lg ${
                      !pathMatchRoute('/about') &&
                      'text-gray-500 hover:text-black cursor-pointer'
                    } ${!!pathMatchRoute('/') && 'text-[#B91C1C]'}`}
                  >
                    O nas
                  </label>
                </li>
                <li
                  ref={dropdown}
                  className={cx({
                    [`${styles.listItem} listItemWithDropdown`]: true,
                    [`${styles.active}`]: pathMatchRoute('/product'),
                    [`${styles.hasDropdown}`]: true,
                  })}
                >
                  <label
                    htmlFor="drop-1"
                    onClick={handleDropdownLabelClick}
                    className={`flex space-x-2 items-center text-lg cursor-pointer ${
                      !pathMatchRoute(/^\/product\//)
                        ? 'text-gray-500 hover:text-black'
                        : 'text-[#B91C1C]'
                    }`}
                  >
                    Usługi <MdKeyboardArrowDown />
                  </label>
                  <input
                    type="checkbox"
                    id="drop-1"
                    className={styles.dropCheckbox}
                  />
                  <ul
                    className={cx({
                      [`${styles.submenu} shadow-md`]: true,
                    })}
                  >
                    {navListItems.length > 0 &&
                      navListItems.map(({ label, link }) => (
                        <li
                          key={label}
                          className={cx([
                            `${styles.menuLink} active:text-[#B91C1C] ${
                              !pathMatchRoute(`${link}`) &&
                              'text-gray-500 hover:text-black hover:bg-[#f5ebe0] cursor-pointer'
                            } ${
                              !!pathMatchRoute(`${link}`) &&
                              'text-[#B91C1C] bg-[#f5ebe0]'
                            }`,
                          ])}
                          onClick={() => navItemClick(`${link}`)}
                        >
                          {label}
                        </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Search />
            <div className="snipcart-checkout flex items-center space-x-1 cursor-pointer group">
              <BsHandbag className="h-5 w-5 transition ease-in-out group-hover:text-black group-hover:scale-110" />
              {/* <span
                className="snipcart-items-count text-[#B91C1C] animate-pulse"
                suppressHydrationWarning
              ></span> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderClient;
