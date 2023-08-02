import Image from 'next/image'
import styles from './navbar.module.css'

const Navbar = () => {
  return (

    <nav className='mt-3 flex justify-center'>
      <div className={styles.nav}>
        <div className='flex ml-4 '>
            <Image src={'/car-256.png'} alt='Car logo' height={55} width={55}/>
            <h1 className='mt-2 font-logo font-bold text-[1.5rem] text-white'>CarDeal</h1>
        </div>
        <div className='mr-[2rem] mt-1'>
          <button className='border-2 px-3 py-2 rounded-[1.5rem] text-white hover:bg-slate-300 hover:text-black shadow-md'>
            Sign-In
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar