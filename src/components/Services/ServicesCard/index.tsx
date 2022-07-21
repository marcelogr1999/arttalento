import styles from "./ServicesCard.module.scss";

interface ServicesCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServicesCard = ({ title, icon, description }: ServicesCardProps) => {
  return (
    <div className={styles.servicesCard}>
      <div className={styles.servicesCardIcon}>{icon}</div>
      <h2 className={styles.servicesCardTitle}>{title}</h2>
      <p className={styles.servicesCardDescription}>{description}</p>
    </div>
  );
};

export default ServicesCard;
