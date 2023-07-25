import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__title__container}>
        <h1 className={styles.hero__title}> Search, book, or sell cars -- quickly and easily</h1>
        <p className={styles.hero__subtitle}> Relax and Enjoy a Stellar Car Dealing Experience with Us.</p>
      </div>
    </div>
  )
}

export default Hero