import { contact } from "./content";
import styles from "./Contacts.module.scss";
import Section from "../Section";
import { Envelope, MapPin, Phone } from "phosphor-react";
import { forwardRef, Ref } from "react";

// interface ContactsProps {
//   email: string;
//   location: string;
//   phone: string;
// }
// { email, location, phone }: ContactsProps

const Contacts = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.contacts}>
      <Section
        title="Contato"
        subtitle="Entre em contato"
        description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
      >
        <div className={styles.contactsInfo}>
          <div className={styles.contact}>
            <div className={styles.contactIcon}>
              <Envelope size={32} />
            </div>
            <address className={styles.contactText}>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </address>
          </div>
          <div className={styles.contact}>
            <div className={styles.contactIcon}>
              <MapPin size={32} />
            </div>
            <address className={styles.contactText}>
              <a href="https://goo.gl/maps/cxhixaPof56bPCg38">
                {contact.location}
              </a>
            </address>
          </div>
          <div className={styles.contact}>
            <div className={styles.contactIcon}>
              <Phone size={32} />
            </div>
            <address className={styles.contactText}>
              <a href="https://wa.me/5541998494501?text=Tire%20suas%20d%C3%BAvidas%20e%20fa%C3%A7a%20um%20or%C3%A7amento">
                {contact.phone}
              </a>
            </address>
          </div>
        </div>
      </Section>
    </div>
  );
});

Contacts.displayName = "Contacts";

export default Contacts;
