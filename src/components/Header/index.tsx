import { useState } from "react";
import Logo from "../../components/Logo";
import { List, X } from "phosphor-react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <div
          className={styles.menuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X color="#151411" weight="fill" size={32} />
          ) : (
            <List color="#151411" weight="fill" size={32} />
          )}
        </div>
        {/* <ul className={styles.menuList}>
          <li className={styles.menuItem}>Serviços</li>
          <li className={styles.menuItem}>Nosso Trabalho</li>
          <li className={styles.menuItem}>Contato</li>
        </ul> */}
      </nav>
      {/* {isMenuOpen && (
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>Serviços</li>
          <li className={styles.menuItem}>Nosso Trabalho</li>
          <li className={styles.menuItem}>Contato</li>
        </ul>
      )} */}
    </div>
  );
};

export default Header;
