'use client';
import React from 'react';
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
  Collapse,
} from '@material-tailwind/react';
import clsx from 'clsx';

import { TbMassage } from 'react-icons/tb';
import { GiHairStrands } from 'react-icons/gi';
import { RiPsychotherapyLine } from 'react-icons/ri';
import { MdSportsGymnastics } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { HiBars2 } from 'react-icons/hi2';
import { AiOutlineHome } from 'react-icons/ai';

// nav list menu
const zabiegiKosmetyczne = [
  {
    title: 'Zabiegi kosmetyczne na twarz',
    link: '/zabiegi_kosmetyczene_na_twarz',
  },
  {
    title: 'Stylizacja rzęs',
    link: '/stylizacja_rzes',
  },
  {
    title: 'Makijaz permamentny',
    link: '/makijaz_permamentny',
  },
  {
    title: 'Stylizacja paznokci',
    link: '/stylizacja_paznokci',
  },
  {
    title: 'Depilacja woskiem',
    link: '/depilacja_woskiem',
  },
];

function NavListMenu({ isNavbarTransparent }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCollapseOpen, setIsCollapseOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = zabiegiKosmetyczne.map(({ title, link }) => (
    <Typography as="a" href={link} key={title}>
      <MenuItem className="font-medium hover:bg-[#ede6dd]">
        <Typography variant="small" color="blue-gray" className="text-md">
          {title}
        </Typography>
      </MenuItem>
    </Typography>
  ));

  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggers}
              className={`hidden font-medium items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full  transition-colors hoverEffect ${
                isNavbarTransparent
                  ? 'text-white after:bg-white'
                  : 'text-blue-gray-900 after:bg-[#1a202c]'
              }`}
            >
              <RiPsychotherapyLine className="h-[18px] w-[18px]" /> Zabiegi
              kosmetyczne{' '}
              <BsChevronDown
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden min-w-fit gap-3 overflow-visible z-50 lg:flex"
        >
          <ul className="flex w-full flex-col gap-1">{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem
        onClick={() => setIsCollapseOpen((cur) => !cur)}
        className={`items-center gap-2 text-blue-gray-900 transition-colors lg:hidden ${
          isNavbarTransparent ? 'text-white' : 'text-blue-gray-900'
        }`}
      >
        <div className="flex font-medium items-center space-x-2">
          <RiPsychotherapyLine className="h-[18px] w-[18px]" />{' '}
          <p>Zabiegi kosmetyczne</p>
          <BsChevronDown
            strokeWidth={2}
            className={`h-3 w-3 transition-transform ${
              isCollapseOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        <Collapse className="lg:hidden" open={isCollapseOpen}>
          <ul className="ml-6 mt-2 flex w-full flex-col gap-1 lg:hidden">
            {renderItems}
          </ul>
        </Collapse>
      </MenuItem>
    </>
  );
}

// nav list component
const navListItems = [
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
  {
    label: 'Zajęcia ruchowe',
    icon: MdSportsGymnastics,
    link: '/zajecia_ruchowe',
  },
];

function NavList({ isNavbarTransparent }) {
  return (
    <ul className="mb-4 mt-2 flex text-lg font-medium flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem
          className={`flex min-w-full font-medium items-center gap-2 transition-colors hoverEffect ${
            isNavbarTransparent
              ? 'text-white after:bg-white'
              : 'text-blue-gray-900 after:bg-[#1a202c]'
          }`}
        >
          <AiOutlineHome />
          Home
        </MenuItem>
      </Typography>
      <NavListMenu isNavbarTransparent={isNavbarTransparent} />
      {navListItems.map(({ label, icon, link }, key) => (
        <Typography
          key={label}
          as="a"
          href={link}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem
            className={clsx(
              'flex min-w-full font-medium items-center gap-2 lg:rounded-full transition-colors hoverEffect',
              isNavbarTransparent
                ? 'text-white after:bg-white'
                : 'text-blue-gray-900 after:bg-[#1a202c]'
            )}
          >
            {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const [isNavbarTransparent, setIsNavbarTransparent] = React.useState(true);

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

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      className={`mx-auto fixed top-0 left-0 right-0 z-50 rounded-none brightness-150 shadow-none  p-3 lg:px-6 transition-colors duration-300 ease-in-out ${
        isNavbarTransparent
          ? 'bg-opacity-0 border-none text-white'
          : 'bg-white border-b shadow-sm border-gray-500 blur-none bg-opacity-100 text-blue-gray-900'
      }`}
    >
      <div className="mx-auto flex items-center justify-around">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 text-lg cursor-pointer py-1.5 font-medium"
        >
          Odnowa | studio urody & masażu
        </Typography>
        <div className="hidden lg:inline-block">
          <NavList isNavbarTransparent={isNavbarTransparent} />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <HiBars2 className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList isNavbarTransparent={isNavbarTransparent} />
      </Collapse>
    </Navbar>
  );
}
