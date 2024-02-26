import styles from "./Plans.module.css";
import Link from "next/link";
import Spline from '@splinetool/react-spline';

export default function Plans() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <p className={styles.title}>Choose the plan that's right for you</p>
        <p className={styles.description}>
          Introducing our premium plan choices, designed to elevate 
          your experience and provide enhanced features tailored to your 
          needs. Whether you're a casual listener or a dedicated art enthusiast, 
          we have the perfect plan for you
        </p>
        <div className={styles.plansDisplay}>
          <div className={styles.plansCard}>
            <Spline style={{height: 165}} scene="https://prod.spline.design/ZPo9RcfQQdrQ3oWJ/scene.splinecode" />
            <Link className={styles.links} href="#">Individual</Link>
            <div className={styles.cardInfo}>
              <p className={styles.planPrice}>$5.99 /<span style={{fontSize: "var(--regular-font)", fontWeight: "var(--regular-bold)"}}>month</span></p>
              <p style={{textAlign: "center"}}>1 account</p>
              <div className={styles.planInfo}>
                <p>• Listen to music ad-free</p>
                <p>• Early access to new releases from featured artists</p>
                <p>• Play off-line</p>
                <p>• Create unlimited playlist</p>
                <p>• Unlimited shuffle</p>
              </div>
            </div>
          </div>
          <div className={styles.plansCard}>
            <Spline style={{height: 165}} scene="https://prod.spline.design/zgBJ9tpFn2BQf9Uw/scene.splinecode" />
            <Link className={styles.links} href="#">Duo</Link>
            <div className={styles.cardInfo}>
              <p className={styles.planPrice}>$8.99 /<span style={{fontSize: "var(--regular-font)", fontWeight: "var(--regular-bold)"}}>month</span></p>
              <p style={{textAlign: "center"}}>2 accounts</p>
              <div className={styles.planInfo}>
                <p>• Listen to music ad-free</p>
                <p>• Early access to new releases from featured artists</p>
                <p>• Play off-line</p>
                <p>• Create unlimited playlist</p>
                <p>• Unlimited shuffle</p>
              </div>
            </div>
          </div>
          <div className={styles.plansCard}>
            {/* <Spline scene="https://prod.spline.design/sKJiO8UJ0jGtwdQH/scene.splinecode" /> */}
            <Spline style={{height: 165}} scene="https://prod.spline.design/sKJiO8UJ0jGtwdQH/scene.splinecode" />
            <Link className={styles.links} href="#">Family</Link>
            <div className={styles.cardInfo}>
              <p className={styles.planPrice}>$10.99 /<span style={{fontSize: "var(--regular-font)", fontWeight: "var(--regular-bold)"}}>month</span></p>
              <p style={{textAlign: "center"}}>4 accounts</p>
              <div className={styles.planInfo}>
                <p>• Listen to music ad-free</p>
                <p>• Early access to new releases from featured artists</p>
                <p>• Play off-line</p>
                <p>• Create unlimited playlist</p>
                <p>• Unlimited shuffle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}