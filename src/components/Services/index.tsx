import styles from "./Services.module.scss";
import { services } from "./content";
import ServicesCard from "./ServicesCard";
import Section from "../Section";

const Services = () => {
  return (
    <Section
      title="Serviços"
      subtitle=" Oferecemos uma grande variedade de serviços"
      description="A Empresa entrega projetos em diferentes ramos da comunicação visual,
        indo de cortes a laser a impressão digital."
      isDivided
    >
      <div className={styles.servicesCards}>
        {services.map((service) => (
          <ServicesCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
