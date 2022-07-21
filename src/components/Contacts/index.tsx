import { contact } from "./content";
import styles from "./Contacts.module.scss";
import Section from "../Section";
import { Envelope, MapPin, Phone } from "phosphor-react";

// interface ContactsProps {
//   email: string;
//   location: string;
//   phone: string;
// }
// { email, location, phone }: ContactsProps

const Contacts = () => {
  return (
    <Section
      title="Contato"
      subtitle="Entre em contato"
      description="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
    >
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <div className={styles.contactIcon}>
            <Envelope size={32} />
          </div>
          <div className={styles.contactText}>{contact.email}</div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactIcon}>
            <MapPin size={32} />
          </div>
          <div className={styles.contactText}>{contact.location}</div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactIcon}>
            <Phone size={32} />
          </div>
          <div className={styles.contactText}>{contact.phone}</div>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
