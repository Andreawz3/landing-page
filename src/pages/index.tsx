import Image from "next/image";
import Spline from '@splinetool/react-spline';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.musicNote}>
        {/* <Spline scene="https://prod.spline.design/s8GjAyUMy0tdhdVX/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/lWbXBjThwpaYtDrU/scene.splinecode" /> */}
        <p>Discover Vibrant Public Art in Vancouver</p>
      </div>
    </main>
  );
}
