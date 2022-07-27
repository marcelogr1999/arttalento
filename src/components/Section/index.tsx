import classNames from "classnames";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
  isCentered?: boolean;
  isDivided?: boolean;
}

const Section = ({
  title,
  subtitle,
  description,
  children,
  isCentered,
  isDivided,
}: SectionProps) => {
  const sectionClassnames = classNames(styles.section, {
    [styles.sectionCentered]: isCentered,
  });
  const headClassnames = classNames({
    [styles.head]: isDivided,
  });

  return (
    <section className={sectionClassnames}>
      <div className={headClassnames}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;
