import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <span>Hola mundo</span>

      <Link href={'/about'}> About Page</Link>
    </main>
  );
}
