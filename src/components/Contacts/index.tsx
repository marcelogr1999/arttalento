import styles from "./Contacts.module.scss";
import Section from "../Section";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "phosphor-react";
import { forwardRef, Ref } from "react";
import { Contact } from "../../graphql/generated";

const Contacts = forwardRef(
  ({ text, email, phone }: Contact, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.contacts}>
        <Section
          title={text?.title}
          subtitle={text?.subtitle}
        >
          <div className={styles.contactInfo}>
            <div className={styles.contact}>
              <h3 className={styles.contactTitle}>Redes Sociais</h3>
              <div className={styles.contactButtons}>
                <a
                  className={`${styles.contactButton} ${styles.instagram}`}
                  href="https://www.instagram.com/artetalento.cwb/"
                >
                  <div className={styles.contactIcon}>
                    <InstagramLogo size={32} weight="fill" />
                  </div>
                </a>
                <a
                  className={`${styles.contactButton} ${styles.facebook}`}
                  href="https://www.facebook.com/artetalentocuritiba"
                >
                  <div className={styles.contactIcon}>
                    <FacebookLogo size={32} weight="fill" />
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.contact}>
              <h3 className={styles.contactTitle}>Envie uma mensagem</h3>
              <div className={styles.contactButtons}>
                <a
                  className={`${styles.contactButton} ${styles.phone}`}
                  href="https://wa.me/5541998494501?text=Tire%20suas%20d%C3%BAvidas%20e%20fa%C3%A7a%20um%20or%C3%A7amento"
                >
                  <div className={styles.contactIcon}>
                    <WhatsappLogo size={32} />
                  </div>
                  <p className={styles.contactText}>{phone}</p>
                </a>
                <a
                  className={`${styles.contactButton} ${styles.email}`}
                  href={`mailto:${email}`}
                >
                  <div className={styles.contactIcon}>
                    <Envelope size={32} />
                  </div>
                  <p className={styles.contactText}>{email}</p>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
);

Contacts.displayName = "Contacts";

export default Contacts;
