import Logo from "../../components/Logo";
import { List, X } from "phosphor-react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <Logo />
      <List color="#151411" weight="fill" size={32} />
      {/* <X color="#151411" weight="fill" size={32} /> */}
    </nav>
  );
};

export default Header;
