import styles from "./Map.module.scss";
const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.557378562452!2d-49.294340984387524!3d-25.486451241367746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce350f17745bb%3A0x142e436e41669939!2sArt%20e%20Talento%20-%20Impress%C3%A3o%20Digital%20e%20Corte%20laser!5e0!3m2!1spt-BR!2sbr!4v1660672366654!5m2!1spt-BR!2sbr"
    className={styles.map}
    loading="lazy"
    // referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
);

export default Map;
