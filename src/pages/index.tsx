import Image from "next/image";
import Head from "next/head";
import Spline from '@splinetool/react-spline';
import styles from '@/styles/Home.module.css'

// Components
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Head>
        <title>Amplify</title>
        <link rel="icon" href="/images/logo01.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <Welcome />
      <Features />
      <div className={styles.musicNote}>
        {/* <Spline scene="https://prod.spline.design/s8GjAyUMy0tdhdVX/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/lWbXBjThwpaYtDrU/scene.splinecode" /> */}
        {/* <p>Discover Vibrant Public Art in Vancouver</p> */}
      </div>
    </main>
  );
}
