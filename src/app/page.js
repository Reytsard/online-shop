import Image from "next/image";
import styles from "./page.module.css";
import "../styles/main.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={"/folder1/page1"}>Products</Link>
    </main>
  );
}
