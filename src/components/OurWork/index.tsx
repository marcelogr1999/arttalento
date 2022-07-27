import { works } from "./content";
import styles from "./OurWork.module.scss";
import WorkCard from "./WorkCard";
import Section from "../Section";

const OurWork = () => {
  return (
    <Section
      title="Nosso Trabalho"
      subtitle="Conheça nosso trabalho"
      description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
      isCentered
    >
      <div className={styles.ourWorkCards}>
        {works.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </div>
    </Section>
  );
};

export default OurWork;
