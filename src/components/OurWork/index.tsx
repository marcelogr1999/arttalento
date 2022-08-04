import styles from "./OurWork.module.scss";
import WorkCard from "./WorkCard";
import Section from "../Section";
import { Job, OurWork } from "../../graphql/generated";
import { forwardRef, Ref } from "react";

const OurWork = forwardRef(
  ({ jobs, text }: OurWork, ref: Ref<HTMLDivElement>) => {
    return (
      <Section
        ref={ref}
        title={text?.title}
        subtitle={text?.subtitle}
        description={text?.description}
        isCentered
      >
        <div className={styles.ourWorkCards}>
          {jobs.map((job) => (
            <WorkCard key={job.id} {...job} />
          ))}
        </div>
      </Section>
    );
  }
);

OurWork.displayName = "Our Work";

export default OurWork;
