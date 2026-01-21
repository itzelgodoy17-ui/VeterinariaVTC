import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Bienvenido a VTC: Tu aliado en el cuidado animal</h1>
        <span className={styles.parf}>En VTC, entendemos que tu mascota no es solo un animal, es un miembro fundamental de tu familia. Por eso, nos dedicamos a ofrecer una atención médica integral basada en la excelencia, la ética y, sobre todo, el amor por los animales.</span>
      </main>
    </div>
  );
}

export default Home;
