import Image from "next/image";
import Head from "next/head";
import Spline from '@splinetool/react-spline';
import styles from '@/styles/Home.module.css'

// Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Details from "./components/Details";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <NavBar />
      <Welcome />
      <Features />
      <Plans />
      <Details />
      <Newsletter />
      <Footer />
    </main>
  );
}
