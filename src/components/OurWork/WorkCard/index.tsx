import Image from "next/image";
import styles from "./WorkCard.module.scss";
import { Job } from "../../../graphql/generated";

const WorkCard = ({ title, subtitle, description, image }: Job) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {image.width && image.height && (
          <Image
            src={image.url}
            layout="fill"
            alt="Troféu em acrílico escrito ABC"
          />
        )}
      </div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <h3 className={styles.cardSubtitle}>{subtitle}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default WorkCard;
