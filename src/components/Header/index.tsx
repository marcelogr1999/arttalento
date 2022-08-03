import { MouseEventHandler, useState } from "react";
import Logo from "../../components/Logo";
import { List, X } from "phosphor-react";
import styles from "./Header.module.scss";
import classNames from "classnames";

interface HeaderProps {
  executeServicesScroll?: MouseEventHandler<HTMLLIElement> | undefined;
  executeOurWorkScroll?: MouseEventHandler<HTMLLIElement> | undefined;
  executeContactsScroll?: MouseEventHandler<HTMLLIElement> | undefined;
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
          <Menu isMobile {...props} />
        </div>
      )}
    </div>
  );
};

interface MenuProps {
  isMobile?: boolean;
  executeServicesScroll?: MouseEventHandler<HTMLLIElement> | undefined;
  executeOurWorkScroll?: MouseEventHandler<HTMLLIElement> | undefined;
  executeContactsScroll?: MouseEventHandler<HTMLLIElement> | undefined;
}

const Menu = ({
  isMobile,
  executeServicesScroll,
  executeOurWorkScroll,
  executeContactsScroll,
}: MenuProps) => {
  const menuListClassNames = classNames(styles.menuList, {
    [styles.menuListMobile]: isMobile,
  });

  return (
    <ul className={menuListClassNames}>
      <li className={styles.menuItem} onClick={executeServicesScroll}>
        Serviços
      </li>
      <li className={styles.menuItem} onClick={executeOurWorkScroll}>
        Nosso Trabalho
      </li>
      <li className={styles.menuItem} onClick={executeContactsScroll}>
        Contato
      </li>
    </ul>
  );
};

export default Header;
