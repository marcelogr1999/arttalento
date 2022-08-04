import Image from "next/image";
import heroImg from "../../../public/hero-img-large.png";
import styles from "./Hero.module.scss";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
}

const Hero = ({ title, description, buttonText }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroDescription}>{description}</p>
      <a
        href="https://wa.me/5541998494501?text=Tire%20suas%20d%C3%BAvidas%20e%20fa%C3%A7a%20um%20or%C3%A7amento"
        className={`button ${styles.heroButton}`}
      >
        {buttonText}
      </a>
      <Image
        src={heroImg}
        alt="Quadro de acrílicos com marcas expostas"
        layout="responsive"
        priority
      />
    </section>
  );
};

export default Hero;
