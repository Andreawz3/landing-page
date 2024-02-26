import styles from './Details.module.css'

export default function Details() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Enjoy a personalized listening experience tailored to your tastes</p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <p className={styles.subtitle}>Homegrown Melodies</p>
          <p className={styles.description}>
            From soulful ballads to energetic beats, discover the diverse sounds that define your city's unique musical landscape
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.subtitle}>City Canvas</p>
          <p className={styles.description}>
            From colorful murals to striking sculptures, discover the 
            stories and inspiration behind each piece, transforming 
            ordinary spaces into vibrant art
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.subtitle}>Explore hidden gems</p>
          <p className={styles.description}>
            Learn about local artists, and gain a deeper appreciation for the artistic tapestry woven throughout your community
          </p>
        </div>
      </div>
    </div>
  )
}