import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "./components/Footer/Footer";
import BackImage from "./components/BackImage/BackImage";

export default function Home() {
  return (
    <main className={styles.main}>
      <BackImage />
      <Footer />
    </main>
  );
}
