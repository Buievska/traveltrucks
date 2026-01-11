import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <h2 className={styles.subtitle}>
            You can find everything you want in our catalog
          </h2>
          <Link href="/catalog" className={styles.button}>
            View Now
          </Link>
        </div>
      </div>
    </div>
  );
}
