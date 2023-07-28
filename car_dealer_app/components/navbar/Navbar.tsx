import Image from 'next/image'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div>
            <div>
                <Image src={'/car-256.png'} alt='Car logo' height={60} width={60}/>
            </div>
            <div>
                <h1>CarDeal</h1>
            </div>
        </div>
    </nav>
  )
}

export default Navbar