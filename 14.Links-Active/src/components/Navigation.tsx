import styles from '../styles/components/navigation.module.css';


import Link from 'next/link';




export default function Navigation(){
  return (
    <nav className={styles.container}>
      <ul className='flex justify-center items-cnter gap-5'>
        <li className='text-white'>
          <Link href="/">Accueil</Link>
        </li>
        <li className='text-white'>
          <Link href="/about">À propos</Link>
        </li>
        <li className='text-white'>
          <Link href="/shop" passHref>Shop</Link>
        </li>
        <li className='text-white'>
          <Link href="/login" passHref>Login</Link>
        </li>
      </ul>
    </nav>
  )
}
