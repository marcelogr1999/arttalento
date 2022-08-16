import { contact } from "./content";
import styles from "./Contacts.module.scss";
import Section from "../Section";
import { Envelope, MapPin, Phone } from "phosphor-react";
import { forwardRef, Ref } from "react";
import { Contact } from "../../graphql/generated";

const Contacts = forwardRef(
  ({ text, address, email, phone }: Contact, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.contacts}>
        <Section
          title={text?.title}
          subtitle={text?.subtitle}
          description={text?.description}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.557378562452!2d-49.294340984387524!3d-25.486451241367746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce350f17745bb%3A0x142e436e41669939!2sArt%20e%20Talento%20-%20Impress%C3%A3o%20Digital%20e%20Corte%20laser!5e0!3m2!1spt-BR!2sbr!4v1660672366654!5m2!1spt-BR!2sbr"
            className={styles.map}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={styles.contactsInfo}>
            <a href={`mailto:${contact.email}`} className={styles.contact}>
              <div className={styles.contactIcon}>
                <Envelope size={32} />
              </div>
              <address className={styles.contactText}>{email}</address>
            </a>
            <a
              href="https://goo.gl/maps/cxhixaPof56bPCg38"
              className={styles.contact}
            >
              <div className={styles.contactIcon}>
                <MapPin size={32} />
              </div>
              <address className={styles.contactText}>{address}</address>
            </a>
            <a
              href="https://wa.me/5541998494501?text=Tire%20suas%20d%C3%BAvidas%20e%20fa%C3%A7a%20um%20or%C3%A7amento"
              className={styles.contact}
            >
              <div className={styles.contactIcon}>
                <Phone size={32} />
              </div>
              <address className={styles.contactText}>{phone}</address>
            </a>
          </div>
        </Section>
      </div>
    );
  }
);

Contacts.displayName = "Contacts";

export default Contacts;
