import Image from "next/image";
import styles from "./page.module.css";
import "../styles/main.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/products/productPage">
        <h1>Products</h1>
      </a>
    </main>
  );
}
