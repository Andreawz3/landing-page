import Image from "next/image";
import styles from "./NavBar.module.css"
import Link from "next/link";

export default function NavBar() {
  return (
    <header className={styles.container}>
      <Image 
        src="/images/logo02.png"
        width={55}
        height={68}
        alt="logo"
      />
      <div className={styles.linksContainer}>
        <Link href="#" >HOME</Link >
        <Link href="#" >MUSIC</Link >
        <Link href="#" >ART</Link >
        <Link href='#' className={styles.signUpLink}>SIGN UP</Link>
      </div>
    </header>
  )
}