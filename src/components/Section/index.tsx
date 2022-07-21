import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
}

const Section = ({ title, subtitle, description, children }: SectionProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <h3 className={styles.sectionSubtitle}>{subtitle}</h3>
      <p className={styles.sectionDescription}>{description}</p>
      {children}
    </section>
  );
};

export default Section;
