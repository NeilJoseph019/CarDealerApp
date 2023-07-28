import styles from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__title__container}>
        <h1 className={styles.hero__title}> Search, book, or sell cars -- quickly and easily</h1>
        <p className={styles.hero__subtitle}> Relax and Enjoy a Stellar Car Dealing Experience with Us.</p>
      </div>
      <div className={styles.hero__image_container}>
          <div className={styles.hero__image}>
            <Image src="/hero.png" alt='Hero car img' fill  priority className='object-contain' />
      
          </div>
      </div>
    </div>
  )
}

export default Hero