import Image from "next/image";
import Spline from "@splinetool/react-spline";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <div className={styles.container}> 
      <Image 
        className={styles.backgroundImg}
        src='/images/featuresBackground.png'
        width={900}
        height={600}
        alt="background"
      />
      <div className={styles.infoContainer}>
        <div>
          <p className={styles.title}>Explore Canadian Public Art and Music with <span style={{color: "var(--main-color)"}}>Amplify</span></p>
          <p className={styles.description}>
            Your gateway to experiencing the vibrant world of Canadian 
            multimedia art! Join us on a journey of discovery and creativity. 
            Start exploring now!
          </p>
          <div className={styles.featuresDetails}>
            <Spline style={{width: "70px"}} scene="https://prod.spline.design/Gn0Xv4kcZhjR2dbz/scene.splinecode" />
            <p>Enjoy a unique combination of visual art and music simultaneously</p>
          </div>
          <div className={styles.featuresDetails}>
            <Spline style={{width: "70px"}} scene="https://prod.spline.design/lXJ0ymBBemRgJ-AK/scene.splinecode" />
            <p>Learn more about Canadian music statistics</p>
          </div>
          <div className={styles.featuresDetails}>
            <Spline style={{width: "70px"}} scene="https://prod.spline.design/peIpMssEWGHwokJm/scene.splinecode" />
            <p>Creating a truly unique and immersive cultural experience</p>
          </div>
        </div>
        <Image 
          src='/images/phone-display.png'
          width={600}
          height={600}
          alt="phone"
        />
      </div>
    </div>
  )
}