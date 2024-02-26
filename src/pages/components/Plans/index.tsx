import styles from "./Plans.module.css"

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
      </div>
    </div>
  )
}