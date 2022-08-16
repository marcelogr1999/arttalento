import styles from "./Services.module.scss";
import { services } from "./content";
import ServicesCard from "./ServicesCard";
import Section from "../Section";
import { forwardRef, Ref } from "react";
import { Service } from "../../graphql/generated";

const Services = forwardRef(({ text }: Service, ref: Ref<HTMLDivElement>) => (
  <Section
    ref={ref}
    title={text?.title}
    subtitle={text?.subtitle}
    description={text?.description}
    isDivided
  >
    <div className={styles.servicesCards}>
      {services.map((service) => (
        <ServicesCard key={service.title} {...service} />
      ))}
    </div>
  </Section>
));

Services.displayName = "Services";

export default Services;
