import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2022 Art & Talento. Todos os direitos reservados.
        </p>
        <p className={styles.text}>
          Desenvolvido por <strong>Marcelo Ribeiro</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
