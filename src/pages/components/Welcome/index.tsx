import Image from "next/image"
import styles from './Welcome.module.css'
import Spline from "@splinetool/react-spline"
import Link from "next/link"

export default function Welcome() {
  return (
    <div className={styles.container}>
      <Spline className={styles.musicNotes} scene="https://prod.spline.design/7gJ9ITvOSP0UQryk/scene.splinecode" />
      <div className={styles.infoContainer}>
        <div>
          <p className={styles.subTitle}>Discover Vibrant Public Art in Vancouver</p>
          <p className={styles.title}>Immerse Yourself in the Sounds of Canadian Music</p>
          <p className={styles.description}>
            Explore the intersection of visual art and music like never before, creating 
            a truly unique and immersive cultural experience
          </p>
          <div style={{display: "flex", alignItems: 'center', gap: "12px"}}>
            <p style={{fontSize: "14px", fontWeight: 600}}>Download the App Now</p>
            <Link href="https://play.google.com/store/apps?hl=en_CA&gl=US" target="_blank">
              <Image 
                src="/images/google.png"
                width={150}
                height={50}
                alt="google play"
              />
            </Link>
            <Link href="https://www.apple.com/ca/app-store/" target="_blank">
              <Image 
                src="/images/apple.png"
                width={150}
                height={50}
                alt="apple store"
              />
            </Link>
          </div>
        </div>
        <div>
          <Spline scene="https://prod.spline.design/J32o0PZJc4Nnfxj5/scene.splinecode" />
          {/* <Image
            style={{position: "absolute", zIndex: 0}}
            src='/images/topBackground.png'
            width={550}
            height={550}
            alt="apple store"
          /> */}
        </div>
      </div>
    </div>
  )
}