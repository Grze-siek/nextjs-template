import styles from './hamburger-icon.module.scss';

interface Props {
  onClick: () => void;
  hamburgerOpen: boolean;
  isNavbarTransparent: boolean;
}

function HamburgerIcon({ onClick, hamburgerOpen, isNavbarTransparent }: Props) {
  return (
    <div className={`${styles.hamburgerContainer} cursor-pointer lg:hidden `}>
      <div
        onClick={onClick}
        className={`${styles.hamburgerIcon} h-9 w-9 scale-75 ${
          hamburgerOpen === true && styles.open
        }`}
      >
        <div
          className={`${styles.barOne} transition-colors ${
            isNavbarTransparent ? 'bg-white' : 'bg-black'
          }`}
        ></div>
        <div
          className={`${styles.barTwo} transition-colors ${
            isNavbarTransparent ? 'bg-white' : 'bg-black'
          }`}
        ></div>
      </div>
    </div>
  );
}

export default HamburgerIcon;
