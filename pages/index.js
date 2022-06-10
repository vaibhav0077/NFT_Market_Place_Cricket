import Head from "next/head";
import Image from "next/image";
import Authentication from "./Authetication/Authentication";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Authentication />
    </div>
  );
}
