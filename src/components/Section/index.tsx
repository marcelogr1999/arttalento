import classNames from "classnames";
import { ForwardedRef, forwardRef, MutableRefObject } from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
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
    ref
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

// const Section = ({
//   title,
//   subtitle,
//   description,
//   children,
//   isCentered,
//   isDivided,
// }: SectionProps) => {
//   const sectionClassnames = classNames(styles.section, {
//     [styles.sectionCentered]: isCentered,
//   });
//   const headClassnames = classNames({
//     [styles.head]: isDivided,
//   });

//   return (
//     <section className={sectionClassnames}>
//       <div className={headClassnames}>
//         <div>
//           <h2 className={styles.title}>{title}</h2>
//           <h3 className={styles.subtitle}>{subtitle}</h3>
//         </div>
//         <p className={styles.description}>{description}</p>
//       </div>
//       {children}
//     </section>
//   );
// };

export default Section;
