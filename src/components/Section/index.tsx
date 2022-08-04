import classNames from "classnames";
import { forwardRef, Ref } from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  subtitle: string;
  description: string | undefined | null;
  children: React.ReactNode;
  isCentered?: boolean;
  isDivided?: boolean;
}

const Section = forwardRef(
  (
    {
      title,
      subtitle,
      description,
      children,
      isCentered,
      isDivided,
    }: SectionProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const sectionClassnames = classNames(styles.section, {
      [styles.sectionCentered]: isCentered,
    });
    const headClassnames = classNames({
      [styles.head]: isDivided,
    });

    return (
      <section ref={ref} className={sectionClassnames}>
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
  }
);

Section.displayName = "Section";

export default Section;
