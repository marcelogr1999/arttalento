import styles from "./OurWork.module.scss";
import WorkCard from "./WorkCard";
import Section from "../Section";
import { Job } from "../../graphql/generated";
import { forwardRef } from "react";

interface OurWorkProps {
  jobs: Job[];
}

const OurWork = forwardRef(({ jobs }: OurWorkProps, ref) => {
  return (
    <Section
      ref={ref}
      title="Nosso Trabalho"
      subtitle="Conheça nosso trabalho"
      description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
      isCentered
    >
      <div className={styles.ourWorkCards}>
        {jobs.map((job) => (
          <>
            <WorkCard key={`1${job.id}`} {...job} />
            <WorkCard key={`2${job.id}`} {...job} />
            <WorkCard key={`3${job.id}`} {...job} />
            <WorkCard key={`4${job.id}`} {...job} />
            <WorkCard key={`5${job.id}`} {...job} />
            <WorkCard key={`6${job.id}`} {...job} />
          </>
        ))}
      </div>
    </Section>
  );
});

OurWork.displayName = "Our Work";

export default OurWork;
