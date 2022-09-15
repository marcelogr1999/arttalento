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
          <div className={styles.contactsInfo}>
            <a href={`mailto:${email}`} className={styles.contact}>
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
                <MapPin size={32} weight="fill" />
              </div>
              <address className={styles.contactText}>{address}</address>
            </a>
            <a
              href="https://wa.me/5541998494501?text=Tire%20suas%20d%C3%BAvidas%20e%20fa%C3%A7a%20um%20or%C3%A7amento"
              className={styles.contact}
            >
              <div className={styles.contactIcon}>
                <Phone size={32} weight="fill" />
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
