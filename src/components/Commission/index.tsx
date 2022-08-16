import { WhatsappLogo } from "phosphor-react";
import styles from "./Commission.module.scss";

const Commission = () => {
  return (
    <a
      href="https://wa.me/5541998494501?text=Tire%20suas%20d%C3%BAvidas%20e%20fa%C3%A7a%20um%20or%C3%A7amento"
      className={styles.commission}
    >
      <WhatsappLogo className={styles.icon} size={32} />
      <span className={styles.text}>Solicite seu orçamento</span>
    </a>
  );
};

export default Commission;
