import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoDescription}>
          <Image 
            src="/images/logo03.png"
            width={200}
            height={85}
            alt="logo"
          />
          <div className={styles.description}>
            <div className={styles.descriptionContainer}>
              <p style={{fontSize: "var(--regular-font)", fontWeight: "var(--medium-bold)"}}>CONTACT</p>
              <p style={{fontSize: "var(--small-font)"}}>amplify@email.com</p>
              <p className={styles.address}>123 Abc Street Vacouver, BC A1B 2C3 Canada</p>
              <p style={{fontSize: "var(--small-font)"}}>+1 (123) 456-7890</p>
            </div>
            <div className={styles.descriptionContainer}>
              <p style={{fontSize: "var(--regular-font)", fontWeight: "var(--medium-bold)"}}>ABOUT</p>
              <Link className={styles.links} href="#">Terms of Service</Link>
              <Link className={styles.links} href="#">Privacy Policy</Link>
              <Link className={styles.links} href="#">FAQs</Link>
            </div>
            <div className={styles.descriptionContainer}>
              <p style={{fontSize: "var(--regular-font)", fontWeight: "var(--medium-bold)"}}>FOLLOW</p>
              <div className={styles.iconsContainer}>
                <Link href="https://github.com/pjiang604/MDIA3109_FinalProject.git" target="_blank">
                  <Image
                    className={styles.socialIcon} 
                    src="/images/github.png"
                    width={30}
                    height={30}
                    alt="github-icon"
                  />
                </Link>
                <Link href="#">
                  <Image
                    className={styles.socialIcon} 
                    src="/images/instagram.png"
                    width={30}
                    height={30}
                    alt="instagram-icon"
                  />
                </Link>
                <Link href="#">
                  <Image
                    className={styles.socialIcon} 
                    src="/images/facebook.png"
                    width={30}
                    height={30}
                    alt="facebook-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.horizontalLine}/>
        <p className={styles.copyrightText}>© 2024 Andrea Wu. All rights reserved</p>
      </div>
    </footer>
  )
}