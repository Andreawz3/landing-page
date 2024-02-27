import Image from "next/image"
import styles from "./Newsletter.module.css"

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <Image 
        className={styles.backgroundImg}
        src='/images/newsletterBackground.png'
        width={1440}
        height={425}
        alt="background-img"
      />
      <div className={styles.infoContainer}>
        <div>
          <p className={styles.title}>Subscribe to our Newsletter</p>
          <p className={styles.subTitle}>Receive updates instanly </p>
        </div>
        <div className={styles.subscribeContainer}>
          <Image 
            src='/images/email-icon.png'
            width={30}
            height={30}
            alt="email-icon"
          />
          <form>
            <input className={styles.emailInputBox} type="text" placeholder="Enter your email" />
            <button className={styles.subscribeBtn} type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  )
}