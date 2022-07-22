import Image from "next/image";
import styles from "./WorkCard.module.scss";
import workImg from "../../../../public/work-img-large.png";

interface WorkCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const WorkCard = ({ title, subtitle, description }: WorkCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={workImg}
        layout="fixed"
        alt="Troféu em acrílico escrito ABC"
      />
      <h2 className={styles.cardTitle}>{title}</h2>
      <h3 className={styles.cardSubtitle}>{subtitle}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default WorkCard;
