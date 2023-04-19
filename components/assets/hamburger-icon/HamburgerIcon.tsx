import styles from './hamburger-icon.module.scss';

interface Props {
  onClick: () => void;
  hamburgerOpen: boolean;
}

function HamburgerIcon({ onClick, hamburgerOpen }: Props) {
  return (
    <div className={`${styles.hamburgerContainer} cursor-pointer lg:hidden `}>
      <div
        onClick={onClick}
        className={`${styles.hamburgerIcon} h-9 w-9 ${
          hamburgerOpen === true && styles.open
        }`}
      >
        <div className={styles.barOne}></div>
        <div className={styles.barTwo}></div>
      </div>
    </div>
  );
}

export default HamburgerIcon;
