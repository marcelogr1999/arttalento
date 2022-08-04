import { MouseEventHandler, useState } from "react";
import Logo from "../../components/Logo";
import { List, X } from "phosphor-react";
import styles from "./Header.module.scss";
import classNames from "classnames";

interface HeaderProps {
  executeServicesScroll: Function;
  executeOurWorkScroll: Function;
  executeContactsScroll: Function;
}

const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.mobileMenuIcon}>
          {isMenuOpen ? (
            <X size={32} onClick={handleToggleMenu} />
          ) : (
            <List size={32} onClick={handleToggleMenu} />
          )}
        </div>
        <div className={styles.webMenu}>
          <Menu {...props} />
        </div>
      </nav>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Menu isMobile {...props} closeMenu={() => setIsMenuOpen(false)} />
        </div>
      )}
    </div>
  );
};

interface MenuProps {
  isMobile?: boolean;
  executeServicesScroll: Function;
  executeOurWorkScroll: Function;
  executeContactsScroll: Function;
  closeMenu?: Function;
}

const Menu = ({
  isMobile,
  executeServicesScroll,
  executeOurWorkScroll,
  executeContactsScroll,
  closeMenu,
}: MenuProps) => {
  const menuListClassNames = classNames(styles.menuList, {
    [styles.menuListMobile]: isMobile,
  });

  const handleServicesClick = (executeScroll: Function) => {
    executeScroll();
    if (closeMenu) closeMenu();
  };

  return (
    <ul className={menuListClassNames}>
      <li
        className={styles.menuItem}
        onClick={() => handleServicesClick(executeServicesScroll)}
      >
        Serviços
      </li>
      <li
        className={styles.menuItem}
        onClick={() => handleServicesClick(executeOurWorkScroll)}
      >
        Nosso Trabalho
      </li>
      <li
        className={styles.menuItem}
        onClick={() => handleServicesClick(executeContactsScroll)}
      >
        Contato
      </li>
    </ul>
  );
};

export default Header;
