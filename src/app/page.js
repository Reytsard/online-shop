"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "../styles/main.css";
import Link from "next/link";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faS } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitch,
  faWhatsapp,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

library.add(faS, faFacebook, faTwitch, faWhatsapp, faInstagram, faTiktok);

export default function Home() {
  useEffect(() => {
    redirect("/folder1/page1");
  }, [redirect]);
  return (
    <main className={styles.main}>
      <h1>Redirecting...</h1>
    </main>
  );
}
