import Image from "next/image";
import heroImg from "../../../public/hero-img.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Faça seu projeto <br /> tornar-se realidade
      </h1>
      <p className={styles.heroDescription}>
        A Empresa Art&Talento Comunicação Visual conta com profissionais
        experientes que buscam qualidade, e a melhor solução na execução do seu
        projeto.
      </p>
      <a
        href="https://wa.me/5541998494501?text=Tire%20suas%20d%C3%BAvidas%20e%20fa%C3%A7a%20um%20or%C3%A7amento"
        className={`button ${styles.heroButton}`}
      >
        Faça seu orçamento
      </a>
      <Image src={heroImg} alt="Quadro de acrílicos com marcas expostas" />
    </section>
  );
};

export default Hero;
